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
