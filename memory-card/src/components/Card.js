const Card = (props) => {
  const { color, src, text, id, handleClick } = props;

  return (
    <div className="card selectDisable" style={{ background: color }} onClick={() => handleClick(id)}>
      <img src={src} alt={text} draggable="false" />
      <h2>{text}</h2>
    </div >
  )
}

export default Card;