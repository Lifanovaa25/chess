import { FC } from "react";
import { Cell } from "../models/Cell";
interface CellProps {
  cell: Cell;
  selected: boolean;
  x: number;
  y: number;
  click: (cell: Cell) => void;
}

const CellComp: FC<CellProps> = ({ cell, selected, click, x, y }) => {
  return (
    <div
      className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
      onClick={() => click(cell)}
      style={{ background: cell.available && cell.figure ? "green" : "" }}
    >
 
      {/* <div>{x}</div>
      <div>{y}</div> */}
      {cell.available && !cell.figure && <div className={"available"}></div>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
    </div>
  );
};

export default CellComp;
