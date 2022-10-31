const findMaxNumber = (arr) => {
    let leftNumberArr = arr[0].toString().split('').map(Number);
    let rightNumberArr = arr[1].toString().split('').map(Number);

    const newArr = [
        leftNumberArr.reduce((a, c) => a + c, 0),
        leftNumberArr.reduce((a, c) => a * c, 1),
        rightNumberArr.reduce((a, c) => a + c, 0),
        rightNumberArr.reduce((a, c) => a * c, 1),
    ];

    return Math.max(...newArr);
};
const check = (arr) => {
    const leftNumber = arr[0];
    const rightNumber = arr[1];

    if (leftNumber === 1 || rightNumber === 400) {
        return false;
    }

    if (rightNumber - 1 === leftNumber) {
        return true;
    }

    return false;
};

function problem1(pobi, crong) {
    if (!check(pobi) || !check(crong)) {
        return -1;
    }
    const arr1Max = findMaxNumber(pobi);
    const arr2Max = findMaxNumber(crong);

    return arr1Max > arr2Max ? 1 : 0;
}

module.exports = problem1;
