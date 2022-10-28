function problem1(pobi, crong) {
    if (pobi[0] >= pobi[1] || crong[0] >= crong[1]) {
        return -1;
    }
    if (pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) {
        return -1;
    }

    let answer;
    let pb = 0;
    let cr = 0;

    pobi.forEach((arrElem) => {
        let sum = 0;
        let mul = 1;
        let arr = [...String(arrElem)];
        arr.forEach((element) => {
            sum += Number(element);
            mul *= Number(element);
        });
        pb = pb < sum ? sum : pb;
        pb = pb < mul ? mul : pb;
    });

    crong.forEach((arrElem) => {
        let sum = 0;
        let mul = 1;
        let arr = [...String(arrElem)];
        arr.forEach((element) => {
            sum += Number(element);
            mul *= Number(element);
        });
        cr = cr < sum ? sum : cr;
        cr = cr < mul ? mul : cr;
    });

    if (pb > cr) answer = 1;
    else if (pb < cr) answer = 2;
    else if (pb === cr) answer = 0;

    return answer;
}

module.exports = problem1;
