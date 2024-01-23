import { Figure, FigureNames } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import blackLogo from "../../assets/black-king.svg";
import whiteLogo from "../../assets/white-king.svg";
export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    const direction = 1;
    if (
      (((target.y === this.cell.y + direction ||
        target.y === this.cell.y - direction ||
        target.y === this.cell.y) &&
        (target.x === this.cell.x ||
          target.x === this.cell.x + 1 ||
          target.x === this.cell.x - 1)) ||
        ((target.x === this.cell.x + direction ||
          target.x === this.cell.x - direction ||
          target.x === this.cell.x) &&
          target.y === this.cell.y)) &&
      this.cell.board.getCell(target.x, target.y).isEmpty()
    ) {
      return true;
    }

    if (
      (((target.y === this.cell.y + direction ||
        target.y === this.cell.y - direction ||
        target.y === this.cell.y) &&
        (target.x === this.cell.x ||
          target.x === this.cell.x + 1 ||
          target.x === this.cell.x - 1)) ||
        ((target.x === this.cell.x + direction ||
          target.x === this.cell.x - direction ||
          target.x === this.cell.x) &&
          target.y === this.cell.y)) &&
      this.cell.isEnemy(target)
    ) {
      return true;
    }
    return false;
  }
}
