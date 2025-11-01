import fizzBuzz from "../fizzbuzz";
describe("test cases for FizzBuzz challenge", () => {
	test("returns number if it is not multiple of 3 and 5", () => {
		const num = 1;
		expect(fizzBuzz(num)).toBe(num);
	});
	test("returns Fizz for the multiples of 3", () => {
		const num = 3;
		expect(fizzBuzz(num)).toBe("Fizz");
	});
});
