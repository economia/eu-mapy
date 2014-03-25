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
    *   attribution: 'mapová data &copy; přispěvatelé <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a>'
mapMaster.addLayer grid = new L.UtfGrid "../data/tiles/gdp-change-2000-2011/{z}/{x}/{y}.json", useJsonP: no
grid
    ..on \mouseover (evt) ->
        [name, [pre, post]] = evt.data
        perc = post / pre - 1
        percHuman = (perc * 100).toFixed 2
        tooltip.display "<b>#name</b><br />Mezi roky 2000 a 2011 se HDP zvýšilo o #{percHuman}% (z #{ig.utils.formatPrice pre}&euro; na #{ig.utils.formatPrice post}&euro;)"
    ..on \mouseout (evt) ->
        tooltip.hide!
