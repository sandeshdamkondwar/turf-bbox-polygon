var polygon = require('turf-polygon');

/**
 * Takes a bbox and returns an equivalent {@link Polygon|polygon}.
 *
 * @module turf/bbox-polygon
 * @category measurement
 * @param {Array<number>} bbox an Array of bounding box coordinates in the form: ```[xLow, yLow, xHigh, yHigh]```
 * @return {Feature<Polygon>} a Polygon representation of the bounding box
 * @example
 * var bbox = [0, 0, 10, 10];
 *
 * var poly = turf.bboxPolygon(bbox);
 *
 * //=poly
 */

module.exports = function(bbox, properties) {
  var lowLeft = [bbox[0], bbox[1]];
  var topLeft = [bbox[0], bbox[3]];
  var topRight = [bbox[2], bbox[3]];
  var lowRight = [bbox[2], bbox[1]];

  var coords = [[
    lowLeft,
    lowRight,
    topRight,
    topLeft,
    lowLeft
  ]];

  if (typeof properties !== "undefined") {
    return polygon(coords, properties);
  } else {
    return polygon(coords);
  }
};
