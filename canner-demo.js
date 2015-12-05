
var pages = [{
  category: 'map',
  name: 'line',
  chartId: 'blank-line',
  script: '/react-d3-example/dist/map_detail/min/interactive_line.min.js',
  code: './gallery/demo/map/md/line.md'
},{
  category: 'map',
  name: 'marker',
  chartId: 'blank-point',
  script: '/react-d3-example/dist/map_detail/min/interactive_marker.min.js',
  code: './gallery/demo/map/md/marker.md'
},{
  category: 'map',
  name: 'polygon',
  chartId: 'blank-multipolygon',
  script: '/react-d3-example/dist/map_detail/min/interactive_polygon.min.js',
  code: './gallery/demo/map/md/polygon.md'
}]

var n = pages.map(function(d) {
  return {
    "layout": "./demo.hbs",
    "filename": "./gallery/demo/" + d.category + "/" + d.name + ".html",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js", './helper/id.js'],
    "data": {
      "item": "react-d3-" + d.category + " / " + d.name,
      "logo": "/img/react-d3_2.png",
      "title": "react-d3-" + d.category + " / " + d.name,
      "demo": {
        "chartId": d.chartId,
        "script": d.script
      },
      "code": d.code
    }
  }
})

module.exports = n;
