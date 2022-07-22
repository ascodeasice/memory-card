const Card = (props) => {
  const { color, src, text } = props;

  return (
    <div className="card" style={{ background: color }}>
      <img src={src} alt={text} />
      <h2>{text}</h2>
    </div >
  )
}

export default Card;