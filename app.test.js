import { multiplyByThree } from "./app.ts";

test("should 2 * 3 equal to 6", () => {
  expect(multiplyByThree(3)).toBe(9);
});
