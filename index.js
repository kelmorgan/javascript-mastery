




function createCircle(raduis) {
    return {
        raduis,
        draw() {
            console.log('draw')
        }
    }
}


const circle1 = createCircle(1);


console.log(circle1);



function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);