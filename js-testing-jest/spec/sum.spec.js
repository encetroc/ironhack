const sum = require("../src/sum");

describe("sum tests", () => {
  it("should give back the correct sum", () => {
    const result = sum([1, 2, 3]);
    expect(result).toEqual(6);
  });
  it("should give back 0 for empty array", () => {
    const result = sum([]);
    expect(result).toEqual(0);
  });
  it("should not pass nothing", () => {
    const fn = () => sum();
    expect(fn).toThrow(new Error("you should pass an array to this funtion"));
  });
  it("should pass an array", () => {
    const fn = () => sum(1);
    expect(fn).toThrow(new Error("you should pass an array to this funtion"));
  });
});
