import { multiplyByThree } from "./index";

test("should 2 * 3 equal to 6", () => {
  expect(multiplyByThree(3)).toBe(9);
});

test("expect multiplying by 0 to be 0", () => {
  expect(multiplyByThree(0)).toBe(0);
});
