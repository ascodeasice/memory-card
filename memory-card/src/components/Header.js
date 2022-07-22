const Header = (props) => {
  const { score, highestScore, text } = props;
  return (
    <div id="header">
      <div id='headerWrapper1'>
        <h1>Memory Card</h1>
        <p>{text}</p>
      </div>
      <div id="headerWrapper2">
        <p>Score : {score}</p>
        <p>Highest Score : {highestScore}</p>
      </div>
    </div>
  )
}

export default Header;