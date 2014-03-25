return unless ig.containers.changePPS
options =
    minZoom: 3,
    maxZoom: 7,
    zoom: 4,
    center: [55, 10]
    animate: no

masterContainer = ig.containers.changePPS
$ masterContainer .addClass \change
mapMaster = L.map masterContainer, options
mapMaster.addLayer bgLayer = L.tileLayer "http://staticmaps.ihned.cz/tiles-world-osm//{z}/{x}/{y}.png"
mapMaster.addLayer mapLayer = L.tileLayer do
    *   "../data/tiles/pps-change-2000-2011/{z}/{x}/{y}.png"
    *   attribution: 'mapová data &copy; přispěvatelé <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a>, obrazový podkres <a target="_blank" href="http://ihned.cz">IHNED.cz</a>, data <a target="_blank" href="http://appsso.eurostat.ec.europa.eu/nui/show.do?dataset=nama_r_e2gdp&lang=en">eurostat</a>'
mapMaster.addLayer grid = new L.UtfGrid "../data/tiles/pps-change-2000-2011/{z}/{x}/{y}.json", useJsonP: no
grid
    ..on \mouseover (evt) ->
        [name, [pre, post]] = evt.data
        perc = post / pre - 1
        verb = if perc > 0 then "zvýšila" else "snížila"
        percHuman = (Math.abs perc * 100).toFixed 2
        tooltip.display "<b>#name</b><br />Mezi roky 2000 a 2011 se kupní síla #{verb} o #{percHuman}% (z #{ig.utils.formatPrice pre}&euro; na #{ig.utils.formatPrice post}&euro;)"
    ..on \mouseout (evt) ->
        tooltip.hide!
addLegend do
    *   masterContainer
    *   [\#fee08b "95%"]
        [\#ffffbf "100%"]
        [\#d9ef8b "112%"]
        [\#a6d96a "12ř%"]
        [\#66bd63 "137%"]
        [\#1a9850 "149%"]
        [\#006837 "288%"]
