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
	test("returns Buzz for the multiples of 5", () => {
		const num = 5;
		expect(fizzBuzz(num)).toBe("Buzz");
	});
	test("returns FizzBuzz for the multiples of 3 and 5", () => {
		const num = 15;
		expect(fizzBuzz(num)).toBe("FizzBuzz");
	});
	test("random numbers to check program certainty", () => {
		const num = 7;
		expect(fizzBuzz(num)).toBe(num);
		const num2 = 9;
		expect(fizzBuzz(num2)).toBe("Fizz");
		const num3 = 20;
		expect(fizzBuzz(num3)).toBe("Buzz");
		const num4 = 30;
		expect(fizzBuzz(num4)).toBe("FizzBuzz");
	});
});
