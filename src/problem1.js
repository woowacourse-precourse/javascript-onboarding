function isRight(pages) {
  let [left, right] = pages;
  if (1 <= left && left < 400 && left + 1 === right)
    return true;
  return false;
}

function problem1(pobi, crong) {
  var answer;
  let arr = [];
  let plus;
  let mul;
  let pobiComp = [];
  let crongComp = [];
  let pobiMax;
  let crongMax;
  
  if (!isRight(pobi) || !isRight(crong))
    return -1;
  
  pobi.map((idx) => {
    arr = idx
      .toString()
      .split("")
      .map((x) => parseInt(x));
    plus = arr.reduce((acc, cur) => acc + cur, 0);
    mul = arr.reduce((acc, cur) => acc * cur, 1);
    pobiComp.push(plus > mul ? plus : mul);
  });

  crong.map((idx) => {
    arr = idx
      .toString()
      .split("")
      .map((x) => parseInt(x));
    plus = arr.reduce((acc, cur) => acc + cur, 0);
    mul = arr.reduce((acc, cur) => acc * cur, 1);
    crongComp.push(plus > mul ? plus : mul);
  });

  pobiMax = pobiComp[0] > pobiComp[1] ? pobiComp[0] : pobiComp[1]
  crongMax = crongComp[0] > crongComp[1] ? crongComp[0] : crongComp[1]

  if (pobiMax > crongMax) { answer = 1 }
  else if (pobiMax < crongMax) { answer = 2 }
  else { answer = 0 }
  
  return answer;
}

module.exports = problem1;
