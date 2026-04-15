/*
 * This program calculates the median and mode of a set of numbers entered by the user.
 * The user is prompted to enter the total number of values
 * - (must be an odd number and not greater than 15).
 * Then, the user is prompted to enter each number one by one.
 * The program sorts the numbers, calculates the median
 * - (the middle value) and the mode (the most frequently occurring value).
 * Finally, it displays the sorted numbers, the median, and the mode to the user.
 */

async function main() {
  let total = 0;

  while (true) {
    const input = prompt("Enter total number of values (max 15, must be odd):");
    const num = parseInt(input || "");

    if (!isNaN(num) && num > 0 && num <= 15 && num % 2 !== 0) {
      total = num;
      break;
    } else if (num > 15) {
      console.log("Number must not be greater than 15.");
    } else if (num % 2 === 0) {
      console.log("Number must not be odd.");
    } else {
      console.log("Please enter a valid number.");
    }
  }

  const numbers: number[] = [];

  for (let index = 1; index <= total; index++) {
    const input = prompt(`Enter number ${index}: `);
    const num = parseInt(input || "");

    if (isNaN(num)) {
      console.log("Invalid number, please try again.");
      continue;
    }

    numbers.push(num);
  }

  numbers.sort((a, b) => a - b);

  const median = numbers[Math.floor(total / 2)];
  const frequency = new Map<number, number>();

  for (const num of numbers) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  let mode = numbers[0];
  let max_count = 0;

  for (const [num, count] of frequency.entries()) {
    if (count > max_count) {
      max_count = count;
      mode = num;
    }
  }

  console.log("\n-----RESULTS-----\n");
  console.log(`Sorted Numbers: [${numbers.join(", ")}]`);
  console.log(`Median: ${median}`);
  console.log(`Mode: ${mode}`);
}

main();
