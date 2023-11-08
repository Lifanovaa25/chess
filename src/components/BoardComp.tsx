import React,{FC} from "react";
import { Board } from "../models/Board";
import CellComp from "./CellComp";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}
const BoardComp:FC<BoardProps> = ({board}) => {
  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComp />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComp;
