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
import { useState } from 'react';
import Card from './Card';

const CardContainer = () => {
  const [cards, setCards] = useState([
    {
      color: 'linear-gradient(135deg, rgba(161,121,220,1) 0%, rgba(40,0,104,1) 100%)',
      src: CSharp,
      text: 'C#'
    },
    {
      color: 'linear-gradient(135deg, rgba(92,107,192,1) 0%, rgba(40,53,147,1) 100%)',
      src: C,
      text: 'C'
    },
    {
      color: 'linear-gradient(135deg, rgba(92,141,188,1) 0%, rgba(26,70,116,1) 100%)',
      src: Cpp,
      text: 'C++'
    },
    {
      color: 'linear-gradient(90deg, rgba(38,77,228,1) 0%, rgba(41,101,241,1) 100%)',
      src: Css,
      text: 'CSS'
    },
    {
      color: '#e44d26',
      src: Html,
      text: 'HTML'
    },
    {
      color: '#6ad7e5',
      src: Go,
      text: 'GO'
    },
    {
      color: 'linear-gradient(90deg, rgba(69,58,98,1) 0%, rgba(84,71,120,1) 20%, rgba(143,78,139,1) 100%)',
      src: Haskell,
      text: 'Haskell'
    },
    {
      color: 'linear-gradient(180deg, rgba(248,152,29,1) 0%, rgba(83,130,161,1) 100%)',
      src: Java,
      text: 'Java'
    },
    {
      color: 'linear-gradient(135deg, rgba(241,220,80,1) 20%, rgba(51,51,51,1) 100%)',
      src: Js,
      text: 'JavaScript'
    },
    {
      color: 'linear-gradient(135deg, rgba(50,134,219,1) 0%, rgba(236,124,55,1) 30%, rgba(117,114,226,1) 80%)',
      src: Kotlin,
      text: 'Kotlin'
    },
    {
      color: '#00007d',
      src: Lua,
      text: 'Lua'
    },
    {
      color: '#6181b6',
      src: Php,
      text: 'PHP'
    },
    {
      color: 'linear-gradient(135deg, rgba(55,115,165,1) 0%, rgba(255,206,61,1) 100%)',
      src: Python,
      text: 'Python'
    },
    {
      color: 'linear-gradient(135deg, rgba(168,21,1,1) 0%, rgba(200,27,19,1) 100%)',
      src: Ruby,
      text: 'Ruby'
    },
    {
      color: '#f74c00',
      src: Rust,
      text: 'Rust'
    },
    {
      color: 'linear-gradient(135deg, rgba(0,122,204,1) 20%, rgba(255,255,255,1) 100%)',
      src: Ts,
      text: 'TypeScript'
    },

  ])

  return (
    <div id='cardContainer'>
      {cards.map((card) =>
        <Card key={card.text} color={card.color} src={card.src} text={card.text} />
      )}
    </div>
  )
}

export default CardContainer;