function problem1(pobi, crong) {
  var answer;
  if (
    pobi.find((page) => page === 1 || page === 400) ||
    crong.find((page) => page === 1 || page === 400)
  )
    return -1;
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;
  let pobiA = (pobi) => {
    let plus = [0, 0];
    let multi = [1, 1];
    let answer = [];
    for (let i = 0; i < 2; i++) {
      n = pobi[i].toString();
      for (let j = 0; j < n.length; j++) {
        plus[i] += parseInt(n[j]);
      }
      for (let j = 0; j < n.length; j++) {
        multi[i] *= parseInt(n[j]);
      }
      if (plus[i] > multi[i]) answer[i] = plus[i];
      else answer[i] = multi[i];
    }
    return Math.max(...answer);
  };
  let crongA = (crong) => {
    let plus = [0, 0];
    let multi = [1, 1];
    let answer = [];
    for (let i = 0; i < 2; i++) {
      n = crong[i].toString();
      for (let j = 0; j < n.length; j++) {
        plus[i] += parseInt(n[j]);
      }
      for (let j = 0; j < n.length; j++) {
        multi[i] *= parseInt(n[j]);
      }
      if (plus[i] > multi[i]) answer[i] = plus[i];
      else answer[i] = multi[i];
    }
    return Math.max(...answer);
  };
  if (pobiA(pobi) > crongA(crong)) answer = 1;
  else if (pobiA(pobi) == crongA(crong)) answer = 0;
  else if (pobiA(pobi) < crongA(crong)) answer = 2;

  return answer;
}

module.exports = problem1;
