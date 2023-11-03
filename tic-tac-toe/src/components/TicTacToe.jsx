import { useState } from "react"
import Board from "./Board"

const playerx = "X";
const playero = "O";

const TicTacToe = () => {
    const [tiles,setTiles] = useState(Array(9).fill(null))
    const [playerTurn,setPlayerTurn] = useState(playerx)

    const handleTileClick = (index)=>{
        console.log(index);
    }


  return (
    <div>
        <h1>Tic Tac Toe </h1>
        <Board onTileCLick={handleTileClick} tiles={tiles} />
    </div>
  )
}

export default TicTacToe