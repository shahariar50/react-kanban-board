import { forwardRef } from "react";
import Card from "./components/Card";
import withDroppable from "../../../withDroppable";
import CardAdder from "./components/CardAdder";
// import { pickPropOut } from "@services/utils";

const ColumnEmptyPlaceholder = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ minHeight: "inherit", height: "inherit" }}
    {...props}
  />
));

const DroppableColumn = withDroppable(ColumnEmptyPlaceholder);

function Column({
  column,
  index: columnIndex,
  // renderCard,
  // renderColumnHeader,
  disableColumnDrag,
  disableCardDrag,
  onCardNew,
  allowAddCard,
}) {
  return (
    <div
      style={{
        height: "100%",
        minHeight: "28px",
        display: "inline-block",
        verticalAlign: "top",
      }}
      className="react-kanban-column"
      data-testid={`column-${column.id}`}
    >
      {/* <div>{renderColumnHeader(column)}</div> */}
      {allowAddCard && <CardAdder column={column} onConfirm={onCardNew} />}
      <DroppableColumn droppableId={String(column.id)}>
        {/* {column.cards.map((card, index) => (
          <Card
            key={card.id}
            index={index}
            // renderCard={(dragging) => renderCard(column, card, dragging)}
            disableCardDrag={disableCardDrag}
          >
            {card}
          </Card>
        ))} */}
      </DroppableColumn>
    </div>
  );
}

export default Column;
