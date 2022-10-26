import './Card.css';

const Card = (props) => {
  return <div className="business-card">{props.children}</div>;
};

export default Card;
