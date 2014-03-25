return unless ig.containers.change
options =
    minZoom: 3,
    maxZoom: 7,
    zoom: 4,
    center: [55, 10]
    animate: no

masterContainer = ig.containers.change
mapMaster = L.map masterContainer, options
mapMaster.addLayer bgLayer = L.tileLayer "http://staticmaps.ihned.cz/tiles-world-osm//{z}/{x}/{y}.png"
mapMaster.addLayer mapLayer = L.tileLayer do
    *   "../data/tiles/gdp-change-2000-2011/{z}/{x}/{y}.png"
    *   attribution: 'mapová data &copy; přispěvatelé <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a>, obrazový podkres <a target="_blank" href="http://ihned.cz">IHNED.cz</a>, data <a target="_blank" href="http://appsso.eurostat.ec.europa.eu/nui/show.do?dataset=nama_r_e2gdp&lang=en">eurostat</a>'
mapMaster.addLayer grid = new L.UtfGrid "../data/tiles/gdp-change-2000-2011/{z}/{x}/{y}.json", useJsonP: no
grid
    ..on \mouseover (evt) ->
        [name, [pre, post]] = evt.data
        perc = post / pre - 1
        verb = if perc > 0 then "zvýšilo" else "snížilo"
        percHuman = (Math.abs perc * 100).toFixed 2
        tooltip.display "<b>#name</b><br />Mezi roky 2000 a 2011 se HDP #{verb} o #{percHuman}% (z #{ig.utils.formatPrice pre}&euro; na #{ig.utils.formatPrice post}&euro;)"
    ..on \mouseout (evt) ->
        tooltip.hide!
addLegend do
    *   masterContainer
    *   [\#d73027 "88%"]
        [\#ffffbf "100%"]
        [\#d9ef8b "118%"]
        [\#a6d96a "136%"]
        [\#66bd63 "154%"]
        [\#1a9850 "172%"]
        [\#006837 "387%"]
