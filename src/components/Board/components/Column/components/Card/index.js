function Card({ children, index, renderCard, disableCardDrag }) {
  return (
    <div data-testid={`card-${children.id}`}>
      <div style={{ display: "inline-block", whiteSpace: "normal" }}>
        {renderCard()}
      </div>
    </div>
  );
}

export default Card;
