function problem2(cryptogram) {
	const duplicateIndex = getDuplicateIndex(cryptogram)
	const filteredCryptogram = getFilterdCryptogram(cryptogram, duplicateIndex)
	if (cryptogram === filteredCryptogram) return cryptogram

	return problem2(filteredCryptogram)
}

const getDuplicateIndex = cryptogram => {
	const duplicateIndex = new Array(cryptogram.length).fill(false)

	for (let i = 1; i < cryptogram.length; i++) {
		if (cryptogram[i - 1] === cryptogram[i]) {
			duplicateIndex[i - 1] = true
			duplicateIndex[i] = true
		}
	}
	return duplicateIndex
}

const getFilterdCryptogram = (cryptogram, duplicateIndex) => {
	const filterdCryptogramArr = cryptogram.split('').filter((_, idx) => !duplicateIndex[idx])
	const filterdCryptogram = filterdCryptogramArr.join('')
	return filterdCryptogram
}

module.exports = problem2
