function problem1(pobi, crong) {
  var answer;
  let [pobiMax, crongMax] = [0, 0];

  if (pageException(pobi) || pageException(crong)) return -1;

  for (let i = 0; i < 2; i++) {
    pobiMax = Math.max(calScore(pobi[i]), pobiMax);
    crongMax = Math.max(calScore(crong[i]), crongMax);
  }

  if (pobiMax > crongMax) answer = 1;
  else if (pobiMax < crongMax) answer = 2;
  else if (pobiMax === crongMax) answer = 0;

  return answer;
}

function pageException(pages) {
  if (
    pages[0] % 2 !== 1 ||
    pages[1] % 2 !== 0 ||
    pages[1] - pages[0] !== 1 ||
    pages[0] < 3 ||
    pages[0] > 397 ||
    pages[1] < 4 ||
    pages[1] > 398
  )
    return 1;
  return 0;
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
