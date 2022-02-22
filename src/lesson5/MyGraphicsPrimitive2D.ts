export abstract class MyGraphicsPrimitive2D {

    x1: number //координата по x левой нижней точки
    y1: number //координата по y левой нижней точки
    x2: number //координата по x правой верхней точки
    y2: number //координата по y правой верхней точки

    constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
    }

    graphicsCoordinates() {
        return `p1(${this.x1}, ${this.y1}); p2(${this.x2}, ${this.y1});
        p3(${this.x2}, ${this.y2}); p1(${this.x1}, ${this.y2})`
    }

    changePosition(num: number) {
        this.x1 = this.x1 + num
        this.x2 = this.x2 + num
        this.y1 = this.y1 + num
        this.y2 = this.y2 + num
    }
}