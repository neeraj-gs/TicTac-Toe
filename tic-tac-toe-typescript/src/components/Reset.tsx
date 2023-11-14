import GameStateEnum from './GameState';

type ResetProps = {
  gameState: GameStateEnum;
  onReset: () => void;
};

const Reset:React.FC<ResetProps> = ({ gameState, onReset })=> {
  if (gameState === GameStateEnum.inProgress) {
    return;
  }
  return (
    <button onClick={onReset} className="reset-button">
      Play Again
    </button>
  );
}

export default Reset;