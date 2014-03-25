window.ig.data = {"style":"/* required styles */\r\n\r\n.leaflet-map-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-pane,\r\n.leaflet-tile-container,\r\n.leaflet-overlay-pane,\r\n.leaflet-shadow-pane,\r\n.leaflet-marker-pane,\r\n.leaflet-popup-pane,\r\n.leaflet-overlay-pane svg,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t-ms-touch-action: none;\r\n\t}\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        user-select: none;\r\n\t-webkit-user-drag: none;\r\n\t}\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n/* map is broken in FF if you have max-width: 100% on tiles */\r\n.leaflet-container img {\r\n\tmax-width: none !important;\r\n\t}\r\n/* stupid Android 2 doesn't understand \"max-width: none\" properly */\r\n.leaflet-container img.leaflet-image-layer {\r\n\tmax-width: 15000px !important;\r\n\t}\r\n.leaflet-tile {\r\n\tfilter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\t}\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-tile-pane    { z-index: 2; }\r\n.leaflet-objects-pane { z-index: 3; }\r\n.leaflet-overlay-pane { z-index: 4; }\r\n.leaflet-shadow-pane  { z-index: 5; }\r\n.leaflet-marker-pane  { z-index: 6; }\r\n.leaflet-popup-pane   { z-index: 7; }\r\n\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 7;\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-tile,\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t   -moz-transition: opacity 0.2s linear;\r\n\t     -o-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n.leaflet-fade-anim .leaflet-tile-loaded,\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t     -o-transition:      -o-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile,\r\n.leaflet-touching .leaflet-zoom-animated {\r\n\t-webkit-transition: none;\r\n\t   -moz-transition: none;\r\n\t     -o-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n\r\n/* cursors */\r\n\r\n.leaflet-clickable {\r\n\tcursor: pointer;\r\n\t}\r\n.leaflet-container {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\r\n\t}\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n.leaflet-dragging,\r\n.leaflet-dragging .leaflet-clickable,\r\n.leaflet-dragging .leaflet-container {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\r\n\t}\r\n\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #05f;\r\n\tbackground: white;\r\n\topacity: 0.5;\r\n\t}\r\n\r\n\r\n/* general typography */\r\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 7px rgba(0,0,0,0.65);\r\n\t-webkit-border-radius: 4px;\r\n\t        border-radius: 4px;\r\n\t}\r\n.leaflet-bar a, .leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n.leaflet-bar a:first-child {\r\n\t-webkit-border-top-left-radius: 4px;\r\n\t        border-top-left-radius: 4px;\r\n\t-webkit-border-top-right-radius: 4px;\r\n\t        border-top-right-radius: 4px;\r\n\t}\r\n.leaflet-bar a:last-child {\r\n\t-webkit-border-bottom-left-radius: 4px;\r\n\t        border-bottom-left-radius: 4px;\r\n\t-webkit-border-bottom-right-radius: 4px;\r\n\t        border-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar {\r\n\t-webkit-border-radius: 10px;\r\n\t        border-radius: 10px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\t-webkit-border-top-left-radius: 7px;\r\n\t        border-top-left-radius: 7px;\r\n\t-webkit-border-top-right-radius: 7px;\r\n\t        border-top-right-radius: 7px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\t-webkit-border-bottom-left-radius: 7px;\r\n\t        border-bottom-left-radius: 7px;\r\n\t-webkit-border-bottom-right-radius: 7px;\r\n\t        border-bottom-right-radius: 7px;\r\n\tborder-bottom: none;\r\n\t}\r\n\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\t}\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 22px 'Lucida Console', Monaco, monospace;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in {\r\n\tfont-size: 22px;\r\n\tline-height: 30px;\r\n\t}\r\n.leaflet-touch .leaflet-control-zoom-out {\r\n\tfont-size: 28px;\r\n\tline-height: 30px;\r\n\t}\r\n\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 7px rgba(0,0,0,0.4);\r\n\tbackground: #f8f8f9;\r\n\t-webkit-border-radius: 5px;\r\n\t        border-radius: 5px;\r\n\t}\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url(images/layers.png);\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url(images/layers-2x.png);\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground-color: rgba(255, 255, 255, 0.7);\r\n\tbox-shadow: 0 0 5px #bbb;\r\n\tmargin: 0;\r\n\t}\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\r\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tcolor: black;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\ttext-shadow: 1px 1px 1px #fff;\r\n\tbackground-color: rgba(255, 255, 255, 0.5);\r\n\tbox-shadow: 0 -1px 5px rgba(0, 0, 0, 0.2);\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\tbox-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 4px solid rgba(0,0,0,0.3);\r\n\t}\r\n\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\t}\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\t-webkit-border-radius: 12px;\r\n\t        border-radius: 12px;\r\n\t}\r\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\r\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\r\n.leaflet-popup-tip-container {\r\n\tmargin: 0 auto;\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\t}\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t   -moz-transform: rotate(45deg);\r\n\t    -ms-transform: rotate(45deg);\r\n\t     -o-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n.leaflet-popup-content-wrapper, .leaflet-popup-tip {\r\n\tbackground: white;\r\n\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n.leaflet-editing-icon {\r\n\t-webkit-border-radius: 2px;\r\n\t        border-radius: 2px;\r\n\t}\r\n\n\n.tooltip{font-family:arial,helvetica,sans-serif;z-index:50;position:absolute;border:1px solid #888;color:#111;border-radius:4px;background-color:#fff;padding:5px 10px;margin-top:-8px;margin-left:0;box-shadow:#aaa 0 0 1px;}\n.tooltip p.only-child{margin:0}\n\n\n\n#heading .r:empty {\n  display: none;\n}\n#heading .r:empty ~.l {\n  width: 970px;\n  position: relative;\n}\n#heading .r:empty ~.l .author {\n  position: absolute;\n  margin-top: 0px;\n  margin-right: 0px;\n  top: 52px;\n  right: 3px;\n}\nimg.zoomable,\ndiv.zoom,\ndiv.picture,\n.hlavni-obrazek-popis {\n  display: none !important;\n}\nbody {\n  margin: 0px;\n}\n.ig {\n  font-size: 12pt;\n  margin: 0px;\n  line-height: 1.3em;\n  font-family: arial, sans-serif;\n  position: relative;\n  margin-left: 0px;\n}\n.ig *,\n.ig *:before,\n.ig *:after {\n  box-sizing: border-box;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.ig a {\n  color: #174f82;\n  text-decoration: underline;\n}\n.ig a:active,\n.ig a:focus {\n  text-decoration: none;\n}\n.ig .fallback {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 600px;\n  background: #fff;\n  z-index: 10;\n}\n.ig .fallback div {\n  margin: 270px 40px 0px 40px;\n  text-align: center;\n  padding: 20px 10px;\n  border: 1px dotted #aaa;\n}\n.tooltip {\n  margin-top: -20px;\n}\n.ig.compare,\n.ig.change {\n  float: left;\n  width: 650px;\n  height: 650px;\n  overflow: hidden;\n  position: relative;\n}\n.ig.compare a,\n.ig.change a {\n  text-decoration: none;\n  color: #333;\n}\n.ig.compare .legend,\n.ig.change .legend {\n  position: absolute;\n  bottom: 25px;\n  left: 0px;\n  list-style-type: none;\n  margin: 0px;\n  padding: 0px;\n  border: 1px solid #aaa;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n  overflow: hidden;\n  z-index: 99;\n}\n.ig.compare .legend li,\n.ig.change .legend li {\n  padding: 0px;\n  margin: 0px;\n  float: left;\n  font-size: 0.8em;\n  font-weight: bold;\n  padding: 2px 4px;\n  color: #333;\n}\n.ig.change .legend li:first-child,\n.ig.change .legend li:last-child {\n  color: #eee;\n}\n.ig.compare .legend li:nth-child(6),\n.ig.compare .legend li:nth-child(7),\n.ig.compare .legend li:last-child {\n  color: #eee;\n}\n.ig.compare .map-container {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  overflow: hidden;\n}\n.ig.compare .map-container .map-positioner {\n  top: 0px;\n  bottom: 0px;\n  position: absolute;\n}\n.ig.compare .map-container.master {\n  left: 0px;\n  width: 100%;\n}\n.ig.compare .map-container.master .map-positioner {\n  width: 100%;\n  left: 0px;\n}\n.ig.compare .map-container.slave {\n  right: 0px;\n  width: 50%;\n}\n.ig.compare .map-container.slave .map-positioner {\n  width: 650px;\n  right: 0px;\n  background: transparent;\n}\n.ig.compare .slider {\n  position: absolute;\n  top: 8px;\n  left: 50%;\n  width: 115px;\n  margin-left: -57.5px;\n  height: 22px;\n  opacity: 0.6;\n  font-size: 0.9em;\n  font-weight: bold;\n  cursor: e-resize;\n}\n.ig.compare .slider .arrow {\n  position: absolute;\n  top: 0px;\n}\n.ig.compare .slider .arrow div {\n  background: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIxMy43MjVweCIgaGVpZ2h0PSIyMi4wNjJweCIgdmlld0JveD0iMCAwIDEzLjcyNSAyMi4wNjIiID4NCjxwYXRoIGQ9Ik02LjM3NSwxMS4wM2w2Ljc0Mi02Ljc0MmMwLjgxLTAuODA5LDAuODEtMi4xMzUsMC0yLjk0NEwxMi4zOCwwLjYwN2MtMC44MS0wLjgxMS0yLjEzNS0wLjgxMS0yLjk0NSwwTDAuNiw5LjQ0Mg0KCWMtMC40MzUsMC40MzQtMC42MjgsMS4wMTctMC41OTcsMS41ODljLTAuMDMxLDAuNTcxLDAuMTYyLDEuMTU0LDAuNTk3LDEuNTg4bDguODM1LDguODM0YzAuODEsMC44MTEsMi4xMzUsMC44MTEsMi45NDUsMA0KCWwwLjczNy0wLjczN2MwLjgxLTAuODA4LDAuODEtMi4xMzQsMC0yLjk0M0w2LjM3NSwxMS4wM3oiLz4NCjwvc3ZnPg0K\") no-repeat;\n  width: 24px;\n  height: 22px;\n  position: absolute;\n  top: 0px;\n}\n.ig.compare .slider .arrow.left {\n  background-position: left;\n  padding-left: 20px;\n}\n.ig.compare .slider .arrow.left div,\n.ig.compare .slider .arrow.left {\n  left: 0px;\n}\n.ig.compare .slider .arrow.right {\n  background-position: right;\n  padding-right: 20px;\n}\n.ig.compare .slider .arrow.right div,\n.ig.compare .slider .arrow.right {\n  right: 0px;\n}\n.ig.compare .slider .arrow.right div {\n  transform: rotate(180deg);\n  -o-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -webkit-transform: rotate(180deg);\n}\n"};