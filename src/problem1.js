function problem1(pobi, crong) {
    var sum = 0;
    var mul = 0;

    const sumSolution = n => {


        do {
            sum += n % 10;
            n = Math.floor(n / 10);
        } while (n > 10);

        return (sum + n);
    };

    const multiplySolution = n => {


        do {
            mul *= n % 10;
            n = Math.floor(n / 10);
        } while (n > 10);

        return (mul * n);
    };

    const numberPobi = () => {
        var sumPobiFirst = sumSolution(pobi[0]);
        var sumPobiSecond = sumSolution(pobi[1]);
        var mulPobiFirst = multiplySolution(pobi[0]);
        var mulPobiSecond = multiplySolution(pobi[1]);

        var arrayPobi = [sumPobiFirst, sumPobiSecond, mulPobiFirst, mulPobiSecond];
        var maxPobi = Math.max(arrayPobi);

        return maxPobi;
    };

    const numberCrong = () => {
        var sumCrongFirst = sumSolution(crong[0]);
        var sumCrongSecond = sumSolution(crong[1]);
        var mulCrongFirst = multiplySolution(crong[0]);
        var mulCrongSecond = multiplySolution(crong[1]);

        var arrayCrong = [sumCrongFirst, sumCrongSecond, mulCrongFirst, mulCrongSecond];

        var maxCrong = Math.max(arrayCrong);

        return maxCrong;
    };

    let answer = 0;
    if (numberPobi() < numberCrong()) {
        answer = 2
    };
    if (numberPobi() > numberCrong()) {
        answer = 1
    };
    if (numberPobi() == numberCrong()) {
        answer = 0
    };
    if (pobi[1] > pobi[0] + 1 || crong[1] > crong[0] + 1) {
        answer = -1
    };

    return answer;
}

module.exports = problem1;
