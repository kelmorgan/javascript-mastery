

const numbers = [1, 2, 3, 9, 5, 2, 7, 2, 9];

const count = countOccurrences(numbers, 2);

console.log(count);


// function countOccurrences(array, searchElement) {
//     let count = 0;

//     for (let element of array)
//         if (element == searchElement)
//             count++

//     return count;
// }


function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0)

}
