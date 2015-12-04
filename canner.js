

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
  "layout": "./gallery.hbs",
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
  "layout": "./gallery.hbs",
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
        "name": "",
        "md": ""
      }]
    }
  }
}
]
