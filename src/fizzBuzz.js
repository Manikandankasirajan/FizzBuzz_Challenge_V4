import isNotMultipleOf3And5 from "./utils/isNotMultipleOf3And5";

export default function fizzBuzz(num) {
	const rules = [isNotMultipleOf3And5];
	for (const rule of rules) {
		const result = rule(num);
		if (result) {
			return result;
		}
	}
}
