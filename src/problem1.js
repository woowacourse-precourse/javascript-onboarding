const isError = (arr) => {
    if (arr[1] - arr[0] !== 1 || arr[0] <= 1 || 400 <= arr[1]) return true;
    return false;
};

const getScore = (arr) => {
    let leftplus = 0,
        leftmultiply = 1,
        rightplus = 0,
        rightmultiply = 1;
    for (let i = 0; i < arr[0].toString().length; i++) {
        leftplus += Number(arr[0].toString()[i]);
        leftmultiply *= Number(arr[0].toString()[i]);
    }
    for (let i = 0; i < arr[1].toString().length; i++) {
        rightplus += Number(arr[1].toString()[i]);
        rightmultiply *= Number(arr[0].toString()[i]);
    }
    return Math.max(leftplus, leftmultiply, rightplus, rightmultiply);
};

function problem1(pobi, crong) {
    let answer;
    if (isError(pobi) || isError(crong)) return -1;
    getScore(pobi) > getScore(crong)
        ? (answer = 1)
        : getScore(pobi) < getScore(crong)
        ? (answer = 2)
        : (answer = 0);
    return answer;
}

console.log(problem1([97, 98], [197, 198]));
console.log(problem1([131, 132], [211, 212]));
console.log(problem1([99, 102], [211, 212]));
module.exports = problem1;
