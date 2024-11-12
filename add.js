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
    const numberArray = numberString.split(delimiter);

    for (const number of numberArray) {
        const parsedNumber = parseInt(number);
        sum += parsedNumber;
    }

    return sum;
}

module.exports = add;