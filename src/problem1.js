function problem1(pobi, crong) {
  var answer;

  if (
    pobi[0] % 2 !== 1 ||
    pobi[1] % 2 !== 0 ||
    pobi[1] - pobi[0] !== 1 ||
    pobi[0] < 3 ||
    pobi[0] > 397 ||
    pobi[1] < 4 ||
    pobi[1] > 398
  )
    return -1;
  if (
    crong[0] % 2 !== 1 ||
    crong[1] % 2 !== 0 ||
    crong[1] - crong[0] !== 1 ||
    crong[0] < 3 ||
    crong[0] > 397 ||
    crong[1] < 4 ||
    crong[1] > 398
  )
    return -1;

  let [pobiMax, crongMax] = [0, 0];

  for (let i = 0; i < 2; i++) {
    pobiMax = Math.max(calScore(pobi[i]), pobiMax);
    crongMax = Math.max(calScore(crong[i]), crongMax);
  }

  if (pobiMax > crongMax) answer = 1;
  else if (pobiMax < crongMax) answer = 2;
  else answer = 0;

  return answer;
}

function calScore(page) {
  let [sum, mul] = [0, 1];
  ("" + page).split("").forEach((num) => {
    sum += Number(num);
    mul *= Number(num);
  });
  return sum, mul;
}

module.exports = problem1;
