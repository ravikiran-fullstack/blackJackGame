import Card from "./Card";
import "./handStyles.css";

type PlayerHandType = {
  cards: number[];
};

const PlayerHand = ({ cards }: PlayerHandType) => {
  // console.log("PlayerHand ", cards);

  return (
    <div>
      <div>
        <h3>Player</h3>{" "}
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {cards.map((card, index) => (
          <Card key={index} cardNumber={card} />
        ))}
      </div>
    </div>
  );
};

export default PlayerHand;
