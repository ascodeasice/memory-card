const Header = (props) => {
  const { score, highestScore } = props;
  return (
    <div id="header">
      <h1>Memory Card</h1>
      <p>How to play : click cards you haven't clicked</p>
      {/* <p>Score : {score}</p>
      <p>Highest Score : {highestScore}</p> */}
    </div>
  )
}

export default Header;