function check(num) {
  let local = num.split("");
  let sum = 0,
    div = 1;
  for (let x of local) {
    sum += Number(x);
    div *= Number(x);
  }

  return sum > div ? sum : div;
}

function problem1(pobi, crong) {
  let pobimax = 0;
  let crongmax = 0;
  let pobiLeft = pobi[0];
  let pobiRight = pobi[1];
  let crongLeft = crong[0];
  let crongRigth = crong[1];

  if (pobiRight - pobiLeft !== 1 || crongRigth - crongLeft !== 1) return -1;
  if (pobiLeft % 2 !== 1 || crongLeft % 2 !== 1) {
    return -1;
  }

  if (pobiRight % 2 !== 0 || crongRigth % 2 !== 0) {
    return -1;
  }
  if (crongLeft < 3 || pobiLeft < 3) return -1;
  if (crongRigth > 398 || pobiRight > 398) return -1;

  let pobiLeftnum = check(String(pobiLeft));
  let pobiRightnum = check(String(pobiRight));
  pobiLeftnum > pobiRightnum
    ? (pobimax = pobiLeftnum)
    : (pobimax = pobiRightnum);

  let crongLeftnum = check(String(crongLeft));
  let crongRightnum = check(String(crongRigth));
  crongLeftnum > crongRightnum
    ? (crongmax = crongLeftnum)
    : (crongmax = crongRightnum);

  if (pobimax > crongmax) return 1;
  if (pobimax < crongmax) return 2;
  if (pobimax === crongmax) return 0;
}
module.exports = problem1;
