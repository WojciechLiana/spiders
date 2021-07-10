export function isGameWon(state) {
  return !(state.line1325.isIntersected || state.line1345.isIntersected || state.line1423.isIntersected ||
    state.line1425.isIntersected || state.line1435.isIntersected || state.line1523.isIntersected || state.line2345.isIntersected);
}