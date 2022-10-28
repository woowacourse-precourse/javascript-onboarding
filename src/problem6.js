function problem6(forms) {
	const emails = [...new Map(forms).keys()]
	const nickNames = [...new Map(forms).values()]
	const duplicateCheckArr = new Array(forms.length).fill(false)

	const substrings = nickNames.map(nickName => {
		let substrings = []
		for (let i = 1; i < nickName.length; i++) {
			const substring = nickName[i - 1] + nickName[i]
			substrings.push(substring)
		}
		substrings = [...new Set(substrings)]

		return substrings
	})
}

module.exports = problem6
