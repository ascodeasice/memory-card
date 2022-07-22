import CSharp from '../assets/c-sharp.svg';
import C from '../assets/c.svg';
import Cpp from '../assets/cpp.svg';
import Css from '../assets/css.svg';
import Go from '../assets/go.svg';
import Haskell from '../assets/haskell.svg';
import Html from '../assets/html.svg';
import Java from '../assets/java.svg';
import Js from '../assets/js.svg';
import Kotlin from '../assets/kotlin.svg';
import Lua from '../assets/lua.svg';
import Php from '../assets/php.svg';
import Python from '../assets/python.svg';
import Ruby from '../assets/ruby.svg';
import Rust from '../assets/rust.svg';
import Ts from '../assets/ts.svg';
import { useState, useEffect } from 'react';
import Card from './Card';
import shuffle from '../modules/shuffle';

const CardContainer = (props) => {
  const { score, setScore, highestScore, setHighestScore, setHeaderText } = props;
  const [cards, setCards] = useState([
    {
      color: 'linear-gradient(135deg, rgba(161,121,220,1) 0%, rgba(40,0,104,1) 100%)',
      src: CSharp,
      clicked: false,
      text: 'C#',
      id: 0,
    },
    {
      color: 'linear-gradient(135deg, rgba(92,107,192,1) 0%, rgba(40,53,147,1) 100%)',
      src: C,
      clicked: false,
      text: 'C',
      id: 1
    },
    {
      color: 'linear-gradient(135deg, rgba(92,141,188,1) 0%, rgba(26,70,116,1) 100%)',
      src: Cpp,
      clicked: false,
      text: 'C++',
      id: 2
    },
    {
      color: 'linear-gradient(180deg, rgba(256,256,256,1) 0%, rgba(41,101,241,1) 100%)',
      src: Css,
      clicked: false,
      text: 'CSS',
      id: 3
    },
    {
      color: 'linear-gradient(180deg, rgba(256,256,256,1) 0%, rgba(247,76,0,1) 60%)',
      src: Html,
      clicked: false,
      text: 'HTML',
      id: 4
    },
    {
      color: '#6ad7e5',
      src: Go,
      clicked: false,
      text: 'GO',
      id: 5
    },
    {
      color: 'linear-gradient(90deg, rgba(69,58,98,1) 0%, rgba(84,71,120,1) 10%, rgba(143,78,139,1) 100%)',
      src: Haskell,
      clicked: false,
      text: 'Haskell',
      id: 6
    },
    {
      color: 'linear-gradient(180deg, rgba(248,152,29,1) 0%, rgba(83,130,161,1) 100%)',
      src: Java,
      clicked: false,
      text: 'Java',
      id: 7
    },
    {
      color: 'linear-gradient(135deg, rgba(241,220,80,1) 20%, rgba(51,51,51,1) 100%)',
      src: Js,
      clicked: false,
      text: 'JavaScript',
      id: 8
    },
    {
      color: 'linear-gradient(135deg, rgba(50,134,219,1) 0%, rgba(236,124,55,1) 30%, rgba(117,114,226,1) 80%)',
      src: Kotlin,
      clicked: false,
      text: 'Kotlin',
      id: 9
    },
    {
      color: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,0,125,1) 50%)',
      src: Lua,
      clicked: false,
      text: 'Lua',
      id: 10
    },
    {
      color: '#6181b6',
      src: Php,
      clicked: false,
      text: 'PHP',
      id: 11
    },
    {
      color: 'linear-gradient(135deg, rgba(55,115,165,1) 0%, rgba(255,206,61,1) 100%)',
      src: Python,
      clicked: false,
      text: 'Python',
      id: 12
    },
    {
      color: 'linear-gradient(135deg, rgba(168,21,1,1) 0%, rgba(200,27,19,1) 100%)',
      src: Ruby,
      clicked: false,
      text: 'Ruby',
      id: 13
    },
    {
      color: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(247,76,0,1) 50%)',
      src: Rust,
      clicked: false,
      text: 'Rust',
      id: 14
    },
    {
      color: 'linear-gradient(135deg, rgba(0,122,204,1) 20%, rgba(255,255,255,1) 100%)',
      src: Ts,
      clicked: false,
      text: 'TypeScript',
      id: 15
    }
  ])

  const resetGame = () => {
    setScore(0);
    let cardsCopy = structuredClone(cards); // deep copy
    cardsCopy.forEach((card) => card.clicked = false);
    cardsCopy = shuffle(cardsCopy);
    setCards(cardsCopy);
  }

  const handleClick = (id) => {
    setHeaderText('How to play : click cards you haven\'t clicked')
    let cardsCopy = structuredClone(cards);// deep copy

    for (let card of cardsCopy) {
      if (card.id === id) {
        if (!card.clicked) {
          card.clicked = true;

          setHighestScore(Math.max(highestScore, score + 1));
          setScore(score + 1);
          if (cardsCopy.every((card) => card.clicked)) {
            resetGame();
            setHeaderText('You win! New game has started');
          } else {
            cardsCopy = shuffle(cardsCopy);
            setCards(cardsCopy);
          }
          return;// prevent using shuffled cards
        } else {
          resetGame();
          setHeaderText('You lost, new game has started');
          return;
        }
      }
    }
  }

  // shuffle when mounted
  useEffect(() => {
    let cardsCopy = structuredClone(cards); // deep copy
    cardsCopy = shuffle(cardsCopy);
    setCards(cardsCopy);
  }, []);

  return (
    <div id='cardContainer'>
      {cards.map((card) =>
        <Card key={card.id} color={card.color} src={card.src} text={card.text} id={card.id}
          handleClick={handleClick} />
      )}
    </div>
  )
}

export default CardContainer;