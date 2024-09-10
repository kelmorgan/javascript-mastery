

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function includes(array, searchEliment) {
    for (let number of array)
        if (number === searchEliment)
            return true;


    return false;
}



console.log(includes(numbers, 20))