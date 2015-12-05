

module.exports = [{
  "layout": "./index.hbs",
  "helpers": ["./helper/ifCond.js","./helper/multipleOr.js", './helper/id.js'],
  "data": {
    "item": "react-d3-map",
    "logo": "/img/react-d3_2.png",
    "slogan": "A Javascript Library For Building Composable And Declarative Maps",
    "description": "A whole new solution for building reusable components for your maps",
    "banner-img": "/img/map.png",
    "product": {
      "title": "react-d3-map",
      "data": [{
        "name": "Introduction",
        "feature": [
          {
            "name": "<span class=\"glyphicon glyphicon-refresh\"></span>Preserve d3 flexibility",
            "description": "<code>react-d3-map</code> is a highly modular map library. You can build new interactive maps like leaflet, openlayers. And you could also build customized data visualization maps you love! "
          },
          {
            "name": "<span class=\"glyphicon glyphicon-stats\"></span>Provide high level chart library",
            "description": "<code>react-d3-map</code> support high level components that you can build your shapes like polygons, points, markers, lines ... etc. By importing the exact module you need."
          },
          {
            "name": "<span class=\"glyphicon glyphicon-retweet\"></span>Better data flow, and structures",
            "description": "<code>react-d3-map</code> combine the power of <code>d3</code> flexibility and the data flow, structures, components, virtual DOM, and others benefits that <code>react.js</code> provide."
          }
        ]
      },{
        "name": "Demo",
        "demo": [
          {
            "md": "./intro/demo/demo_map.md"
          },
          {
            "md": "./intro/demo/demo_bubble.md"
          },
          {
            "md": "./intro/demo/demo_orthographic.md"
          },
          {
            "md": "./intro/demo/demo_choropleth.md"
          }
        ]
      }]
    }
  }
},{
  "layout": "./docs.hbs",
  "filename": "./get_start/index.html",
  "helpers": ["./helper/ifCond.js","./helper/multipleOr.js", './helper/id.js'],
  "data": {
    "item": "Getting started react-d3-map",
    "logo": "/img/react-d3_2.png",
    "product": {
      "title": "react-d3-map",
      "data": [{
          "name": "Getting Started",
          "md": "./intro/get_start/install_pkg.md"
        },
        {
          "name": "Prepare your Data",
          "md": "./intro/get_start/data_prepare.md"
        },
        {
          "name": "Write map",
          "md": "./intro/get_start/write_map.md"
        },{
          "name": "Load into your html",
          "md": "./intro/get_start/load_html.md"
        },{
          "name": "Result",
          "md": "./intro/get_start/result.md"
        },{
          "name": "Code on Github",
          "md": "./intro/get_start/code.md"
        }]
    }
  }
},
{
  "layout": "./docs.hbs",
  "filename": "./docs/index.html",
  "helpers": ["./helper/ifCond.js","./helper/multipleOr.js", './helper/id.js'],
  "data": {
    "item": "react-d3-map gallery",
    "logo": "/img/react-d3_2.png",
    "product": {
      "title": "react-d3-map",
      "data": [{
        "name": "",
        "md": ""
      }]
    }
  }
},
{
  "layout": "./gallery.hbs",
  "filename": "./gallery/index.html",
  "helpers": ["./helper/ifCond.js","./helper/multipleOr.js", './helper/id.js'],
  "data": {
    "item": "react-d3-map gallery",
    "logo": "/img/react-d3_2.png",
    "product": {
      "title": "react-d3-map",
      "data": [{
        "name": "react-d3-map",
        "md": "./intro/components/map.md",
        "item": [
          {
            "url": "/gallery/demo/map/line.html",
            "src": "/img/map/line-map.png",
            "text": "Interactive map with line and popup content"
          },
          {
            "url": "/gallery/demo/map/marker.html",
            "src": "/img/map/point-map.png",
            "text": "Interactive map with marker and popup content"
          },
          {
            "url": "/gallery/demo/map/polygon.html",
            "src": "/img/map/polygon-map.png",
            "text": "Interactive map with polygon and popup content"
          }
        ]
      }, {
        "name": "react-d3-bubble",
        "md": "./intro/components/bubble.md",
        "item": [
          {
            "url": "",
            "src": "/img/bubble/bubble-earthquake.png",
            "text": "Map bubble to display global history earthquake"
          },
          {
            "url": "",
            "src": "/img/bubble/bubble-earthquake-tile.png",
            "text": "Map bubble to display global history earthquake with tiles"
          },
          {
            "url": "",
            "src": "/img/bubble/bubble-us.png",
            "text": "Map bubble to display US data."
          }
        ]
      }, {
        "name": "react-d3-choropleth",
        "md": "./intro/components/choropleth.md",
        "item": [
          {
            "url": "",
            "src": "/img/choropleth/choropleth-twpopulation.png",
            "text": "Map choropleth to display Taiwan population"
          },
          {
            "url": "",
            "src": "/img/choropleth/choropleth-twpopulation-tile.png",
            "text": "Map choropleth to display Taiwan population with tiles"
          },
          {
            "url": "",
            "src": "/img/choropleth/choropleth-us.png",
            "text": "Map choropleth to display US data."
          }
        ]
      }, {
        "name": "react-d3-orthographic",
        "md": "./intro/components/orthographic.md",
        "item": [
          {
            "url": "",
            "src": "/img/orthographic/ortho-line.png",
            "text": "Map orthographic to display line."
          },
          {
            "url": "",
            "src": "/img/orthographic/ortho-point.png",
            "text": "Map orthographic to display point."
          },
          {
            "url": "",
            "src": "/img/orthographic/ortho-polygon.png",
            "text": "Map orthographic to display polygon."
          }
        ]
      }]
    }
  }
}
]
