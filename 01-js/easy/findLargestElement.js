/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
        return undefined; // Return undefined if the array is empty
    }

    // Initialize the largest element as the first element of the array
    let largest = numbers[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < numbers.length; i++) {
        // Update the largest element if the current element is greater
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest; // Return the largest element found
}

module.exports = findLargestElement;
