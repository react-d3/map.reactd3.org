First prepare your data you want to show on your map.

`react-d3-map` **only support geojson**. Which means you have to have a data like below for example.

This is a simple point.

```js
{
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
