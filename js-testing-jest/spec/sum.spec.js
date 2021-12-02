const sum = require("../src/sum")

describe("sum tests", () => {
  it("should give back the correct sum", () => {
    const result = sum([1, 2, 3]);
    expect(result).toEqual(6);
  });
});
