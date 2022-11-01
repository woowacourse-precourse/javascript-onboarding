function problem6(forms) {
	let answer = [];
	let duplicatedIndex = [];
	let emailArray = forms.map((form) => form[0]);
	let nameArray = forms.map((form) => form[1]);

	nameArray.forEach((names, index) => {
		let sliceNameArray = saveNameLength2(names);
		foundDuplicate(sliceNameArray, index);
	});

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
