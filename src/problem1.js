function problem1(pobi, crong) {
  // 예외 사항
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }

  const pobi_score = Math.max(getScore(pobi[0]), getScore([pobi[1]]));
  const crong_score = Math.max(getScore(crong[0]), getScore([crong[1]]));
  let answer = -1;

  if (pobi_score > crong_score) {
    answer = 1;
  } else if (pobi_score < crong_score) {
    answer = 2;
  } else if (pobi_score === crong_score) {
    answer = 0;
  }
  
  return answer;
}

function getScore(page) {
  const str = page.toString();
  let add_score = 0;
  let mul_score = 1;
  for (let e of str) {
    add_score += Number(e);
    mul_score *= Number(e);
  }

  return Math.max(add_score, mul_score);
}

module.exports = problem1;