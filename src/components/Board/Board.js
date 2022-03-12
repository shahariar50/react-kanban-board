import { forwardRef, useState } from "react";
import Column from "./components/Column";
import ColumnAdder from "./components/ColumnAdder";
import withDroppable from "../withDroppable";
import { when, partialRight } from "../../services/utils";
import DefaultColumnHeader from "./components/DefaultColumnHeader";
import DefaultCard from "./components/DefaultCard";

import {
  moveCard,
  moveColumn,
  addColumn,
  removeColumn,
  changeColumn,
  addCard,
  removeCard,
} from "../../services/helpers";

function Board(
  { initialBoard, renderColumnAdder },
  onCardDragEnd,
  onColumnDragEnd,
  allowAddColumn,
  onNewColumnConfirm,
  onColumnRemove,
  renderColumnHeader,
  allowRemoveColumn,
  allowRenameColumn,
  onColumnRename,
  onCardNew,
  renderCard,
  allowRemoveCard,
  onCardRemove,
  onColumnNew,
  disableCardDrag,
  disableColumnDrag,
  allowAddCard,
  onNewCardConfirm
) {
  const [columns, setColumns] = useState(initialBoard);
  console.log(columns);
  // const handleOnCardDragEnd = partialRight(handleOnDragEnd, {
  //   moveCallback: moveCard,
  //   notifyCallback: onCardDragEnd,
  // });
  // const handleOnColumnDragEnd = partialRight(handleOnDragEnd, {
  //   moveCallback: moveColumn,
  //   notifyCallback: onColumnDragEnd,
  // });

  // function handleOnDragEnd(
  //   { source, destination, subject },
  //   { moveCallback, notifyCallback }
  // ) {
  //   const reorderedBoard = moveCallback(board, source, destination);
  //   when(notifyCallback)((callback) =>
  //     callback(reorderedBoard, subject, source, destination)
  //   );
  //   setBoard(reorderedBoard);
  // }

  // async function handleColumnAdd(newColumn) {
  //   const column = renderColumnAdder
  //     ? newColumn
  //     : await onNewColumnConfirm(newColumn);
  //   const boardWithNewColumn = addColumn(board, column);
  //   onColumnNew(boardWithNewColumn, column);
  //   setBoard(boardWithNewColumn);
  // }

  // function handleColumnRemove(column) {
  //   const filteredBoard = removeColumn(board, column);
  //   onColumnRemove(filteredBoard, column);
  //   setBoard(filteredBoard);
  // }

  // function handleColumnRename(column, title) {
  //   const boardWithRenamedColumn = changeColumn(board, column, { title });
  //   onColumnRename(boardWithRenamedColumn, { ...column, title });
  //   setBoard(boardWithRenamedColumn);
  // }

  // function handleCardAdd(column, card, options = {}) {
  //   const boardWithNewCard = addCard(board, column, card, options);

  //   onCardNew(
  //     boardWithNewCard,
  //     boardWithNewCard.columns.find(({ id }) => id === column.id),
  //     card
  //   );
  //   setBoard(boardWithNewCard);
  // }

  // async function handleDraftCardAdd(column, card, options = {}) {
  //   const newCard = await onNewCardConfirm(card);
  //   handleCardAdd(column, newCard, options);
  // }

  // function handleCardRemove(column, card) {
  //   const boardWithoutCard = removeCard(board, column, card);
  //   onCardRemove(
  //     boardWithoutCard,
  //     boardWithoutCard.columns.find(({ id }) => id === column.id),
  //     card
  //   );
  //   setBoard(boardWithoutCard);
  // }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
      }}
      className="overflow-y-hidden"
    >
      {/* <BoardContainer
        onCardDragEnd={handleOnCardDragEnd}
        onColumnDragEnd={handleOnColumnDragEnd}
        renderColumnAdder={() => {
          if (!allowAddColumn) return null;
          if (renderColumnAdder)
            return renderColumnAdder({ addColumn: handleColumnAdd });
          if (!onNewColumnConfirm) return null;
          return (
            <ColumnAdder
              onConfirm={(title) => handleColumnAdd({ title, cards: [] })}
            />
          );
        }}
        {...(renderColumnHeader && {
          renderColumnHeader: (column) =>
            renderColumnHeader(column, {
              removeColumn: handleColumnRemove.bind(null, column),
              renameColumn: handleColumnRename.bind(null, column),
              addCard: handleCardAdd.bind(null, column),
            }),
        })}
        renderCard={(column, card, dragging) => {
          if (renderCard)
            return renderCard(card, {
              removeCard: handleCardRemove.bind(null, column, card),
              dragging,
            });
          return (
            <DefaultCard
              dragging={dragging}
              allowRemoveCard={allowRemoveCard}
              onCardRemove={(card) => handleCardRemove(column, card)}
            >
              {card}
            </DefaultCard>
          );
        }}
        allowRemoveColumn={allowRemoveColumn}
        onColumnRemove={handleColumnRemove}
        allowRenameColumn={allowRenameColumn}
        onColumnRename={handleColumnRename}
        disableColumnDrag={disableColumnDrag}
        disableCardDrag={disableCardDrag}
        onCardNew={(column, card) =>
          handleDraftCardAdd(column, card, allowAddCard)
        }
        allowAddCard={allowAddCard && onNewCardConfirm}
      >
        {board}
      </BoardContainer> */}
      {columns.map((column, index) => (
        <Column
          key={column.id}
          index={index}
          // renderCard={renderCard}
          // renderColumnHeader={(column) =>
          //   renderColumnHeader ? (
          //     renderColumnHeader(column)
          //   ) : (
          //     <DefaultColumnHeader
          //       allowRemoveColumn={allowRemoveColumn}
          //       onColumnRemove={onColumnRemove}
          //       allowRenameColumn={allowRenameColumn}
          //       onColumnRename={onColumnRename}
          //     >
          //       {column}
          //     </DefaultColumnHeader>
          //   )
          // }
          disableColumnDrag={disableColumnDrag}
          disableCardDrag={disableCardDrag}
          onCardNew={onCardNew}
          allowAddCard={allowAddCard}
          column={column}
        />
      ))}
      {/* {renderColumnAdder()} */}
    </div>
  );
}

export default Board;
