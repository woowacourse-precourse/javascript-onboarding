function problem5(money) {
  var answer = [];
  // * Math.floor()의 내림을 사용
  const m1 = Math.floor(money / 50000); //오만원
  const m2 = Math.floor((money % 50000) / 10000); //만원
  const m3 = Math.floor((money % 10000) / 5000); //오천원
  const m4 = Math.floor((money % 5000) / 1000); //천원
  const m5 = Math.floor((money % 1000) / 500); //오백원
  const m6 = Math.floor((money % 500) / 100); //백원
  const m7 = Math.floor((money % 100) / 50); //오십원
  const m8 = Math.floor((money % 50) / 10); //십원
  const m9 = Math.floor((money % 10) / 1); //일원

  answer = [m1, m2, m3, m4, m5, m6, m7, m8, m9];
  return answer;
}

module.exports = problem5;
