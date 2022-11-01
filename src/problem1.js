function problem1(pobi, crong) {
  let answer = 0;

  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }

  const [pobiScore, crongScore] = [pobi, crong].map((player) => {
    const [first, second] = player;

    const firstScore = getScore(first);
    const secondScore = getScore(second);

    return Math.max(firstScore, secondScore);
  });

  if (pobiScore > crongScore) {
    answer = 1;
  } else if (pobiScore < crongScore) {
    answer = 2;
  }

  return answer;
}

function getScore(num) {
  const addedScore = num
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);

  const multipiedScore = num
    .toString()
    .split("")
    .reduce((acc, cur) => acc * Number(cur), 1);

  return Math.max(addedScore, multipiedScore);
}

module.exports = problem1;
