import GameStateEnum from './GameState';

type GameOverProps = {
  gameState: GameStateEnum;
};

const GameOver: React.FC<GameOverProps> = ({ gameState }) => {
  switch (gameState) {
    case GameStateEnum.inProgress:
      return <></>;
    case GameStateEnum.playerOWins:
      return <div className="game-over">Player O Wins the Game</div>;
    case GameStateEnum.playerXWins:
      return <div className="game-over">Player X Wins the Game</div>;
    case GameStateEnum.draw:
      return <div className="game-over">It's a Draw Match!</div>;
    default:
      return <></>;
  }
};

export default GameOver;