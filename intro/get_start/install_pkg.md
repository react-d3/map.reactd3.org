Pick one `react-d3-map` component you want to install, such as:

- react-d3-map: https://github.com/react-d3/react-d3-map
- react-d3-map-bubble: https://github.com/react-d3/react-d3-map-bubble
- react-d3-map-choropleth: https://github.com/react-d3/react-d3-map-choropleth
- react-d3-map-orthographic: https://github.com/react-d3/react-d3-map-orthographic

Install `react-d3-map`:

```
npm install --save react-d3-map
```

`react-d3` packages require to be bundled with `webpack` or `browserify`

Sample `webpack` setting:

```js
'use strict';

var path            = require('path'),
  webpack         = require('webpack');

var js_dist = path.join(__dirname, './dist');

module.exports = [{
  name: 'chartComponent',
  entry: {
    line: './map.jsx',
  },

  output: {
    path: js_dist,
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/],
        loaders: ["jsx-loader?insertPragma=React.DOM&harmony"],
      }
    ],
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  }
}];
```
