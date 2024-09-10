

const numbers = [1, 2, 3, 9, 5, 2, 711, 20, 90];

const count = getMax(numbers);

console.log(count);


// function getMax(array) {

//     if (array.length === 0) return undefined;

//     let max = array[0];

//     for (let i = 1; i < array.length; i++)
//         if (array[i] > max)
//             max = array[i];
//     return max;
// }


function getMax(array) {

    if (array.length === 0) return undefined;

    return array.reduce((a, b) => (a > b) ? a : b);
}
