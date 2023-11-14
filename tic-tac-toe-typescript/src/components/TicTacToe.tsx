import React, { useEffect, useState } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
import GameStateEnum from './GameState'

const playerx = "X";
const playero = "O";


const winningCombo = [
    //ROws
    {combo:[0,1,2],strike:'strike-row-1'},
    {combo:[3,4,5],strike:'strike-row-2'},
    {combo:[6,7,8],strike:'strike-row-3'},

    //Columns
    {combo:[0,3,6],strike:'strike-column-1'},
    {combo:[1,4,7],strike:'strike-column-2'},
    {combo:[2,5,8],strike:'strike-column-3'},

    //Diagonals
    {combo:[0,4,8],strike:'strike-diagonal-1'},
    {combo:[2,4,6],strike:'strike-diagonal-2'},
]

const checkWinner = (tiles:(string|null)[],setStrike:React.Dispatch<React.SetStateAction<string | undefined>>,setGameState:React.Dispatch<React.SetStateAction<GameStateEnum>>):void =>{
    for(const {combo,strike} of winningCombo ){
        const tileValue1 = tiles[combo[0]]
        const tileValue2 = tiles[combo[1]]
        const tileValue3 = tiles[combo[2]]

        if(tileValue1 !== null &&  tileValue1 === tileValue2 && tileValue1 === tileValue3){
            setStrike(strike)
            if(tileValue1 === playerx){
                setGameState(GameState.playerXWins)
            }else{
                setGameState(GameState.playerOWins)
            }
            return
            
        }
    }

    const allfilled = tiles.every((tile)=>tile!==null);
    if(allfilled) {
        setGameState(GameState.draw)
    }
}


const TicTacToe = () => {
    const [tiles,setTiles] = useState(Array(9).fill(null))
    const [playerTurn,setPlayerTurn] = useState(playerx)
    const [strike,setStrike] = useState();
    const [gameState,setGameState] = useState(GameState.inProgress)

    const handleTileClick = (index:number)=>{

        if(gameState !== GameState.inProgress){
            return;
        }

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

    const handleReset = ()=>{
        setGameState(GameState.inProgress);
        setTiles(Array(9).fill(null));
        setPlayerTurn(playerx);
        setStrike(undefined)
    }


    useEffect(()=>{
        checkWinner(tiles,setStrike,setGameState);
    },[tiles])


  return (
    <div>
        {/* <img src={xo} alt="xo-image" /> */}
        <h1>Tic Tac Toe </h1>
        <h3>Player X can Start the Game</h3>
        <Board strike={strike} playerTurn={playerTurn} onTileClick={handleTileClick} tiles={tiles} />
        <GameOver gameState={gameState} />
        <Reset gameState={gameState} onReset={handleReset}/>
    </div>
  )
}

export default TicTacToe