function problem2(cryptogram) {
	let answer = [];
	let arrayWord = [...cryptogram];
	do {
		answer = [];
		arrayWord.forEach((element, index) => {
			if (element == arrayWord[index - 1]) answer.pop();
			else answer.push(element);
		});
		arrayWord = [...answer];
	} while (isDuplicated(answer));

	function isDuplicated(arr) {
		let count = 0;
		arr.forEach((element, index) => {
			if (element == arr[index - 1]) count++;
			else return;
		});
		return count > 0 ? 1 : 0;
	}
	return answer.join("");
}

module.exports = problem2;
