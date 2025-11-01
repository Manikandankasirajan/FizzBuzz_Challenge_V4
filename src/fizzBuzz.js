import isMultipleOf3 from "./utils/isMultipleOf3";
import isNotMultipleOf3And5 from "./utils/isNotMultipleOf3And5";

export default function fizzBuzz(num) {
	const rules = [isNotMultipleOf3And5, isMultipleOf3];
	for (const rule of rules) {
		const result = rule(num);
		if (result) {
			return result;
		}
	}
}
