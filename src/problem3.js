function problem3(number) {
	let totalClapCount = 0
	for (let i = 1; i <= number; i++) {
		totalClapCount += getClapCount(i)
	}
	return totalClapCount
}

const canClap = numberChar => numberChar === '3' || numberChar === '6' || numberChar === '9'

const getClapCount = number => {
	const numberCharArr = String(number).split('')
	let clapCount = numberCharArr.filter(canClap).length

	return clapCount
}

module.exports = problem3
