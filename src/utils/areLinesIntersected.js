import * as R from 'ramda';

export function areLinesIntersected(p1x1, p1y1, p1x2, p1y2, p2x1, p2y1, p2x2, p2y2) {

  const defaultFalse = R.defaultTo(false);

  let s1_x, s1_y, s2_x, s2_y;

  s1_x = R.subtract(p1x2, p1x1);
  s1_y = R.subtract(p1y2, p1y1);
  s2_x = R.subtract(p2x2, p2x1);
  s2_y = R.subtract(p2y2, p2y1);

  let s, t;
  s = (-s1_y * (p1x1 - p2x1) + s1_x * (p1y1 - p2y1)) / (-s2_x * s1_y + s1_x * s2_y);
  t = (s2_x * (p1y1 - p2y1) - s2_y * (p1x1 - p2x1)) / (-s2_x * s1_y + s1_x * s2_y);

  return defaultFalse(s >= 0 && s <= 1 && t >= 0 && t <= 1);
}