// Objects lack many methods that exist for arrays, e.g. map, filter and others.

// If we’d like to apply them, then we can use Object.entries followed by Object.fromEntries:

// Use Object.entries(obj) to get an array of key/value pairs from obj.
// Use array methods on that array, e.g. map, to transform these key/value pairs.
// Use Object.fromEntries(array) on the resulting array to turn it back into an object.
// For example, we have an object with prices, and would like to double them:

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  let doublePrices = Object.fromEntries(
    // convert prices to array, map each key/value pair into another pair
    // and then fromEntries gives back the object
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
  );
  
  alert(doublePrices.meat); // 8