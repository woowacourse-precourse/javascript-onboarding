function problem1(pobi, crong) {
  // 예외 처리
  if (pobi.includes(1)) return -1;
  if (pobi.includes(400)) return -1;
  if (pobi[0] + 1 !== pobi[1]) return -1;
  if (crong.includes(1)) return -1;
  if (crong.includes(400)) return -1;
  if (crong[0] + 1 !== crong[1]) return -1;

  function getScore(pages) {
    return Math.max(
      Math.max(
        Array.from(pages[0].toString()).reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        ),
        Array.from(pages[0].toString()).reduce(
          (previousValue, currentValue) => previousValue * currentValue,
          1
        )
      ),
      Math.max(
        Array.from(pages[1].toString()).reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        ),
        Array.from(pages[1].toString()).reduce(
          (previousValue, currentValue) => previousValue * currentValue,
          1
        )
      )
    );
  }

  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);

  const answer = pobiScore > crongScore ? 1 : crongScore > pobiScore ? 2 : 0;

  return answer;
}

module.exports = problem1;
