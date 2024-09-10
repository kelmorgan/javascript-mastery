



const array = arrayFromRange(-8, 1);

console.log(array);

function arrayFromRange(min, max) {
    const array = [];

    while (!array.includes(max))
        array.push(min++);

    return array;
}