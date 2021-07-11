import React from "react";
import "./spiderWeb.sass";

export const SpiderWeb = React.memo(({spider1, spider2, isIntersected}) => {

  const s1x = spider1.x;
  const s1y = spider1.y;
  const s2x = spider2.x;
  const s2y = spider2.y;

  const createLineElement = (x, y, length, angle) => {

    const styles = {
      width: length + "px",
      transform: "rotate(" + angle + "rad)",
      position: "absolute",
      top: y + "px",
      left: x + "px"
    }
    
    return <div style={styles} className={ isIntersected ? "spider-web spider-web-intersected" : "spider-web" }/>;
  }
  
  const createLine = (x1, y1, x2, y2) => {
    const a = x1 - x2,
        b = y1 - y2,
        c = Math.sqrt(a * a + b * b);
  
    const sx = (x1 + x2) / 2,
        sy = (y1 + y2) / 2;
  
    const x = sx - c / 2,
        y = sy;
  
    const alpha = Math.PI - Math.atan2(-b, a);
  
    return createLineElement(x, y, c, alpha);
  }
  
  return (
    createLine(s1x, s1y, s2x, s2y)
  );
});