import React from "react";
import "./main.sass";
import Spider from "../spider/Spider";
import SpiderWeb from "../spiderWeb/SpiderWeb";

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      level: 1,
      spider1: {x: 200, y: 300, spiderNumber: 1},
      spider2: {x: 250, y: 450, spiderNumber: 2},
      spider3: {x: 500, y: 300, spiderNumber: 3},
      spider4: {x: 600, y: 500, spiderNumber: 4},
      spider5: {x: 200, y: 600, spiderNumber: 5}
    };
  }

  onSpiderMove = (x) => {
    this.setState({spider1: x})
  }

  render() {
    return (
      <div className="main">
        <nav calss="navbar">
          <span>Time: 00:00</span>
          <span>Level: {this.state.level}</span>
        </nav>
        <div className="board">
          <Spider spider={this.state.spider1} moveSpider={x => this.setState({spider1: x})}/>
          <Spider spider={this.state.spider2} moveSpider={x => this.setState({spider2: x})}/>
          <Spider spider={this.state.spider3} moveSpider={x => this.setState({spider3: x})}/>
          <Spider spider={this.state.spider4} moveSpider={x => this.setState({spider4: x})}/>
          <Spider spider={this.state.spider5} moveSpider={x => this.setState({spider5: x})}/>
          <SpiderWeb spider1={this.state.spider1} spider2={this.state.spider5} />
          <SpiderWeb spider1={this.state.spider1} spider2={this.state.spider3} />
          <SpiderWeb spider1={this.state.spider1} spider2={this.state.spider4} />
          <SpiderWeb spider1={this.state.spider2} spider2={this.state.spider5} />
          <SpiderWeb spider1={this.state.spider2} spider2={this.state.spider3} />
          <SpiderWeb spider1={this.state.spider3} spider2={this.state.spider5} />
          <SpiderWeb spider1={this.state.spider4} spider2={this.state.spider5} />
        </div>
        <footer className="footer">Back</footer>
      </div>
    )
  }
}

const d = document.getElementsByClassName("spider");

function filter(e) {
  if (!e.target.classList.contains("spider")) {
    return;
  }

  let target = e.target;
  target.moving = true;
  e.clientX
    ? ((target.oldX = e.clientX), (target.oldY = e.clientY))
    : ((target.oldX = e.touches[0].clientX),
      (target.oldY = e.touches[0].clientY));
  document.onmousemove = dr;
  document.addEventListener("touchmove", dr, { passive: false });
  function dr(event) {
    event.preventDefault();
    if (!target.moving) {
      return;
    }
    e.clientX
      ? ((target.distX = event.clientX - target.oldX),
        (target.distY = event.clientY - target.oldY),
        (target.oldX = event.clientX),
        (target.oldY = event.clientY))
      : ((target.distX = event.touches[0].clientX - target.oldX),
        (target.distY = event.touches[0].clientY - target.oldY),
        (target.oldX = event.touches[0].clientX),
        (target.oldY = event.touches[0].clientY));
    target.style.left = target.offsetLeft + target.distX + "px";
    target.style.top = target.offsetTop + target.distY + "px";
  }
  function endDrag() {
    target.moving = false;
  }
  target.onmouseup = endDrag;
  target.ontouchend = endDrag;
}
document.onmousedown = filter;
document.ontouchstart = filter;

export default Main;