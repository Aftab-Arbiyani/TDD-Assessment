const add = (numbers) => {
    if (!numbers) return 0;

    let delimiter = /,|\n/;
    let numberString = numbers;

    if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n');
        const delimiterSection = numbers.substring(2, delimiterEndIndex);

        // Check for multiple delimiters
        const delimiterMatches = delimiterSection.match(/\[(.*?)\]/g);

        if (delimiterMatches) {
            // Extract delimiters and join them with | symbol
            const delimiters = delimiterMatches.map(d => d.slice(1, -1)); // Remove the square brackets
            const escapedDelimiters = delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // Escape special characters
            delimiter = new RegExp(escapedDelimiters.join('|'), "g"); // Join delimiters with | symbol
        } else {
            // Single character delimiter
            delimiter = new RegExp(delimiterSection.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        }

        numberString = numberString.substring(delimiterEndIndex + 1);
    }

    let sum = 0;
    let negatives = [];
    const numberArray = numberString.split(delimiter);

    for (const number of numberArray) {
        const parsedNumber = parseInt(number);

        if (parsedNumber > 1000) { // Skip if number greater than 100
            continue;
        }

        if (parsedNumber < 0) {
            negatives.push(parsedNumber);
        } else {
            sum += parsedNumber;
        }
    }

    // Throw an error if negative numbers present in string
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return sum;
}

module.exports = add;