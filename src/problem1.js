function problem1(pobi, crong) {
  if (pobi[0] === 1 || crong[1] === 400) return -1;
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) return -1;
  // 각 배열의 수를 더해주고 곱해서 높은 수를 return 해주는 함수
  function calculate(name) {
    let hap = [];
    let muti = [];
    // 문자로 바꾸고 split으로 나눠서 더함
    name.forEach((e) => {
      hap.push(
        e
          .toString()
          .split("")
          .reduce((pre, cur) => Number(pre) + Number(cur))
      );
    });
    name.forEach((e) => {
      muti.push(
        e
          .toString()
          .split("")
          .reduce((pre, cur) => Number(pre) * Number(cur))
      );
    });
    if (hap[hap.length - 1] > muti[muti.length - 1]) return hap[hap.length - 1];
    else return muti[muti.length - 1];
  }
  let player1 = calculate(pobi);
  let player2 = calculate(crong);
  if (player1 > player2) return 1;
  else if (player1 < player2) return 2;
  else if (player1 === player2) return 0;
  else return -1;
}

module.exports = problem1;
