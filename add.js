const add = (numbers) => {
    if (!numbers) return 0;

    let delimiter = /,|\n/;
    let numberString = numbers;

    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf('\n');
        delimiter = new RegExp(numbers.substring(2, delimiterEndIndex).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        numberString = numbers.substring(delimiterEndIndex + 1);
    }

    let sum = 0;
    const numberArray = numberString.split(delimiter);

    for (const number of numberArray) {
        const parsedNumber = parseInt(number);
        sum += parsedNumber;
    }

    return sum;
}

module.exports = add;