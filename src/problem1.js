function problem1(pobi, crong) {
    function plus(n) {
        let sum = 0;
        do {
            sum += n % 10;
            n = Math.floor(n / 10);
        } while (n > 0);
        return sum;
    }
    function multifle(n) {
        if (n > 100) {
            const a = Math.floor(n / 100);
            const b = Math.floor((n % 100) / 10);
            const c = (n % 100) % 10;
            return a * b * c;
        } else if (10 <= n) {
            const a = Math.floor(n / 10);
            const b = n % 10;
            return a * b;
        } else if (n < 10) {
            return n;
        }
    }
    const pobiArr = [
        plus(pobi[0]),
        plus(pobi[1]),
        multifle(pobi[0]),
        multifle(pobi[1]),
    ];
    const pobiMax = Math.max.apply(null, pobiArr);
    const crongArr = [
        plus(crong[0]),
        plus(crong[1]),
        multifle(crong[0]),
        multifle(crong[1]),
    ];
    const crongMax = Math.max.apply(null, crongArr);
    var answer;
    if (pobiMax > crongMax) {
        var answer = 1;
    } else if (pobiMax < crongMax) {
        var answer = 2;
    } else if (pobiMax === crongMax) {
        var answer = 0;
    }
    if (pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) {
        var answer = -1;
    }

    return answer;
}

module.exports = problem1;
