function problem5(money) {
  var answer = [];
    
  answer.push(parseInt(money / 50000));
  money %= 50000;;

  answer.push(parseInt(money / 10000));
  money %= 10000;

  answer.push(parseInt(money / 5000));
  money %= 5000;

  answer.push(parseInt(money / 1000));
  money %= 1000;

  answer.push(parseInt(money / 500));
  money %= 500;

  answer.push(parseInt(money / 100));
  money %= 100;

  answer.push(parseInt(money / 50));
  money %= 50;

  answer.push(parseInt(money / 10));
  money %= 10;

  answer.push(parseInt(money / 1));
  money %= 1;
  return answer;
}

module.exports = problem5;
