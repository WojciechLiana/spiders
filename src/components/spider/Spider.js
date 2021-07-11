import React, { useState } from "react";
import * as R from 'ramda';
import "./spider.sass";

export const Spider = React.memo(({spider, moveSpider, leaveSpider}) => {

  const [mouseDown, setMouseDown] = useState(false);

  const defaultStyle = R.defaultTo(0);

  const onMouseMoveHandler = (e) => {mouseDown ? moveSpider({x: e.clientX, y: e.clientY, spiderNumber: spider.spiderNumber}) : null};
  const onTouchMoveHandler = (e) => {mouseDown ? moveSpider({x: e.touches[0].clientX, y: e.touches[0].clientY, spiderNumber: spider.spiderNumber}) : null};
  const onTakeSpiderHandler = () => setMouseDown(true);
  const onLeaveSpider = () => {
    setMouseDown(false);
    leaveSpider();
  }

  return (
    <div
      className="spider"
      style={{left: defaultStyle(spider.x - 50), top: defaultStyle(spider.y - 50)}}
      onMouseDown={onTakeSpiderHandler}
      onMouseUp={onLeaveSpider}
      onTouchStart={onTakeSpiderHandler}
      onTouchEnd={onLeaveSpider}
      onMouseMove={onMouseMoveHandler}
      onTouchMove={onTouchMoveHandler}
    />
  );
});
