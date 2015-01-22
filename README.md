# turf-bbox-polygon

[![build status](https://secure.travis-ci.org/Turfjs/turf-bboxPolygon.png)](http://travis-ci.org/Turfjs/turf-bboxPolygon)

turf bboxPolygon module


### `turf.bbox-polygon(bbox)`

Takes a bbox and returns the equivalent Polygon feature.


### Parameters

| parameter | type           | description                                                                        |
| --------- | -------------- | ---------------------------------------------------------------------------------- |
| `bbox`    | Array.<number> | an Array of bounding box coordinates in the form: ```[xLow, yLow, xHigh, yHigh]``` |


### Example

```js
var bbox = [0, 0, 10, 10];

var poly = turf.bboxPolygon(bbox);

//=poly
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-bbox-polygon
```

## Tests

```sh
$ npm test
```

