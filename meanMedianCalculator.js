// gets the mean and median out of a list of integers


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
//collects the user inputs to generate the mean and median
const getMean = (arr) => {
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
};

const getMedian = (arr) => {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 === 0
        ? (arr[mid - 1] + arr[mid]) / 2
        : arr[mid];
};
// gathers inputs from the user while checking parameters
const getInput = () => {
    rl.question('Enter any integer or "q" to quit and view results: ', (input) => {
        if (input.toLowerCase() === 'q') {
            if (numbers.length === 0) {
                console.log('No numbers were entered.');
            } else {
                console.log(`Numbers: ${numbers}`);
                console.log(`Mean: ${getMean(numbers)}`);
                console.log(`Median: ${getMedian(numbers)}`);
            }
            rl.close();
            return;
        }

        const number = parseInt(input, 10);
        if (isNaN(number)) {
            console.log('Invalid input. Please enter an integer.');
        } else {
            numbers.push(number);
        }
        getInput();
    });
};

console.log('Thank you for choosing Mean and Median Calculator!');
getInput();
