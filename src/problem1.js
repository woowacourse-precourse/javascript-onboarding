function problem1(pobi, crong) {
    if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) {
        return -1;
    } else {
        const pobi_max = total(pobi);
        const crong_max = total(crong);
        var winner = "";

        if (pobi_max > crong_max) {
            winner = 1;
        } else if (pobi_max < crong_max) {
            winner = 2;
        } else if (pobi_max === crong_max) {
            winner = 0;
        } else {
            winner = -1;
        }
        return winner;
    }
}

function total(arr) {
    var left = String(arr[0]);
    var right = String(arr[1]);

    // 왼쪽 페이지
    const left_total = pageTotal(left);

    // 오른쪽 페이지
    const right_total = pageTotal(right);

    // 최대값
    var total_max = Math.max(left_total, right_total);

    return total_max;
}

function pageTotal(direction) {
    var direct_sum = 0;
    var direct_multi = 1;
    for (let num of direction) {
        direct_sum += parseInt(num);
        direct_multi *= parseInt(num);
    }
    direct_total = Math.max(direct_sum, direct_multi);
    return direct_total;
}

module.exports = problem1;
