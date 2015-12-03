# Building a simple line chart

`react-d3` is a highly modular chart library, you can create your d3 charts such as line chart, bar chart, bar stack chart, multiple line chart within a component.

<div id="line-garbage" class="demo"></div>
<script src="/react-d3-example/dist/simple/min/line_garbage.min.js"></script>

```js
"use strict"

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;

(function() {
  // load your general data
  var chartData = require('dsv?delimiter=,!../data/garbage.csv');
  // your date format, use for parsing
  var parseDate = d3.time.format("%YM%m").parse;

  var width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    title = "Taiwan refuse disposal",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'total',
        name: 'Total',
        color: '#ff7f0e'
      }
    ],
    // your x accessor
    x = function(d) {
      return parseDate(d.month);
    },
    xScale = 'time';


  ReactDOM.render(
    <Chart
      title={title}
      width={width}
      height={height}
      margins= {margins}
      >
      <LineChart
        margins= {margins}
        title={title}
        data={chartData}
        width={width}
        height={height}
        chartSeries={chartSeries}
        x={x}
        xScale={xScale}
      />
    </Chart>
  , document.getElementById('line-garbage')
  )
})()
```


<a href="/docs/basic">
  <button type="button" class="btn btn-danger btn-lg">See more Charts!</button>
</a>
