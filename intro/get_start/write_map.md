Create a new file called `line.jsx` (which we have setup webpack to compile).


### Require Libraries

we need to require some library we need to use:

```js
// first of course react!
var React = require('react');
// require your <Map> component
var Map = require('react-d3-map').Map;
// require your <Marker> component
var MarkerGroup = require('react-d3-map').MarkerGroup;

```

### Load

load your data

```js
var data = {
    "type": "Feature",
    "properties": {
      "text": "this is a Point!!!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [122, 23.5]
    }
}
```

### Settings

your chart settings (such as settings for axis, legend, lines, chart basic settings)

```js
  var width = 700;
  var height = 700;
  // set your zoom scale
  var scale = 1200 * 5;
  // min and max of your zoom scale
  var scaleExtent = [1 << 12, 1 << 13]
  // set your center point
  var center = [122, 23.5];
  // set your popupContent
  var popupContent = function(d) { return d.properties.text; }
```

### Render!

Render it in React!

```js
ReactDOM.render(
  <Map
    width= {width}
    height= {height}
    scale= {scale}
    scaleExtent= {scaleExtent}
    center= {center}
  >
    <MarkerGroup
      key= {"polygon-test"}
      data= {data}
      popupContent= {popupContent}
      markerClass= {"your-marker-css-class"}
    />
  </Map>
, document.getElementById('blank-point')
)
```
