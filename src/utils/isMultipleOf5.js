export default function isMultipleOf5(num) {
	return num % 5 === 0 && num % 3 !== 0 ? "Buzz" : null;
}
