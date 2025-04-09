import "./card.css"

function Card(props) {
  return (
    <div className={props.Time}>
      <h2>{props.Nome}</h2>
      <p>{props.Cargo}</p>
      <p className="time">{props.Time}</p>
    </div>
  );
}

export default Card;
