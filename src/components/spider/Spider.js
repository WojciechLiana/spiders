import React, { useState } from "react";
import "./spider.sass";

export default function Spider({spider, moveSpider}) {

  const [mouseDown, setMouseDown] = useState(false);


  return (
    <div
      className="spider"
      style={{left: spider.x - 50, top: spider.y - 50}}
      onMouseDown={()=>setMouseDown(true)}
      onMouseUp={()=>setMouseDown(false)}
      onMouseMove={e => mouseDown ? moveSpider({x: e.clientX, y: e.clientY, spiderNumber: spider.spiderNumber}) : null}
    >
    </div>
  );
}
