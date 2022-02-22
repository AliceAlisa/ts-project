import { MyAreaPrimitive2D } from "./MyAreaPrimitive2D";

export class MyCircle extends MyAreaPrimitive2D {
    private _centerX: number
    private _centerY: number
    private _radius: number

    constructor(x1: number, x2: number, y1: number, y2: number) {
        super(x1, x2, y1, y2)

        this.calcCenter()
        this.calcRadius()
    }
    calcCenter(): void {
        this._centerX = (this.x2 - this.x1) / 2 + this.x1
        this._centerY = (this.y2 - this.y1) / 2 + this.y1
    }

    calcRadius(): void {
        this._radius = this._centerY - this.y1
    }

    calcArea(): number {
        return Math.PI * this._radius * this._radius;
    }
}