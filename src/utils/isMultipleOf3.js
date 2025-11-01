export default function isMultipleOf3(num) {
	return num % 3 === 0 && num % 5 !== 0 ? "Fizz" : null;
}
