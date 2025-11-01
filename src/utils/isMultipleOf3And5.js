export default function isMultipleOf3And5(num) {
	return num % 3 === 0 && num % 5 === 0 ? "FizzBuzz" : null;
}
