import { getRandomPosition } from "../utils/getRandomPosition";
import { calculateIntersections } from "../utils/calculateIntersections";
import { isGameWon } from "../utils/isGameWon";

export function getNewNotWonSetup() {
    let isAlreadyWon;
    let intersections;
    let newPositions;

    const maxWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const maxHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;

    do {
      newPositions = {
        spider1: {...getRandomPosition(maxWidth, maxHeight), spiderNumber: 1},
        spider2: {...getRandomPosition(maxWidth, maxHeight), spiderNumber: 2},
        spider3: {...getRandomPosition(maxWidth, maxHeight), spiderNumber: 3},
        spider4: {...getRandomPosition(maxWidth, maxHeight), spiderNumber: 4},
        spider5: {...getRandomPosition(maxWidth, maxHeight), spiderNumber: 5},
      }
  
      intersections = calculateIntersections(newPositions.spider1, newPositions.spider2, newPositions.spider3, newPositions.spider4, newPositions.spider5);
      isAlreadyWon = isGameWon(intersections);
    }
    while(isAlreadyWon);

    return [intersections, newPositions];
}