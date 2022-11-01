function problem6(forms) {
	let answer = [];
	let emailArray = forms.map((form) => form[0]);
	let nameArray = forms.map((form) => form[1]);

	nameArray.forEach((names) => {
		let sliceNameArray = saveNameLength2(names);
	});

	function saveNameLength2(names) {
		let tempArray = [];
		Array.from(names).map((char, index) => {
			if (names[index + 1]) {
				tempArray.push(char + names[index + 1]);
			}
		});
		return tempArray;
	}

	return answer;
}

module.exports = problem6;
