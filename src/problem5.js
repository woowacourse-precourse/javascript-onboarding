function problem5(money) {
  const fiftyThousandRest = money % 50000;
  const tenThousandRest = fiftyThousandRest % 10000;
  const fiveThousandRest = tenThousandRest % 5000;
  const oneThousandRest = fiftyThousandRest % 1000;
  const oneHundredRest = oneThousandRest % 500;
  const fifyRest = oneHundredRest % 50;

  const fiftyThousand = (money - fiftyThousandRest) / 50000;

  const tenThousand = Math.floor(fiftyThousandRest / 10000);

  const fiveThousand = Math.floor(tenThousandRest / 5000);

  const oneThousand = Math.floor(fiveThousandRest / 1000);

  const fiveHundred = Math.floor(oneThousandRest / 500);

  const oneHundred = Math.floor(oneHundredRest / 100);

  const fifty = Math.floor(fifyRest / 50);

  const ten = Math.floor(fifyRest / 10);

  const one = fifyRest % 10;

  var answer = [
    fiftyThousand,
    tenThousand,
    fiveThousand,
    oneThousand,
    fiveHundred,
    oneHundred,
    fifty,
    ten,
    one,
  ];
  return answer;
}

module.exports = problem5;
