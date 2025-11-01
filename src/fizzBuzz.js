import isMultipleOf3 from "./utils/isMultipleOf3";
import isMultipleOf5 from "./utils/isMultipleOf5";
import isNotMultipleOf3And5 from "./utils/isNotMultipleOf3And5";
import isMultipleOf3And5 from "./utils/isMultipleOf3And5";

export default function fizzBuzz(num) {
	if (typeof num !== "number") {
		throw new TypeError("Invalid Input");
	}

	const rules = [
		isNotMultipleOf3And5,
		isMultipleOf3,
		isMultipleOf5,
		isMultipleOf3And5,
	];
	for (const rule of rules) {
		const result = rule(num);
		if (result) {
			return result;
		}
	}
}
