export function getRandomPosition(maxWidth, maxHeight) {
  return { x: Math.floor(Math.random() * (maxWidth - 200) + 100), y: Math.floor(Math.random() * (maxHeight - 200) + 100) };
}