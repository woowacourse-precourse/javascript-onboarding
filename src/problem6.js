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

	for (let i = 0; i < substrings.length; i++) {
		for (let j = i + 1; j < substrings.length; j++) {
			const mergeSubstrings = [...substrings[i], ...substrings[j]]
			const duplicateCheck = new Set(mergeSubstrings)

			if (mergeSubstrings.length !== duplicateCheck.size) {
				duplicateCheckArr[i] = true
				duplicateCheckArr[j] = true
			}
		}
	}

	const noticeTargetEmails = emails.filter((_, idx) => duplicateCheckArr[idx])

	return noticeTargetEmails.sort((a, b) => a.localeCompare(b))
}

module.exports = problem6
