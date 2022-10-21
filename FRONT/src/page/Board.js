import React from "react";
import { BoardListForm } from "../components";
import "../css/board.css";

const Board = () => {
  return (
    <div>
      <div className="board-page">
        <BoardListForm />
      </div>
    </div>
  );
};

export default Board;
