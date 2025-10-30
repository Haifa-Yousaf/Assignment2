// tests/run.test.js
const satellite = require("./src/satellite");
const iridium = require("./src/iridium");

describe("Module imports", () => {
  test("satellite module should have a getTable function", () => {
    expect(typeof satellite.getTable).toBe("function");
  });

  test("iridium module should have a getTable function", () => {
    expect(typeof iridium.getTable).toBe("function");
  });
});

describe("Run script", () => {
  test("should call satellite.getTable with required arguments", () => {
    const spy = jest.spyOn(satellite, "getTable").mockImplementation(() => {});
    require("../run"); // imports and runs your main script
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.any(Number),
        pages: expect.any(Number),
        root: expect.any(String)
      })
    );
    spy.mockRestore();
  });
});
