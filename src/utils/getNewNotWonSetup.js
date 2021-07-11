import { getRandomPosition } from "../utils/getRandomPosition";
import { calculateIntersections } from "../utils/calculateIntersections";
import { isGameWon } from "../utils/isGameWon";

export function getNewNotWonSetup() {
    let isAlreadyWon;
    let intersections;
    let newPositions;

    do {
      newPositions = {
        spider1: {...getRandomPosition(), spiderNumber: 1},
        spider2: {...getRandomPosition(), spiderNumber: 2},
        spider3: {...getRandomPosition(), spiderNumber: 3},
        spider4: {...getRandomPosition(), spiderNumber: 4},
        spider5: {...getRandomPosition(), spiderNumber: 5},
      }
  
      intersections = calculateIntersections(newPositions.spider1, newPositions.spider2, newPositions.spider3, newPositions.spider4, newPositions.spider5);
      isAlreadyWon = isGameWon(intersections);
    }
    while(isAlreadyWon);

    return [intersections, newPositions];
}