function problem1(pobi, crong) {
    var answer;

    if (
        (pobi[0] * crong[0]) % 2 !== 1 ||
        pobi[1] - pobi[0] !== 1 ||
        crong[1] - crong[0] !== 1 ||
        pobi[0] < 0 ||
        pobi[0] > 400 ||
        pobi[1] < 0 ||
        pobi[1] > 400 ||
        crong[0] < 0 ||
        crong[1] > 400 ||
        crong[1] < 0 ||
        crong[1] > 400
    ) {
        return -1;
    }

    const calculateScore = (name) => {
        let page = name[0];
        let score = [0, 1, 0, 1];

        let leftArr = page.toString().split("");
        let rightArr = (page + 1).toString().split("");

        let leftSum = score[0];
        let leftMultiple = score[1];
        let rightSum = score[2];
        let rightMultiple = score[3];

        for (let i = 0; i < leftArr.length; i++) {
            leftSum += Number(leftArr[i]);
            leftMultiple *= Number(leftArr[i]);
            score.splice(0, 1, leftSum);
            score.splice(1, 1, leftMultiple);
        }

        for (let i = 0; i < rightArr.length; i++) {
            rightSum += Number(rightArr[i]);
            rightMultiple *= Number(rightArr[i]);
            score.splice(2, 1, rightSum);
            score.splice(3, 1, rightMultiple);
        }

        return score.sort((a, b) => b - a)[0];
    };

    let pobiScore = calculateScore(pobi);
    let crongScore = calculateScore(crong);

    if (pobiScore > crongScore) {
        answer = 1;
    } else if (pobiScore === crongScore) {
        answer = 0;
    } else if (pobiScore < crongScore) {
        answer = 2;
    }

    return answer;
}

module.exports = problem1;
