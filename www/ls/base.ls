tooltip = new Tooltip!
masterContainer = document.createElement \div
    ..className = "map-container master"
masterPositioner = document.createElement \div
    ..className = "map-positioner master"
masterContainer.appendChild masterPositioner
ig.containers.base.appendChild masterContainer
slaveContainer = document.createElement \div
    ..className = "map-container slave"
slavePositioner = document.createElement \div
    ..className = "map-positioner slave"
slaveContainer.appendChild slavePositioner
ig.containers.base.appendChild slaveContainer

options =
    minZoom: 3,
    maxZoom: 7,
    zoom: 6,
    center: [50, 14.47]
    animate: no
mapMaster = L.map masterPositioner, options
mapSlave = L.map slavePositioner, options

mapMaster.on \move ->
    center = mapMaster.getCenter!
    zoom = mapMaster.getZoom!
    mapSlave.setView center, zoom, animate: no

mapSlave.on \move ->
    center = mapSlave.getCenter!
    zoom = mapSlave.getZoom!
    mapMaster.setView center, zoom, animate: no

mapMaster.on \zoomstart (evt) ->
    setImmediate -> mapSlave.setZoom evt.target._animateToZoom

mapSlave.on \zoomstart (evt) ->
    setImmediate -> mapMaster.setZoom evt.target._animateToZoom

bgLayer = L.tileLayer "http://staticmaps.ihned.cz/tiles-world-osm//{z}/{x}/{y}.png"
bgLayer.addTo mapMaster
mapLayer = L.tileLayer do
    *   "../data/tiles/gdp-2000/{z}/{x}/{y}.png"
    *   attribution: 'mapová data &copy; přispěvatelé <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a>'

mapLayer2 = L.tileLayer do
    *   "../data/tiles/gdp-2011/{z}/{x}/{y}.png"
    *   attribution: 'mapová data &copy; přispěvatelé <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a>'

mapLayer.addTo mapMaster
mapLayer2.addTo mapSlave
[grid1, grid2] =
    new L.UtfGrid "../data/tiles/gdp-2000/{z}/{x}/{y}.json", useJsonP: no
    new L.UtfGrid "../data/tiles/gdp-2011/{z}/{x}/{y}.json", useJsonP: no

mapMaster.addLayer grid1
mapSlave.addLayer grid2
displayedSomewhere = null
i = 0
for let grid in [grid1, grid2]
    ii = i++
    displayedHere = null
    grid
        ..on \mousemove (evt) ->
            if displayedHere isnt displayedSomewhere
                [nuts, name, value] = displayedHere
                displayedSomewhere := displayedHere
                tooltip.display "#name #value"
        ..on \mouseover (evt) ->
            [nuts, name, value] = evt.data
            displayedHere := evt.data
            displayedSomewhere := evt.data
            tooltip.display "#name #value"
        ..on \mouseout (evt) ->
            tooltip.hide!
            displayedHere := null
$ ig.containers.base .on \mouseout ->
    tooltip.hide!
