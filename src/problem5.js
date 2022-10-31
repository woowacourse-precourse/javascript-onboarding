function problem5(money) {
  if (money < 1 || money >= 1000000) {
    return 'Incorrect Input!!';
  }
  var answer;
  let fiftyThousand = Math.trunc(money / 50000);
  let tenThousand = Math.trunc((money % 50000) / 10000);
  let fiveThousand = Math.trunc((money % 10000) / 5000);
  let thousand = Math.trunc((money % 5000) / 1000);
  let fiveHundread = Math.trunc((money % 1000) / 500);
  let hundread = Math.trunc((money % 500) / 100);
  let fifty = Math.trunc((money % 100) / 50);
  let ten = Math.trunc((money % 50) / 10);
  let one = Math.trunc((money % 10) / 1);
  answer = [
    fiftyThousand,
    tenThousand,
    fiveThousand,
    thousand,
    fiveHundread,
    hundread,
    fifty,
    ten,
    one,
  ];
  return answer;
}

module.exports = problem5;
