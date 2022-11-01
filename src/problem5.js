function problem5(money) {
  /*
  기능 목록
  1. money를 상위 단위로 나눈 몫을 구하고, 그 나머지를 하위 단위로 나눈 몫을 구하는 과정을 반복
  2. 전체 단위당 개수의 배열을 만들어 반환
  */
  
  let remain = money;

  const fiveManwon = parseInt(remain / 50000);
  remain = remain % 50000;

  const oneManwon = parseInt(remain / 10000);
  remain = remain % 10000;

  const fiveCheonwon = parseInt(remain / 5000);
  remain = remain % 5000;

  const oneCheonwon = parseInt(remain / 1000);
  remain = remain % 1000;

  const fiveBaekwon = parseInt(remain / 500);
  remain = remain % 500;

  const oneBaekwon = parseInt(remain / 100);
  remain = remain % 100;

  const fiveSibwon = parseInt(remain / 50);
  remain = remain % 50;

  const oneSibwon = parseInt(remain / 10);
  remain = remain % 10;

  const oneIlwon = remain;

  return [fiveManwon, oneManwon, fiveCheonwon, oneCheonwon, fiveBaekwon, oneBaekwon, fiveSibwon, oneSibwon, oneIlwon];
}

module.exports = problem5;