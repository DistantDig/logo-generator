// Classes for each shape
class Circle {
    constructor(shapeColor) {
        this.fill = shapeColor;
        this.centerX = '150';
        this.centerY = '100';
    }
    render() {
        return `<circle cx="${this.centerX}" cy="${this.centerY}" r="80" fill="${this.fill}" />`
    }
}

class Triangle {
    constructor(shapeColor) {
        this.fill = shapeColor;
        this.pointOne = '150, 0';
        this.pointTwo = '25, 200';
        this.pointThree = '275, 200';
    }
    render() {
        return `<polygon points="${this.pointOne} ${this.pointTwo} ${this.pointThree}" fill="${this.fill}"/>`
    }
}

class Square {
    constructor(shapeColor) {
        this.fill = shapeColor;
        this.width = '200';
        this.height = '200';
        this.offsetX = '50';
    }
    render() {
        return `<rect x="${this.offsetX}" width="${this.width}" height="${this.height}" fill="${this.fill}" />`
    }
}

// Function to all the shape generation
function generateShapes(shape, shapeColor) {
    switch(shape) {
        case 'Circle':
            const circle = new Circle(shapeColor);
            return circle.render();
        case 'Triangle':
            const triangle = new Triangle(shapeColor);
            return triangle.render();
        case 'Square':
            const square = new Square(shapeColor);
            return square.render();
    }
}

module.exports = {generateShapes};