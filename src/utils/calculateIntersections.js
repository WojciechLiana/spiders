import { areLinesIntersected } from "../utils/areLinesIntersected";

export function calculateIntersections(spider1, spider2, spider3, spider4, spider5) {
  const intersections = {
    line1325: {
      isIntersected: areLinesIntersected(
        spider1.x, spider1.y, spider3.x, spider3.y,
        spider2.x, spider2.y, spider5.x, spider5.y)
    },line1345: {
      isIntersected: areLinesIntersected(
        spider1.x, spider1.y, spider3.x, spider3.y,
        spider4.x, spider4.y, spider5.x, spider5.y)
    },line1423: {
      isIntersected: areLinesIntersected(
        spider1.x, spider1.y, spider4.x, spider4.y,
        spider2.x, spider2.y, spider3.x, spider3.y)
    },line1425: {
      isIntersected: areLinesIntersected(
        spider1.x, spider1.y, spider4.x, spider4.y,
        spider2.x, spider2.y, spider5.x, spider5.y)
    },line1435: {
      isIntersected: areLinesIntersected(
        spider1.x, spider1.y, spider4.x, spider4.y,
        spider3.x, spider3.y, spider5.x, spider5.y)
    },line1523: {
      isIntersected: areLinesIntersected(
        spider1.x, spider1.y, spider5.x, spider5.y,
        spider2.x, spider2.y, spider3.x, spider3.y)
    },line2345: {
      isIntersected: areLinesIntersected(
        spider2.x, spider2.y, spider3.x, spider3.y,
        spider4.x, spider4.y, spider5.x, spider5.y)
    }
  }
  return intersections;
}