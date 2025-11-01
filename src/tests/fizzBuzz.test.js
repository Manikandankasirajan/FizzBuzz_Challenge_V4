import fizzBuzz from "../fizzbuzz";
describe("test cases for FizzBuzz challenge", () => {
	test("returns number if it is not multiple of 3 or 5", () => {
		const num = 1;
		expect(fizzBuzz(num)).toBe(num);
	});
});
