import Github from '../assets/github.svg';

const Header = (props) => {
  const { score, highestScore, text } = props;
  return (
    <div id="header">
      <div id='headerWrapper1'>
        <div id='headingWrapper'>
          <a id='githubLink' href="https://github.com/ascodeasice/memory-card">
            <img src={Github} id='github' alt='' />
          </a>
          <a id='heading' href='https://github.com/ascodeasice/memory-card'>Memory Card</a>
        </div>
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