export function getRandomPosition(maxWidth, maxHeight) {
  return { x: Math.floor(Math.random() * (maxWidth - 250) + 100), y: Math.floor(Math.random() * (maxHeight - 250) + 100) };
}