

module.exports = [{
  "layout": "./index.hbs",
  "helpers": ["./helper/ifCond.js","./helper/multipleOr.js", './helper/id.js'],
  "data": {
    "item": "react-d3-map",
    "logo": "/img/react-d3_2.png",
    "slogan": "Painless building d3 maps",
    "description": "A whole new solution for building reusable components for d3 maps",
    "banner-img": "/img/basic/cover.png",
    "product": {
      "title": "react-d3-map",
      "data": [{
        "name": "Introduction",
        "feature": [
          {
            "name": "Preserve d3 flexibility",
            "description": "<code>react-d3</code> is a highly module library. You can build new d3 charts using <code>react-d3</code> to create axis using <code>xaxis</code> component,  <code>yaxis</code> component, label using <code>label</code> component, legend <code>legend</code> component... etc, in other word, it extends the flexibility of <code>d3</code> library so you can assemble a whole new chart using core components."
          },
          {
            "name": "Provide high level chart library",
            "description": "<code>react-d3</code> support high level components which you can install and create a line chart, bar chart, pie chart... etc, within a component."
          },
          {
            "name": "Better data flow, and structures",
            "description": "<code>react-d3</code> combine the power of <code>d3</code> flexibility and the data flow, structures, components, virtual DOM, and others benefits that <code>react.js</code> provide."
          }
        ]
      },{
        "name": "Demo",
        "demo": [
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
        "name": "",
        "md": ""
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
