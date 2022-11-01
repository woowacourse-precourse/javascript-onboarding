function problem5(money) {
  /*
  기능 목록
  1. money를 상위 단위로 나눈 몫을 구하고, 그 나머지를 하위 단위로 나눈 몫을 구하는 과정을 반복
  2. 전체 단위당 개수의 배열을 만들어 반환
  */
  
  var remain = money;

  var fiveManwon = parseInt(remain / 50000);
  remain = remain % 50000;

  var oneManwon = parseInt(remain / 10000);
  remain = remain % 10000;

  var fiveCheonwon = parseInt(remain / 5000);
  remain = remain % 5000;

  var oneCheonwon = parseInt(remain / 1000);
  remain = remain % 1000;

  var fiveBaekwon = parseInt(remain / 500);
  remain = remain % 500;

  var oneBaekwon = parseInt(remain / 100);
  remain = remain % 100;

  var fiveSibwon = parseInt(remain / 50);
  remain = remain % 50;

  var oneSibwon = parseInt(remain / 10);
  remain = remain % 10;

  var oneIlwon = remain;

  return [fiveManwon, oneManwon, fiveCheonwon, oneCheonwon, fiveBaekwon, oneBaekwon, fiveSibwon, oneSibwon, oneIlwon];
}

module.exports = problem5;