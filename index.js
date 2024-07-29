

function showPrimes(limit) {

    for (number = 2; number <= limit; number++) {

        if (isPrime(number)) console.log(number);

    }
}

function isPrime(number) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0)
            isPrime = false;
        break;
    }
    return isPrime;
}


showPrimes(20);