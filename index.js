

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8];


//const combine = numbers.concat(numbers2);
const combine = [...numbers, ...numbers2];



combine.forEach(number => console.log(number))
