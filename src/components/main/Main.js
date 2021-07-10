import React from "react";
import "./main.sass";
import Spider from "../spider/Spider";
import SpiderWeb from "../spiderWeb/SpiderWeb";
import { moveSpiders } from "../../utils/moveSpiders";
import { getRandomPosition } from "../../utils/getRandomPosition";
import { calculateIntersections } from "../../utils/calculateIntersections";

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
      gameWon: false
    };
  }

  setNewSpidersPosition = () => {
    const newPositions = {
      spider1: {...getRandomPosition(), spiderNumber: 1},
      spider2: {...getRandomPosition(), spiderNumber: 2},
      spider3: {...getRandomPosition(), spiderNumber: 3},
      spider4: {...getRandomPosition(), spiderNumber: 4},
      spider5: {...getRandomPosition(), spiderNumber: 5},
    }

    const intersections = calculateIntersections(newPositions.spider1, newPositions.spider2, newPositions.spider3, newPositions.spider4, newPositions.spider5);

    this.setState({...newPositions, ...intersections, gameWon: false, level: this.state.level + 1})
  }

  isGameWon = (state) => {
    return state.line1325.isIntersected || state.line1345.isIntersected || state.line1423.isIntersected ||
      state.line1425.isIntersected || state.line1435.isIntersected || state.line1523.isIntersected || state.line2345.isIntersected;
  }

  onSpiderLeave = () => {
    const intersections = calculateIntersections(this.state.spider1, this.state.spider2, this.state.spider3, this.state.spider4, this.state.spider5);
    this.setState({...intersections, gameWon: !this.isGameWon(intersections)});
  }

  componentDidMount() {
    moveSpiders();
    const intersections = calculateIntersections(this.state.spider1, this.state.spider2, this.state.spider3, this.state.spider4, this.state.spider5);
    this.setState({...intersections, gameWon: !this.isGameWon(intersections)});
  }

  render() {
    return (
      <div className="main">
        <nav calss="navbar">
          <span>Time: 00:00</span>
          <span>Level: {this.state.level}</span>
        </nav>
        {
        this.state.gameWon ?
        <div><button onClick={this.setNewSpidersPosition}>
          Next Level
          </button>
        </div>:
        <div className="board">
          <Spider spider={this.state.spider1} moveSpider={spiderState => this.setState({spider1: spiderState})} leaveSpider={this.onSpiderLeave}/>
          <Spider spider={this.state.spider2} moveSpider={spiderState => this.setState({spider2: spiderState})} leaveSpider={this.onSpiderLeave}/>
          <Spider spider={this.state.spider3} moveSpider={spiderState => this.setState({spider3: spiderState})} leaveSpider={this.onSpiderLeave}/>
          <Spider spider={this.state.spider4} moveSpider={spiderState => this.setState({spider4: spiderState})} leaveSpider={this.onSpiderLeave}/>
          <Spider spider={this.state.spider5} moveSpider={spiderState => this.setState({spider5: spiderState})} leaveSpider={this.onSpiderLeave}/>
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
        }
        <footer className="footer">
          <button onClick={()=>this.setState({gameWon: true, level: this.state.level === 1 ? 1: this.state.level - 1})}>Back</button>
        </footer>
      </div>
    )
  }
}

export default Main;