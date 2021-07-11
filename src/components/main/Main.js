import React from "react";
import "./main.sass";
import Spider from "../spider/Spider";
import SpiderWeb from "../spiderWeb/SpiderWeb";
import { WinWindow } from "../winWindow/WinWindow";
import { moveSpiders } from "../../utils/moveSpiders";
import { getRandomPosition } from "../../utils/getRandomPosition";
import { calculateIntersections } from "../../utils/calculateIntersections";
import { isGameWon } from "../../utils/isGameWon";
import * as R from 'ramda';

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      level: 1,
      spider1: {},
      spider2: {},
      spider3: {},
      spider4: {},
      spider5: {},
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

  setNewSpidersPosition = (gameWon) => {
    const newPositions = {
      spider1: {...getRandomPosition(), spiderNumber: 1},
      spider2: {...getRandomPosition(), spiderNumber: 2},
      spider3: {...getRandomPosition(), spiderNumber: 3},
      spider4: {...getRandomPosition(), spiderNumber: 4},
      spider5: {...getRandomPosition(), spiderNumber: 5},
    }

    const intersections = calculateIntersections(newPositions.spider1, newPositions.spider2, newPositions.spider3, newPositions.spider4, newPositions.spider5);

    const level = {level: gameWon ? this.state.level + 1 : this.state.level}

    this.setState(R.mergeAll([newPositions, intersections, level, {gameWon: false}]));
  }

  onSpiderLeave = () => {
    const intersections = calculateIntersections(this.state.spider1, this.state.spider2, this.state.spider3, this.state.spider4, this.state.spider5);
    this.setState(R.merge(intersections, {gameWon: isGameWon(intersections)}));
  }

  onGoBack = () => {
    const level = this.state.level === 1 ? 1 : this.state.level - 1;
    this.setState(R.merge({level: level}, {gameWon: true}));
  }

  componentDidMount() {
    moveSpiders();
    this.setNewSpidersPosition(false);
  }

  render() {
    return (
      <div className="main">
        <nav class="navbar">
          <span className="navbar-level">Level: {this.state.level}</span>
        </nav>
        {
        this.state.gameWon ?
        <WinWindow nextLevelClick={this.setNewSpidersPosition}/>
        :
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
          {
            !this.state.gameWon &&
              <span className="footer-back" onClick={this.onGoBack}>
                &larr;
              </span>
          }
        </footer>
      </div>
    )
  }
}

export default Main;