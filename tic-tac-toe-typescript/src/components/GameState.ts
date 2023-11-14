const GameStateEnum = {
  playerXWins: 0,
  playerOWins: 1,
  draw: 2,
  inProgress: 3,
} as const;

export default GameStateEnum;