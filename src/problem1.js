function problem1(pobi, crong) {
  if (pobi[0] === 1 || crong[1] === 400) return -1;
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) return -1;
  function calculate(name) {
    let hap = [];
    let muti = [];
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

problem1([99, 102], [211, 212]);

module.exports = problem1;
