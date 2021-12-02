const sum = (array) => {
  if (!array || !Array.isArray(array)) {
    throw new Error("you should pass an array to this funtion");
  }

  if (array.length === 0) {
    return 0;
  } else {
    const total = array.reduce((accumulator, value) => {
      return accumulator + value;
    });
    return total;
  }
};

module.exports = sum;

/**
 * write a multiplication funtion
 * const mult = ([1, 2, 3]) => 6
 */

/**
 * write a string interpolation function
 * const intString = (['my', 'name', 'is', 'john']) => 'my name is john'
 */