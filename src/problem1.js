function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    answer = -1;
    return answer;
  } else {
    let pArr = [];
    let cArr = [];

    let p1 = 0;
    let p2 = 0;
    let p3 = 1;
    let p4 = 1;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < pobi[i].toString().length; j++) {
        if (i === 0) {
          p1 += parseInt(pobi[i].toString()[j]);
          p3 *= parseInt(pobi[i].toString()[j]);
        } else if (i === 1) {
          p2 += parseInt(pobi[i].toString()[j]);
          p4 *= parseInt(pobi[i].toString()[j]);
        }
      }
    }
    pArr.push(p1, p2, p3, p4);

    let c1 = 0;
    let c2 = 0;
    let c3 = 1;
    let c4 = 1;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < crong[i].toString().length; j++) {
        if (i === 0) {
          c1 += parseInt(crong[i].toString()[j]);
          c3 *= parseInt(crong[i].toString()[j]);
        } else if (i === 1) {
          c2 += parseInt(crong[i].toString()[j]);
          c4 *= parseInt(crong[i].toString()[j]);
        }
      }
    }
    cArr.push(c1, c2, c3, c4);

    const P = Math.max.apply(null, pArr);
    const C = Math.max.apply(null, cArr);
    let answer = -1;

    if (P === C) {
      answer = 0;
    } else if (P > C) {
      answer = 1;
    } else if (P < C) {
      answer = 2;
    }
    return answer;
  }
}

module.exports = problem1;
