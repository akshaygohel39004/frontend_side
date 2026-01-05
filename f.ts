type Shape = 
    | { kind: "circle"; radius: number }
    | { kind: "square"; size: number }
    |{kind:"lef";aize:number};

function area(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;

        case "square":
            return shape.size * shape.size;

        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
