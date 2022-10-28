/*예외처리*/
function checkPage(pages) {
	const [leftPage, RightPage] = pages;

	if (RightPage - leftPage !== 1 || RightPage <= 1 || RightPage >= 400) {
		return false;
	}
	return true;
}

/*각 자릿수 나누기*/
function splitNum(num) {
	num = num + "";
	return num.split("").map(item => Number(item));
}

/*양쪽 페이지 계산*/
function calculateScore(leftNums, rightNums) {
	const leftSumByPlus = leftNums.reduce(
		(leftNums, rightNums) => leftNums + rightNums
	);

	const leftMultiply = leftNums.reduce(
		(leftNums, rightNums) => leftNums * rightNums
	);

	const rightSumByPlus = rightNums.reduce(
		(leftNums, rightNums) => leftNums + rightNums
	);

	const rightMultiply = rightNums.reduce(
		(leftNums, rightNums) => leftNums * rightNums
	);

	return Math.max(leftSumByPlus, leftMultiply, rightSumByPlus, rightMultiply);
}

/*문제해결*/
function problem1(pobi, crong) {
	const [pobiLeftPage, pobiRightPage] = pobi;
	const [crongLeftPage, crongRightPage] = crong;

	if (!checkPage(pobi) || !checkPage(crong)) return -1;

	const pobiPoint = calculateScore(
		splitNum(pobiLeftPage),
		splitNum(pobiRightPage)
	);
	const crongPoint = calculateScore(
		splitNum(crongLeftPage),
		splitNum(crongRightPage)
	);

	if (pobiPoint > crongPoint) return 1;
	if (pobiPoint < crongPoint) return 2;
	if (pobiPoint === crongPoint) return 0;
}

module.exports = problem1;
