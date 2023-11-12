import GameState from "./GameState";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <div className="game-over">Player O Wins the Game</div>;
    case GameState.playerXWins:
      return <div className="game-over">Player X Wins the Game</div>;
    case GameState.draw:
      return <div className="game-over">Its a Draw Match!</div>;
    default:
      return <></>;
  }
}

export default GameOver;