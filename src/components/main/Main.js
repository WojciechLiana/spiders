import React from "react";
import "./main.sass";
import WinWindow from "../winWindow/WinWindow";
import Board from "../board/Board";
import { moveSpiders } from "../../utils/moveSpiders";
import { calculateIntersections } from "../../utils/calculateIntersections";
import { isGameWon } from "../../utils/isGameWon";
import { getNewNotWonSetup } from "../../utils/getNewNotWonSetup";
import * as R from "ramda";
import arrowImg from "../../../assets/arrow.png";
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
      line1325: { isIntersected: false },
      line1345: { isIntersected: false },
      line1423: { isIntersected: false },
      line1425: { isIntersected: false },
      line1435: { isIntersected: false },
      line1523: { isIntersected: false },
      line2345: { isIntersected: false },
      gameWon: false
    };
  }

  setSpider = (spiderState) => { this.setState({ [`spider${spiderState.spiderNumber}`]: spiderState }) }

  setNewSpidersPosition = (isNextLevel) => {
    const [intersections, newPositions] = getNewNotWonSetup();

    const level = { level: isNextLevel ? this.state.level + 1 : this.state.level }

    this.setState(R.mergeAll([newPositions, intersections, level, { gameWon: false }]));
  }

  onSpiderLeave = () => {
    const intersections = calculateIntersections(this.state.spider1, this.state.spider2, this.state.spider3, this.state.spider4, this.state.spider5);
    this.setState(R.merge(intersections, { gameWon: isGameWon(intersections) }));
  }

  onGoBack = () => {
    const level = this.state.level === 1 ? 1 : this.state.level - 1;
    this.setState(R.merge({ level: level }, { gameWon: true }));
  }

  componentDidMount() {
    moveSpiders();
    this.setNewSpidersPosition(false);
  }

  render() {
    return (
      <div className="main">
        <nav className="navbar">
          <span className="navbar-level">Level: {this.state.level}</span>
        </nav>
        {
          this.state.gameWon ?
            <WinWindow nextLevelClick={this.setNewSpidersPosition} />
            :
            <Board state={this.state} moveSpider={this.setSpider} leaveSpider={this.onSpiderLeave} />
        }
        <footer className="footer">
          {
            !this.state.gameWon &&
            <span className="footer-container">
              <img src={arrowImg} alt="arrow" className="footer-back" onClick={this.onGoBack}/>
              <img src={arrowImg} alt="arrow" className="footer-download" />
            </span>
          }
        </footer>
      </div>
    )
  }
}

export default Main;