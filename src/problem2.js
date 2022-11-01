function problem2(cryptogram) {
	let answer = [];
	let arrayWord = [...cryptogram];
	arrayWord.forEach((element, index) => {
		if (element == arrayWord[index - 1]) answer.pop();
		else answer.push(element);
	});

	return answer;
}

module.exports = problem2;
