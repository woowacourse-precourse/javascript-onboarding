function problem5(money) {
    const arr = new Array();
    const arrMoney = money
        .toString()
        .split('')
        .map((el) => parseInt(el))
        .reverse();
    const digit10000 = arrMoney.slice(4).reverse();
    const from1000to1 = arrMoney.slice(0, 4).reverse();
    count10000(digit10000, arr);
    count1000to10(from1000to1, arr);
    count1(from1000to1, arr);

    const answer = arr;

    return answer;
}

function count10000(digit10000, arr) {
    if (digit10000[0] >= 5) {
        arr.push(Math.floor(digit10000[0] / 5));
        arr.push(digit10000[0] % 5);
    } else {
        arr.push(0);
        arr.push(digit10000[0]);
    }
    return arr;
}

function count1000to10(from1000to1, arr) {
    for (let i = 0; i < 3; i++) {
        if (from1000to1[i] >= 5) {
            arr.push(1);
            arr.push(from1000to1[i] - 5);
        } else {
            arr.push(0);
            arr.push(from1000to1[i]);
        }
    }
    return arr;
}

function count1(from1000to1, arr) {
    arr.push(from1000to1[3]);
    return arr;
}

module.exports = problem5;
