{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs36 \cf0 \expnd0\expndtw0\kerning0
// gets the mean and median out of a list of integers\
\
\
const readline = require('readline');\
const rl = readline.createInterface(\{\
    input: process.stdin,\
    output: process.stdout\
\});\
\
let numbers = [];\
\
const getMean = (arr) => \{\
    const sum = arr.reduce((a, b) => a + b, 0);\
    return sum / arr.length;\
\};\
\
const getMedian = (arr) => \{\
    arr.sort((a, b) => a - b);\
    const mid = Math.floor(arr.length / 2);\
    return arr.length % 2 === 0\
        ? (arr[mid - 1] + arr[mid]) / 2\
        : arr[mid];\
\};\
\
const getInput = () => \{\
    rl.question('Enter any integer or "q" to quit and view results: ', (input) => \{\
        if (input.toLowerCase() === 'q') \{\
            if (numbers.length === 0) \{\
                console.log('No numbers were entered.');\
            \} else \{\
                console.log(`Numbers: $\{numbers\}`);\
                console.log(`Mean: $\{getMean(numbers)\}`);\
                console.log(`Median: $\{getMedian(numbers)\}`);\
            \}\
            rl.close();\
            return;\
        \}\
\
        const number = parseInt(input, 10);\
        if (isNaN(number)) \{\
            console.log('Invalid input. Please enter an integer.');\
        \} else \{\
            numbers.push(number);\
        \}\
        getInput();\
    \});\
\};\
\
console.log('Thank you for choosing Mean and Median Calculator!');\
getInput();\
}