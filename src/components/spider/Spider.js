import React, { useState } from "react";
import * as R from 'ramda';
import "./spider.sass";

export default function Spider({spider, moveSpider, leaveSpider}) {

  const [mouseDown, setMouseDown] = useState(false);

  const defaultStyle = R.defaultTo(0);

  return (
    <div
      className="spider"
      style={{left: defaultStyle(spider.x - 50), top: defaultStyle(spider.y - 50)}}
      onMouseDown={()=>setMouseDown(true)}
      onMouseUp={()=>{
        setMouseDown(false);
        leaveSpider();
      }}
      onTouchStart={()=>setMouseDown(true)}
      onTouchEnd={()=>{
        setMouseDown(false);
        leaveSpider();
      }}
      onMouseMove={e => mouseDown ? moveSpider({x: e.clientX, y: e.clientY, spiderNumber: spider.spiderNumber}) : null}
      onTouchMove={e => mouseDown ? moveSpider({x: e.touches[0].clientX, y: e.touches[0].clientY, spiderNumber: spider.spiderNumber}) : null}
    />
  );
}
