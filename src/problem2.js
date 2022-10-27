function problem2(cryptogram) {}

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

module.exports = problem2
