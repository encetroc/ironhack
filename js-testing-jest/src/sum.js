const sum = (array) => {
  const total = array.reduce((accumulator, value) => {
    return accumulator + value;
  });
  return total;
};

module.exports = sum;