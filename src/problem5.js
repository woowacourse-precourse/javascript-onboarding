function problem5(money) {
  var answer = [];

  const fiftyThousandNote = Math.floor(money / 50000);
  money = money - fiftyThousandNote * 50000;
  answer.push(fiftyThousandNote);

  const tenThousandNote = Math.floor(money / 10000);
  money = money - tenThousandNote * 10000;
  answer.push(tenThousandNote);

  const fiveThousandNote = Math.floor(money / 5000);
  money = money - fiveThousandNote * 5000;
  answer.push(fiveThousandNote);

  const oneThousandNote = Math.floor(money / 1000);
  money = money - oneThousandNote * 1000;
  answer.push(oneThousandNote);

  const fiftyHundredCoin = Math.floor(money / 500);
  money = money - fiftyHundredCoin * 500;
  answer.push(fiftyHundredCoin);

  const oneHundredCoin = Math.floor(money / 100);
  money = money - oneHundredCoin * 100;
  answer.push(oneHundredCoin);

  const fiftyCoin = Math.floor(money / 50);
  money = money - fiftyCoin * 50;
  answer.push(fiftyCoin);

  const tenCoin = Math.floor(money / 10);
  money = money - tenCoin * 10;
  answer.push(tenCoin);

  const oneCoin = Math.floor(money / 1);
  money = money - oneCoin * 1;
  answer.push(oneCoin);

  return answer;
}

module.exports = problem5;
