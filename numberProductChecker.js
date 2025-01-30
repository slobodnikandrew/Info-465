const readline = require("readline");

// reads user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

// checks if multiplying two numbers equals a third number
function checkCondition(numbers) {

  for (let i = 0; i < numbers.length; i++) {

    for (let j = i + 1; j < numbers.length; j++) {

      for (let k = 0; k < numbers.length; k++) {

        if (i !== k && j !== k && numbers[i] * numbers[j] === numbers[k]) {

          console.log(`Condition is met: ${numbers[i]} x ${numbers[j]} = ${numbers[k]}`);
          return;
        }
      }
    }
  }
  console.log("Condition was not met");
}

// handling user input
function promptUser() {
  rl.question("Enter an integer (or 'q' to quit): ", (input) => {

    if (input.toLowerCase() === "q") {

      if (numbers.length < 2) {

        console.log("You must enter at least two integers to check the condition.");
      } else {
        
        console.log("Numbers entered:", numbers);
        checkCondition(numbers);
      }
      rl.close();
      return;
    }

    let num = parseInt(input);

    if (isNaN(num)) {
      console.log("Invalid input! Please enter an integer.");
    } else {
      numbers.push(num);
    }

    promptUser();
  });
}

// starting user input loop
console.log("Enter integers one by one. Type 'q' to finish.");
promptUser();
