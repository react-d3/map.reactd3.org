# Map choropleth

`react-d3-map-choropleth` provide high level component, that you can build your choropleth map plot in ease.


<div id="blank-twpopulation" class="demo"></div>
<script src="/react-d3-example/dist/map_detail/min/twpopulation.min.js"></script>

```js
ReactDOM.render(
  <MapChoropleth
    width= {width}
    height= {height}
    dataPolygon= {dataCounties}
    dataMesh= {dataMeshCounties}
    scale= {scale}
    domain= {domain}
    domainData= {valArr}
    domainValue= {domainValue}
    domainKey= {domainKey}
    mapKey = {mapKey}
    center= {center}
    projection= {projection}
    showGraticule= {false}
    tooltipContent= {tooltipContent}
    showTooltip= {true}
    showTile= {true}
  />
, document.getElementById('blank-twpopulation')
)
```
