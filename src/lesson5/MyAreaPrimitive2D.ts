import { MyGraphicsPrimitive2D } from "./MyGraphicsPrimitive2D";

export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
    abstract calcArea(): number;
}