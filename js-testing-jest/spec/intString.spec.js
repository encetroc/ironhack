const intString = require("../src/intString");

describe("mult tests", () => {
  it("should give back the correct value", () => {
    const result = intString(["my", "name", "is", "john"]);
    expect(result).toEqual("my name is john");
  });
});
