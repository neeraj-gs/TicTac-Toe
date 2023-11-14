import Strike from "./Strike"
import Tile from "./Tile"

type BoardProps = {
  tiles: (string | null)[];
  onTileClick: (index: number) => void;
  playerTurn: string;
  strike?: string | undefined;
};


const Board:React.FC<BoardProps> = ({tiles, onTileClick, playerTurn, strike}) => {
  return (
    <div className="board">
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(0)} value={tiles[0]} className="right-border bottom-border" />
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(1)} value={tiles[1]} className="right-border bottom-border"/>
        <Tile playerTurn={playerTurn}  onClick={()=>onTileClick(2)} value={tiles[2]} className="bottom-border"/>
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(3)} value={tiles[3]} className="right-border bottom-border"/>
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(4)} value={tiles[4]} className="right-border bottom-border"/>
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(5)} value={tiles[5]} className=" bottom-border"/>
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(6)} value={tiles[6]} className="right-border "/>
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(7)} value={tiles[7]} className="right-border "/>
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(8)} value={tiles[8]} className=""/>
        <Strike strike={strike} />
    </div>
  )
}

export default Board