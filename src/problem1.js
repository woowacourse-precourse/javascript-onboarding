function problem1(pobi, crong) {
  var answer;

  let pobiNum = getMaxNum(pobi);
  let crongNum = getMaxNum(crong);

  if (pobiNum > crongNum) answer = 1;
  else if (pobiNum < crongNum) answer = 2;
  else answer = 0;
  return answer;
}

function getMaxNum(who) {
  const arr = [];
  who.forEach((page) => {
    if (page >= 100) {
      let plusNum = 0;
      let multiNum = 1;
      for (let i = 0; i < 3; i++) {
        plusNum += Number(String(page)[i]);
        multiNum *= Number(String(page)[i]);
      }
      if (plusNum > multiNum) arr.push(plusNum);
      else arr.push(multiNum);
    }
    if (page < 100) {
      let plusNum = 0;
      let multiNum = 1;
      for (let i = 0; i < 2; i++) {
        plusNum += Number(String(page)[i]);
        multiNum *= Number(String(page)[i]);
      }
      if (plusNum > multiNum) arr.push(plusNum);
      else arr.push(multiNum);
    }
  });
  return Math.max(...arr);
}

module.exports = problem1;
