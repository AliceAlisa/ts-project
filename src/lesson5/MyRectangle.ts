import { MyAreaPrimitive2D } from "./MyAreaPrimitive2D"

export class MyRectangle extends MyAreaPrimitive2D {
    private _width: number
    private _height: number

    constructor(x1: number, x2: number, y1: number, y2: number) {
        super(x1, x2, y1, y2)

        this.calcWidth()
        this.calcHeight()
    }
    calcWidth(): void {
        this._width = this.x2 - this.x1
    }

    calcHeight(): void {
        this._height = this.y2 - this.y1
    }

    calcArea(): number {
        return this._width * this._height;
    }
}
