# Map with orthographic

Using components in `react-d3-map` and `react-d3-map-core`, you can build your own reusable maps, such as orthographic in maps.


<div id="blank-multipolygon" class="demo"></div>
<script src="/react-d3-example/dist/map_detail/min/ortho_polygon.min.js"></script>

```js
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
```
