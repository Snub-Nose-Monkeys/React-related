import "./card.styles.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        // https://robohash.org/1?set=set2
      ></img>

      <h2 className="card-name">{name}</h2>
      <p className="monster-email">{email}</p>
    </div>
  );
};

export default Card;
