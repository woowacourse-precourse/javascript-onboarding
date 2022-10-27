function problem1(pobi, crong) {
	var pobiScore;
	var crongScore;
	var isVaildPobi = isVaildPage(pobi[0], pobi[1]);
	var isVaildCrong = isVaildPage(pobi[0], pobi[1]);
	if (!isVaildCrong) return -1;
	if (!isVaildPobi) return -1;
	pobiScore = pageSum(pobi);
	crongScore = pageSum(crong);
	if (pobiScore > crongScore) {
		return 1;
	} else if (pobiScore === crongScore) {
		return 0;
	} else return 2;
}
function isVaildPage(leftPage, rightPage) {
	if (leftPage % 2 == 0) return false;
	if (rightPage % 2 != 0) return false;
	if (rightPage - leftPage != 1) return false;
	return true;
}
function pageSum(page) {
	let pageLeft = pageSplit(page[0]);
	let pageRight = pageSplit(page[1]);
	let score = bestScore(pageLeft, pageRight);
	return score;
}

function pageSplit(num) {
	let arr = [];
	while (num > 1) {
		if (num < 10) {
			arr.push(Math.trunc(num));
			break;
		}
		arr.push(Math.trunc(num % 10));
		num = num / 10;
	}
	return arr;
}

function bestScore(pageLeft, pageRight) {
	let leftBest = choiceBest(pageLeft);
	let rightBest = choiceBest(pageRight);
	if (leftBest > rightBest) {
		return leftBest;
	} else {
		return rightBest;
	}
}

function choiceBest(num) {
	var sum1 = 0;
	var sum2 = 1;
	for (let i = 0; i < num.length; i++) {
		sum1 += num[i];
		sum2 *= num[i];
	}
	if (sum1 > sum2) {
		return sum1;
	} else {
		return sum2;
	}
}

module.exports = problem1;
