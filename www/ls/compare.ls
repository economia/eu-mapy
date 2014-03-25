return unless ig.containers.compare
masterContainer = document.createElement \div
    ..className = "map-container master"
masterPositioner = document.createElement \div
    ..className = "map-positioner master"
masterContainer.appendChild masterPositioner
ig.containers.compare.appendChild masterContainer
slaveContainer = document.createElement \div
    ..className = "map-container slave"
slavePositioner = document.createElement \div
    ..className = "map-positioner slave"
slaveContainer.appendChild slavePositioner
ig.containers.compare.appendChild slaveContainer
$masterContainer = $ ig.containers.compare
$slaveContainer = $ slaveContainer
$slider = $ "<div />"
    ..addClass \slider
    ..appendTo $masterContainer
    ..append "<div class='arrow left'>2000<div></div></div>"
    ..append "<div class='arrow right'>2011<div></div></div>"
draggingSlider = no
onSliderDrag = (evt) ->
    return unless draggingSlider
    x = evt.clientX - offX
    x = 0    if x < 0
    x = maxX if x > maxX
    $slider.css \left x
    $slaveContainer.css \width maxX - x

$slider.on \mousedown (evt) ->
    evt.preventDefault!
    draggingSlider := yes
    onSliderDrag evt
$ document .on \mouseup -> draggingSlider := no
offX = $masterContainer.offset!left
maxX = $masterContainer.width!
$ document .on \mousemove onSliderDrag

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
    <~ setImmediate
    return if mapMaster.getZoom! == evt.target._animateToZoom
    mapSlave.setView evt.target._animateToCenter, evt.target._animateToZoom

mapSlave.on \zoomstart (evt) ->
    <~ setImmediate
    return if mapSlave.getZoom! == evt.target._animateToZoom
    mapMaster.setView evt.target._animateToCenter, evt.target._animateToZoom

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
years = [2000 2011]
for let grid, index in [grid1, grid2]
    displayedHere = null
    grid
        ..on \mousemove (evt) ->
            if displayedHere isnt displayedSomewhere
                [name, value] = displayedHere
                displayedSomewhere := displayedHere
                tooltip.display "<b>#name</b><br /> HDP na obyvatele v roce #{years[index]}: #{ig.utils.formatPrice value} &euro;"
        ..on \mouseover (evt) ->
            [name, value] = evt.data
            displayedHere := evt.data
            displayedSomewhere := evt.data
            tooltip.display "<b>#name</b><br /> HDP na obyvatele v roce #{years[index]}: #{ig.utils.formatPrice value} &euro;"
        ..on \mouseout (evt) ->
            tooltip.hide!
            displayedHere := null
$masterContainer.on \mouseout ->
    tooltip.hide!

addLegend do
    *   masterContainer
    *   [\#deebf7 "2 900&euro;"]
        [\#c6dbef "6 500&euro;"]
        [\#9ecae1 "11 560&euro;"]
        [\#6baed6 "16 620&euro;"]
        [\#4292c6 "21 680&euro;"]
        [\#2171b5 "26 740&euro;"]
        [\#08519c "31 800&euro;"]
        [\#08306b "86 000&euro;"]
