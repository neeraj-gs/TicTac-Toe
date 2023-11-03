import GameState from "./GameState"

const GameOver = ({gameState}) => {
  switch(gameState){
    case GameState.inProgress:
      return (
        <></>
      )
    case GameState.playerxwins:
      return (
        <div className="game-over">
            <h1>Player X Won the Game</h1>
        </div>
      )
    case GameState.playerowins:
      return (
        <div className="game-over">
            <h1>Player O Won the Game</h1>
        </div>
      )
      case GameState.draw:
      return (
        <div className="game-over">
            <h1>Its A Draw Match</h1>
        </div>
      )
      default:
        return (
          <></>
        )
  }
}

export default GameOver