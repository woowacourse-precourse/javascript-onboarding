function problem1(pobi, crong) {
  var answer;
  let pobiNum = 0,
    crongNum = 0;
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) {
    return -1;
  }
  let temp1 = [];
  let temp2 = [];

  for (let i = 0; i < pobi.length; i++) {
    temp1 = pobi[i].toString().split('');
    temp2 = crong[i].toString().split('');
  }

  let sum = 0;
  let mul = 1;
  for (let i = 0; i < temp1.length; i++) {
    sum += parseInt(temp1[i]);
    mul *= parseInt(temp1[i]);
  }
  pobiNum = Math.max(sum, mul);

  sum = 0;
  mul = 1;
  for (let i = 0; i < temp2.length; i++) {
    sum += parseInt(temp2[i]);
    mul *= parseInt(temp2[i]);
  }
  crongNum = Math.max(sum, mul);

  if (pobiNum === crongNum) {
    answer = 0;
  } else if (pobiNum > crongNum) {
    answer = 1;
  } else if (pobiNum < crongNum) {
    answer = 2;
  }
  return answer;
}

module.exports = problem1;
