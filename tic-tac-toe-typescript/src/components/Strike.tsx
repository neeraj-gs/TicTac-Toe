type StrikeProps = {
  strike: string | undefined;
};

const Strike:React.FC<StrikeProps> = ({strike}) => {
  return (
    <div className={`strike ${strike}`}></div>
  )
}

export default Strike