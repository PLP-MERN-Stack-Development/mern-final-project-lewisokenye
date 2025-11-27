import { validateBugData } from "../utils/validateBug.js";

describe("validateBugData()", () => {
  test("returns false if title is missing", () => {
    expect(validateBugData({ description: "Some bug" })).toBe(false);
  });

  test("returns false if description is missing", () => {
    expect(validateBugData({ title: "Bug 1" })).toBe(false);
  });

  test("returns false if invalid status is given", () => {
    expect(
      validateBugData({ title: "Bug 2", description: "desc", status: "invalid" })
    ).toBe(false);
  });

  test("returns true for valid data", () => {
    expect(
      validateBugData({ title: "Bug 3", description: "Valid bug", status: "open" })
    ).toBe(true);
  });

  test("returns true if status is omitted (defaults to open)", () => {
    expect(validateBugData({ title: "Bug 4", description: "desc" })).toBe(true);
  });
});
