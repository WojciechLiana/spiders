export function getRandomPosition() {
  return {x: Math.floor(Math.random() * (900 - 200) + 200), y: Math.floor(Math.random() * (700 - 200) + 200)};
}