```js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var topojson = require('topojson');

var MapOrthographic = require('react-d3-map-orthographic').MapOrthographic;
var PolygonGroup = require('react-d3-map').PolygonGroup;

var css= require('../css/polygon.css');

// Example
(function() {
  var width = 700;
  var height = 700;
  var scale = 1 << 12;
  var scaleExtent = [1 << 10, 1 << 14]
  var center = [-100.95, 40.7];
  var data = require('json!../data/states.json');

  var onPolygonMouseOut= function(dom , d, i) {
    console.log('out')
  }
  var onPolygonMouseOver= function(dom, d, i) {
    console.log('over')
  }
  var onPolygonClick= function(dom, d, i) {
    console.log('click')
  }
  var onPolygonCloseClick= function(id) {
    console.log('close click')
    console.log(id)
  }
  var popupContent = function(d) { return 'hi, i am polygon'; }

  var Container = React.createClass({
    render: function() {
      return (
        <g>
          <PolygonGroup
            key= {"polygon-test"}
            data= {data}
            popupContent= {popupContent}
            onClick= {onPolygonClick}
            onCloseClick= {onPolygonCloseClick}
            onMouseOver= {onPolygonMouseOver}
            onMouseOut= {onPolygonMouseOut}
            polygonClass= {"my-polygon"}
          />
        </g>
      )
    }
  })

  ReactDOM.render(
    <MapOrthographic
      width= {width}
      height= {height}
      scale= {scale}
      scaleExtent= {scaleExtent}
      center= {center}
      clip={true}
      bounds={[[0, 0], [width, height]]}
    >
      <Container/>
    </MapOrthographic>
  , document.getElementById('blank-multipolygon')
  )

})()
```
