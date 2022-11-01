function findMax(x) {
  var sum = 0;
  var mul = 1;

  while (Math.floor(x / 10) > 0) {
    sum += x % 10;
    mul *= x % 10;
    x = Math.floor(x/10);
  }
  sum += x;
  mul *= x;

  return Math.max(sum, mul);
}


function problem1(pobi, crong) {
  var answer;
  if(pobi[1] !== pobi[0]+ 1) return -1;
  if(crong[1] !== crong[0] + 1) return -1;

  var maxPobi = Math.max(findMax(pobi[0]), findMax(pobi[1]));
  var maxCrong = Math.max(findMax(crong[0]), findMax(crong[1]));

  if (maxPobi > maxCrong) answer = 1;
  else if (maxPobi === maxCrong) answer = 0;
  else answer = -1;

  return answer;
}

module.exports = problem1;
