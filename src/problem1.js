function problem1(pobi, crong) {
	if (!isValidPageNumbers(pobi, crong)) return -1

	const pobiScore = Math.max(...pobi.map(pageNum => Math.max(sumEachDigit(pageNum), multiplyEachDigit(pageNum))))
	const crongScore = Math.max(...crong.map(pageNum => Math.max(sumEachDigit(pageNum), multiplyEachDigit(pageNum))))

	if(pobiScore > crongScore) return 1
	if(pobiScore < crongScore) return 2
	return 0	
}
const isValidPageNumbers = (pobi, crong) => {
	const [pobiLeftNumber, pobiRightNumber] = pobi
	const [crongLeftNumber, crongRightNumber] = crong

	if (!isValidPageOrder(pobiLeftNumber, pobiRightNumber)) return false
	if (!isValidPageOrder(crongLeftNumber, crongRightNumber)) return false
	if (isFirstPage(pobiLeftNumber, crongLeftNumber)) return false
	if (isLastPage(pobiLeftNumber, crongLeftNumber)) return false
	return true
}
const isValidPageOrder = (leftNumber, rightNumber) => {
	return rightNumber - leftNumber === 1
}
const isFirstPage = (leftNumber1, leftNumber2) => {
	return leftNumber1 === 1 || leftNumber2 === 1
}
const isLastPage = (leftNumber1, leftNumber2) => {
	return leftNumber1 === 399 || leftNumber2 === 399
}

const sumEachDigit = pageNum => {
	const sumNum = String(pageNum)
		.split('')
		.reduce((sum, current) => sum + parseInt(current, 10), 0)
	return sumNum
}
const multiplyEachDigit = pageNum => {
	const mulNum = String(pageNum)
		.split('')
		.reduce((mul, current) => mul * parseInt(current, 10), 1)
	return mulNum
}

module.exports = problem1
