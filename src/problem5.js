function problem5(money) {
  let answer = Array(9).fill(0);
  let restMoney = money;

  let fiftyThousand = parseInt(restMoney / 50000);
  answer[0] = fiftyThousand;
  restMoney = restMoney - fiftyThousand * 50000;

  let tenThousand = parseInt(restMoney / 10000);
  answer[1] = tenThousand;
  restMoney = restMoney - tenThousand * 10000;

  let fiveThousand = parseInt(restMoney / 5000);
  answer[2] = fiveThousand;
  restMoney = restMoney - fiveThousand * 5000;

  let oneThousand = parseInt(restMoney / 1000);
  answer[3] = oneThousand;
  restMoney = restMoney - oneThousand * 1000;

  let fiveHundred = parseInt(restMoney / 500);
  answer[4] = fiveHundred;
  restMoney = restMoney - fiveHundred * 500;

  let oneHundred = parseInt(restMoney / 100);
  answer[5] = oneHundred;
  restMoney = restMoney - oneHundred * 100;

  let fifty = parseInt(restMoney / 50);
  answer[6] = fifty;
  restMoney = restMoney - fifty * 50;

  let ten = parseInt(restMoney / 10);
  answer[7] = ten;
  restMoney = restMoney - ten * 10;

  let one = parseInt(restMoney / 1);
  answer[8] = one;
  restMoney = restMoney - one * 1;

  return answer;
}

module.exports = problem5;
