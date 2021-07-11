import React from "react";
import { Spider } from "../spider/Spider";
import { SpiderWeb } from "../spiderWeb/SpiderWeb";

export default function Board({ state, leaveSpider, moveSpider }) {

  return (
    <div className="board">
      <Spider spider={state.spider1} moveSpider={moveSpider} leaveSpider={leaveSpider} />
      <Spider spider={state.spider2} moveSpider={moveSpider} leaveSpider={leaveSpider} />
      <Spider spider={state.spider3} moveSpider={moveSpider} leaveSpider={leaveSpider} />
      <Spider spider={state.spider4} moveSpider={moveSpider} leaveSpider={leaveSpider} />
      <Spider spider={state.spider5} moveSpider={moveSpider} leaveSpider={leaveSpider} />
      <SpiderWeb spider1={state.spider1} spider2={state.spider5}
        isIntersected={state.line1523.isIntersected} />
      <SpiderWeb spider1={state.spider1} spider2={state.spider3}
        isIntersected={state.line1325.isIntersected || state.line1345.isIntersected} />
      <SpiderWeb spider1={state.spider1} spider2={state.spider4}
        isIntersected={state.line1423.isIntersected || state.line1425.isIntersected || state.line1435.isIntersected} />
      <SpiderWeb spider1={state.spider2} spider2={state.spider5}
        isIntersected={state.line1325.isIntersected || state.line1425.isIntersected} />
      <SpiderWeb spider1={state.spider2} spider2={state.spider3}
        isIntersected={state.line1423.isIntersected || state.line1523.isIntersected} />
      <SpiderWeb spider1={state.spider3} spider2={state.spider5}
        isIntersected={state.line1435.isIntersected} />
      <SpiderWeb spider1={state.spider4} spider2={state.spider5}
        isIntersected={state.line2345.isIntersected || state.line1345.isIntersected} />
    </div>
  );
}