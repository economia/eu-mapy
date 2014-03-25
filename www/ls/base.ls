window.tooltip = new Tooltip!
window.addLegend = (target, fields) ->
    $legend = $ "<ol />"
        ..addClass 'legend'
        ..appendTo target
    for [color, label] in fields
        $ "<li />"
            ..css \background color
            ..html label
            ..appendTo $legend
