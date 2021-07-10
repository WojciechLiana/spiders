export function getRandomPosition() {
  return {x: Math.floor(Math.random() * (800 - 100 + 1) + 100), y: Math.floor(Math.random() * (600 - 100 + 1) + 100)}
}