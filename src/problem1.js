function problem1(pobi, crong) {
  let answer;
  if (checkPageValidation(pobi) < 0 || checkPageValidation(crong) < 0) {
    answer = -1;
  } else {
    let pobiScore = Math.max(getAddedScore(pobi), getMultipliedScore(pobi));
    let crongScore = Math.max(getAddedScore(crong), getMultipliedScore(crong));
    answer = pobiScore > crongScore ? 1 : pobiScore === crongScore ? 0 : 2;
  }
  return answer;
}

function getAddedScore(pages) {
  return Math.max(
    String(pages[0])
      .split("")
      .reduce((acc, cur) => acc + +cur, 0),
    String(pages[1])
      .split("")
      .reduce((acc, cur) => acc + +cur, 0)
  );
}

function getMultipliedScore(pages) {
  return Math.max(
    String(pages[0])
      .split("")
      .reduce((acc, cur) => acc * +cur, 1),
    String(pages[1])
      .split("")
      .reduce((acc, cur) => acc * +cur, 1)
  );
}

function checkPageValidation(pages) {
  if (
    pages[0] < 1 ||
    pages[1] < 1 ||
    pages[0] > 400 ||
    pages[1] > 400 ||
    pages[1] - pages[0] !== 1
  )
    return -1;
  return 1;
}

module.exports = problem1;
