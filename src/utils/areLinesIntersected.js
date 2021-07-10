export function areLinesIntersected(p1x1, p1y1, p1x2, p1y2, 
  p2x1, p2y1, p2x2, p2y2)
{
    let s1_x, s1_y, s2_x, s2_y;
    s1_x = p1x2 - p1x1;     s1_y = p1y2 - p1y1;
    s2_x = p2x2 - p2x1;     s2_y = p2y2 - p2y1;

    let s, t;
    s = (-s1_y * (p1x1 - p2x1) + s1_x * (p1y1 - p2y1)) / (-s2_x * s1_y + s1_x * s2_y);
    t = ( s2_x * (p1y1 - p2y1) - s2_y * (p1x1 - p2x1)) / (-s2_x * s1_y + s1_x * s2_y);

  if (s >= 0 && s <= 1 && t >= 0 && t <= 1)
  {
      return true;
  }

  return false
}

function intersects(a,b,c,d,p,q,r,s) {
  let det, gamma, lambda;
  det = (c - a) * (s - q) - (r - p) * (d - b);
  if (det === 0) {
    return false;
  } else {
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
    return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
  }
};