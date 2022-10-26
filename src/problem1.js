function problem1(pobi, crong) {
  let pobiMax = 0;
  let crongMax = 0;
  let pobiArr = [];
  let crongArr = [];

  for (let i = 0; i < 2; i++) {
    let pobiPlus = 0;
    let pobiTimes = 1;
    let crongPlus = 0;
    let crongTimes = 1;

    for (let z = 0; z < String(pobi[i]).length; z++) {
      pobiPlus += parseInt(String(pobi[i])[z]);
      pobiTimes *= parseInt(String(pobi[i])[z]);
    }
    for (let x = 0; x < String(crong[i]).length; x++) {
      crongPlus += parseInt(String(crong[i])[x]);
      crongTimes *= parseInt(String(crong[i])[x]);
    }
    pobiArr.push(pobiPlus, pobiTimes);
    crongArr.push(crongPlus, crongTimes);
  }

  for (let i of pobiArr) {
    if (pobiMax < i) {
      pobiMax = i;
    }
  }

  for (let i of crongArr) {
    if (crongMax < i) {
      crongMax = i;
    }
  }

  if (pobiMax > crongMax) {
    return 1;
  } else if (pobiMax < crongMax) {
    return 2;
  } else {
    return 0;
  }
}

module.exports = problem1;
