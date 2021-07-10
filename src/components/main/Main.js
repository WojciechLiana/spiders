import React from "react";
import "./main.sass";
import Spider from "../spider/Spider";
import SpiderWeb from "../spiderWeb/SpiderWeb";
import { moveSpiders } from "../../utils/moveSpiders";
import { areLinesIntersected } from "../../utils/areLinesIntersected";
import { getRandomPosition } from "../../utils/getRandomPosition";

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      level: 1,
      spider1: {...getRandomPosition(), spiderNumber: 1},
      spider2: {...getRandomPosition(), spiderNumber: 2},
      spider3: {...getRandomPosition(), spiderNumber: 3},
      spider4: {...getRandomPosition(), spiderNumber: 4},
      spider5: {...getRandomPosition(), spiderNumber: 5},
      line1325: {isIntersected: false},
      line1345: {isIntersected: false},
      line1423: {isIntersected: false},
      line1425: {isIntersected: false},
      line1435: {isIntersected: false},
      line1523: {isIntersected: false},
      line2345: {isIntersected: false},
    };
  }

  calculateIntersections = () => {
    this.setState({
      line1325: {
        isIntersected: areLinesIntersected(
          this.state.spider1.x, this.state.spider1.y, this.state.spider3.x, this.state.spider3.y,
          this.state.spider2.x, this.state.spider2.y, this.state.spider5.x, this.state.spider5.y)
      },line1345: {
        isIntersected: areLinesIntersected(
          this.state.spider1.x, this.state.spider1.y, this.state.spider3.x, this.state.spider3.y,
          this.state.spider4.x, this.state.spider4.y, this.state.spider5.x, this.state.spider5.y)
      },line1423: {
        isIntersected: areLinesIntersected(
          this.state.spider1.x, this.state.spider1.y, this.state.spider4.x, this.state.spider4.y,
          this.state.spider2.x, this.state.spider2.y, this.state.spider3.x, this.state.spider3.y)
      },line1425: {
        isIntersected: areLinesIntersected(
          this.state.spider1.x, this.state.spider1.y, this.state.spider4.x, this.state.spider4.y,
          this.state.spider2.x, this.state.spider2.y, this.state.spider5.x, this.state.spider5.y)
      },line1435: {
        isIntersected: areLinesIntersected(
          this.state.spider1.x, this.state.spider1.y, this.state.spider4.x, this.state.spider4.y,
          this.state.spider3.x, this.state.spider3.y, this.state.spider5.x, this.state.spider5.y)
      },line1523: {
        isIntersected: areLinesIntersected(
          this.state.spider1.x, this.state.spider1.y, this.state.spider5.x, this.state.spider5.y,
          this.state.spider2.x, this.state.spider2.y, this.state.spider3.x, this.state.spider3.y)
      },line2345: {
        isIntersected: areLinesIntersected(
          this.state.spider2.x, this.state.spider2.y, this.state.spider3.x, this.state.spider3.y,
          this.state.spider4.x, this.state.spider4.y, this.state.spider5.x, this.state.spider5.y)
      }
    })
  }

  componentDidMount() {
    moveSpiders();
    this.calculateIntersections();
  }

  render() {
    return (
      <div className="main">
        <nav calss="navbar">
          <span>Time: 00:00</span>
          <span>Level: {this.state.level}</span>
        </nav>
        <div className="board">
          <Spider spider={this.state.spider1} moveSpider={spiderState => this.setState({spider1: spiderState})} leaveSpider={this.calculateIntersections}/>
          <Spider spider={this.state.spider2} moveSpider={spiderState => this.setState({spider2: spiderState})} leaveSpider={this.calculateIntersections}/>
          <Spider spider={this.state.spider3} moveSpider={spiderState => this.setState({spider3: spiderState})} leaveSpider={this.calculateIntersections}/>
          <Spider spider={this.state.spider4} moveSpider={spiderState => this.setState({spider4: spiderState})} leaveSpider={this.calculateIntersections}/>
          <Spider spider={this.state.spider5} moveSpider={spiderState => this.setState({spider5: spiderState})} leaveSpider={this.calculateIntersections}/>
          <SpiderWeb spider1={this.state.spider1} spider2={this.state.spider5} 
            isIntersected={this.state.line1523.isIntersected }/>
          <SpiderWeb spider1={this.state.spider1} spider2={this.state.spider3}
            isIntersected={this.state.line1325.isIntersected || this.state.line1345.isIntersected}/>
          <SpiderWeb spider1={this.state.spider1} spider2={this.state.spider4}
            isIntersected={this.state.line1423.isIntersected || this.state.line1425.isIntersected || this.state.line1435.isIntersected}/>
          <SpiderWeb spider1={this.state.spider2} spider2={this.state.spider5}
            isIntersected={this.state.line1325.isIntersected || this.state.line1425.isIntersected}/>
          <SpiderWeb spider1={this.state.spider2} spider2={this.state.spider3}
            isIntersected={this.state.line1423.isIntersected || this.state.line1523.isIntersected}/>
          <SpiderWeb spider1={this.state.spider3} spider2={this.state.spider5}
            isIntersected={this.state.line1435.isIntersected}/>
          <SpiderWeb spider1={this.state.spider4} spider2={this.state.spider5}
            isIntersected={this.state.line2345.isIntersected || this.state.line1345.isIntersected}/>
        </div>
        <footer className="footer">Back</footer>
      </div>
    )
  }
}

export default Main;