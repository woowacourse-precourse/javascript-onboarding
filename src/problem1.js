function problem1(pobi, crong) {
  if (!isValidatePage(pobi) || !isValidatePage(crong)) return -1;
  const pobiScore = getMyScore(addPage(pobi), multiplyPage(pobi));
  const crongScore = getMyScore(addPage(crong), multiplyPage(crong));
  var answer = getWinner(pobiScore, crongScore);
  return answer;
}

/**
 * 두 페이지의 자리수를 모두 더한다
 * @param {Array<number>} page - 페이지가 들어있는 배열
 * @returns {number} 두 페이지 자리수를 모두 더한 값
 */
const addPage = (page) => {
  return (page[0].toString() + page[1].toString())
    .split("")
    .reduce((prev, cur) => prev + +cur, 0);
};

/**
 * 두 페이지의 자리수를 모두 곱한다
 * @param {Array<number>} page - 페이지가 들어있는 배열
 * @returns {number} 두 페이지 자리수를 모두 곱한 값
 */
const multiplyPage = (page) => {
  return (page[0].toString() + page[1].toString())
    .split("")
    .reduce((prev, cur) => prev * +cur, 1);
};

/**
 * 두 수를 비교하고 더 큰 수를 리턴한다
 * @param {number} addPageNumber - 두 페이지 자리수를 모두 더한 값
 * @param {number} multiplyPageNumber - 두 페이지 자리수를 모두 곱한 값
 * @returns {number} 더 큰 수
 */
const getMyScore = (addPageNumber, multiplyPageNumber) => {
  return addPageNumber > multiplyPageNumber
    ? addPageNumber
    : multiplyPageNumber;
};

/**
 * 우승자를 가려낸다
 * @param {number} pobiScore - pobi의 수
 * @param {number} crongScore - crong의 수
 * @returns {number} pobi가 더 크면 1, crong이 더 크면 0, 비기면 2
 */
const getWinner = (pobiScore, crongScore) => {
  if (pobiScore > crongScore) return 1;
  if (pobiScore === crongScore) return 0;
  return 2;
};

/**
 * 예외사항을 체크한다
 * @param {Array<number>} page - 페이지가 들어있는 배열
 * @returns {boolean} 예외사항이라면 false, 아니라면 true
 */
const isValidatePage = (page) => {
  if (page.length !== 2) return false;
  let leftPage = page[0],
    rightPage = page[1];
  if (leftPage !== +leftPage || rightPage !== +rightPage) return false;
  if (leftPage - rightPage !== -1) return false;
  if (leftPage < 1 || leftPage >= 400 || rightPage < 2 || rightPage > 400)
    return false;
  if (leftPage % 2 !== 1 || rightPage % 2 !== 0) return false;
  return true;
};

module.exports = problem1;
