# Map bubble

`react-d3-map-bubble` provide high level component, that you can build your bubble map plot in ease.

<div id="blank-earthquake" class="demo"></div>
<script src="/react-d3-example/dist/map_detail/min/earthquake.min.js"></script>

```js
ReactDOM.render(
  <MapBubble
    width= {width}
    height= {height}
    domain= {domain}
    dataCircle= {circles}
    circleValue= {circleValue}
    circleClass= {'bubble'}
    circleX= {circleX}
    circleY= {circleY}
    tooltipContent= {tooltipContent}
    projection= {projection}
    precision= {precision}
    translate= {translate}
    scale= {scale}
    showGraticule= {true}
    showTooltip= {true}
    showLegend= {false}
    showTile= {true}
  />
, document.getElementById('blank-earthquake')
)
```
