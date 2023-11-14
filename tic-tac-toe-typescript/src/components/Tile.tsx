type TileProps = {
  className: string;
  value: string | null;
  onClick: () => void;
  playerTurn: string | null;
};


const Tile: React.FC<TileProps> = ({className,value,onClick,playerTurn}) => {

    let hoverClass = null;
    if(value==null && playerTurn != null){
        hoverClass = `${playerTurn.toLowerCase()}-hover`
    }
  return (
    <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
        {value}
    </div>
  )
}

export default Tile