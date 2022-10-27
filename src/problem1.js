const addAll = (arr) => {
  // 각 자리수 합
  return arr.reduce((total, num) => {
    return total + parseInt(num);
  }, 0);
};

const multiplyAll = (arr) => {
  // 각 자리수 곱
  return arr.reduce((total, num) => {
    return total * parseInt(num);
  }, 1);
};

const getMaxScore = (pages) => {
  if (
    Math.abs(pages[1] - pages[0]) != 1 ||
    pages[0] <= 1 ||
    pages[1] <= 1 ||
    pages[0] >= 400 ||
    pages[1] >= 400
  )
    // 문제 예외 처리
    return -1;

  const left_page = pages[0].toString().split(''); // 왼쪽 페이지 각 자리수를 배열로 만듦
  const right_page = pages[1].toString().split(''); // 오른쪽 페이지 각 자리수를 배열로 만듦
  const result = [];
  result.push(addAll(left_page));
  result.push(addAll(right_page));
  result.push(multiplyAll(left_page));
  result.push(multiplyAll(right_page));
  result.sort(); // 최댓값 구하기 위해 정렬
  return result.pop();
};

function problem1(pobi, crong) {
  try {
    const pobi_score = getMaxScore(pobi);
    const crong_score = getMaxScore(crong);

    if (pobi_score == -1 || crong_score == -1) return -1;

    if (pobi_score > crong_score) return 1;
    else if (pobi_score < crong_score) return 2;
    else return 0;
  } catch {
    // 입력값 오류 처리
    return -1;
  }
}

module.exports = problem1;
