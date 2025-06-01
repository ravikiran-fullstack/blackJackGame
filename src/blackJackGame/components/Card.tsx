import { useState } from "react";
import "./card.css";

interface CardProps {
  cardNumber: number;
  type?: string;
  showHiddenCardFace?: boolean;
}

const Card = ({ cardNumber, type, showHiddenCardFace }: CardProps) => {
  console.log(cardNumber, type, showHiddenCardFace);
  const [hideHiddenCardFace, setHideHiddenCardFace] =
    useState(showHiddenCardFace);
  return (
    <div className="cardContainer" onClick={() => setHideHiddenCardFace(false)}>
      <div className={`flip-card-inner ${hideHiddenCardFace ? "flipped" : ""}`}>
        <div className="flip-card-back"></div>
        <div className="flip-card-front">
          <div className="cardNumber1">
            <p>{cardNumber}</p> 
          </div>
          <div className="cardBody">
            <p>test</p>
          </div>
          <div className="cardNumber2">
            <p>{cardNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
