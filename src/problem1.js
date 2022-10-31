function sepNum(num) {
  let res = [];
  while (num > 0) {
    res.push(num%10);
    num = parseInt(num / 10);
  }
  return res;
}

function compSumWithMult(num) {
  return Math.max(
    sepNum(num).reduce((prev, curr) => prev + curr, 0), 
    sepNum(num).reduce((prev, curr) => prev * curr, 1)
  )
}

function problem1(pobi, crong) {
  if (pobi[0]+1 !== pobi[1] ||
         crong[0]+1 !== crong[1]) {
    return -1;
  }

  const pobi_max = Math.max(compSumWithMult(pobi[0]), compSumWithMult(pobi[1]));
  const crong_max = Math.max(compSumWithMult(crong[0]), compSumWithMult(crong[1]));
  let answer
  if(pobi_max === crong_max) {
    answer = 0;
  } else if(pobi_max > crong_max) {
    answer = 1;
  } else {
    answer = 2;
  }
  return answer;
}

module.exports = problem1;
