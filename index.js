function sum(discount, ...args) {

    console.log(args.reduce((a, b) => a + b) * (1 - discount));

}

sum(0.1, 1, 2, 3, 4, 5, 6, 7, 8, 9)