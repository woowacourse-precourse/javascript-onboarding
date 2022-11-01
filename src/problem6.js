function problem6(forms) {
	let answer = [];
	let duplicatedIndex = [];
	let emailArray = forms.map((form) => form[0]);
	let nameArray = forms.map((form) => form[1]);

	if (!checkValidEmail(emailArray)) return -1;

	nameArray.forEach((names, index) => {
		let sliceNameArray = saveNameLength2(names);
		foundDuplicate(sliceNameArray, index);
	});

	duplicatedIndex
		.reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), [])
		.forEach((answerIndex) => {
			answer.push(emailArray[answerIndex]);
		});

	function checkValidEmail(emails) {
		let count = 0;
		emails.forEach((email) => {
			let checkEmail = email.slice(email.indexOf("@"), email.length);
			if (checkEmail == "@email.com") return;
			else count++;
		});
		return count == 0 ? 1 : 0;
	}

	function saveNameLength2(names) {
		let tempArray = [];
		[...names].map((char, index) => {
			if (names[index + 1]) {
				tempArray.push(char + names[index + 1]);
			}
		});
		return tempArray;
	}

	function foundDuplicate(arr, index) {
		nameArray.forEach((names, nameIndex) => {
			arr.forEach((char) => {
				if (names.includes(char) && nameIndex !== index)
					duplicatedIndex.push(nameIndex);
			});
		});
	}

	return answer.sort();
}

module.exports = problem6;
