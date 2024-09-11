
try {

    const number = [1, 2, 3, 4, 5];

    console.log(countOccurrences(true, 3));


} catch (e) {
    console.log(e.message)
}



function countOccurrences(array, searchElement) {

    if (!Array.isArray(array))
        throw new Error('Must be an array')

    return array.reduce((a, b) => {
        const occurrence = (b === searchElement) ? 1 : 0;
        return a + occurrence;
    }, 0)
}


