import { useState } from "react"
import Board from "./Board"

const playerx = "X";
const playero = "O";

const TicTacToe = () => {
    const [tiles,setTiles] = useState(Array(9).fill(null))
    const [playerTurn,setPlayerTurn] = useState(playerx)

    const handleTileClick = (index)=>{

        if(tiles[index] !== null){
            return
        }

        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles)
        if(playerTurn === playerx){
            setPlayerTurn(playero)
        }else{
            setPlayerTurn(playerx)
        }
    }


  return (
    <div>
        <h1>Tic Tac Toe </h1>
        <Board onTileClick={handleTileClick} tiles={tiles} />
    </div>
  )
}

export default TicTacToe