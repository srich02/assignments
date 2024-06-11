/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an empty object to store total price spent for each category
  const categoryMap = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
      const { category, price } = transaction;

      // If category already exists in the map, add the price to the existing total
      if (categoryMap[category]) {
          categoryMap[category] += price;
      } else {
          // If category does not exist in the map, initialize it with the price
          categoryMap[category] = price;
      }
  });

  // Convert the categoryMap object to an array of objects with the desired format
  const result = Object.keys(categoryMap).map(category => ({
      category,
      totalSpent: categoryMap[category]
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;