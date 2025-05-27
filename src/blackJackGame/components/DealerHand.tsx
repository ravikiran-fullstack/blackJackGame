import "./handStyles.css";

type DealerHandType = {
  cards: number[];
};

const DealerHand = ({ cards }: DealerHandType) => {
  // console.log(cards);
  //   const [playerCards, setPlayerCards] = useState(cards);
  return (
    <div>
      <div>
        <h3>Dealer</h3>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {cards.map((card, index) => (
          <p key={index}>{card}</p>
        ))}
      </div>
    </div>
  );
};

export default DealerHand;
