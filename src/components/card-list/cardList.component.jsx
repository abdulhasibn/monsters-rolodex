import Card from "../card/card.component";
import "./card-list.styles.css";
const CardList = (props) => {
  return (
    <div className="card-list">
      {props?.monsters?.map((monster) => {
        return (
          <Card
            key={monster?.id}
            name={monster?.name}
            email={monster?.email}
            id={monster?.id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
