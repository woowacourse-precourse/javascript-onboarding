function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  //5만원
  let man5 = Math.floor(money / 50000);
  answer[0] = man5;
  money = money - man5 * 50000;

  //만원
  let man1 = Math.floor(money / 10000);
  answer[1] = man1;
  money = money - man1 * 10000;

  //5천원
  let cheon5 = Math.floor(money / 5000);
  answer[2] = cheon5;
  money = money - cheon5 * 5000;

  //천원
  let cheon1 = Math.floor(money / 1000);
  answer[3] = cheon1;
  money = money - cheon1 * 1000;

  //5백원
  let back5 = Math.floor(money / 500);
  answer[4] = back5;
  money = money - back5 * 500;

  //백원
  let back1 = Math.floor(money / 100);
  answer[5] = back1;
  money = money - back1 * 100;

  //오십원
  let sip5 = Math.floor(money / 50);
  answer[6] = sip5;
  money = money - sip5 * 50;

  //십원
  let sip1 = Math.floor(money / 10);
  answer[7] = sip1;
  money = money - sip1 * 10;

  //일원
  let one = money % 10;
  answer[8] = one;
  money = money - one;

  return answer;
}

module.exports = problem5;
