import '../styles/card.css';

const Card = (props) => {
  const { color, src, text } = props;

  return (
    <div className="card" style={`backgroundColor:${color}`}>
      <img src={src} alt={text} />
    </div>
  )
}

export default Card;