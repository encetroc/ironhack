const inString = (array) => {
  const resultString = array.reduce((acc, value) => {
    return `${acc} ${value}`;
  });
  return resultString;
};

module.exports = inString;
