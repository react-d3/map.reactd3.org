# Building a interactive map

`react-d3-map` can make you easily build interactive map just like leaflet, openlayers. But we replace layers with SVG components. Which can make us access to DOM more easily.


<div id="blank-point" class="demo"></div>
<script src="/react-d3-example/dist/map_detail/min/interactive_marker.min.js"></script>

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
      onClick= {onMarkerClick}
      onCloseClick= {onMarkerCloseClick}
      onMouseOver= {onMarkerMouseOver}
      onMouseOut= {onMarkerMouseOut}
      markerClass= {"your-marker-css-class"}
    />
  </Map>
, document.getElementById('blank-point')
)
```
