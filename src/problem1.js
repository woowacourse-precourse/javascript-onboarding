function problem1(pobi, crong) {
  var answer;
  function calculate(member) {
    let page = member;
    let sum = 0;
    let multiple = 1;
    // let right_page = member[1];
    do {
      sum += page % 10;
      multiple *= page % 10;
      page = Math.floor(page / 10);
    } while (page > 0);
    if (sum > multiple) {
      return sum;
    } else {
      return multiple;
    } // 자릿수를 모두 더하거나 곱해 그중 큰 수 return
  }
  function score(member) {
    const left_page = calculate(member[0]);
    const right_page = calculate(member[1]);
    if (left_page > right_page) {
      return left_page;
    } else {
      return right_page;
    }
  } // 왼쪽 페이지와 오른쪽 페이지 비교하여 score 정하기

  return answer;
}

//예외사항 - 왼쪽 페이지가 1 또는 399, 왼쪽페이지가 짝수, 오른쪽페이지 != 왼쪽페이지+1

module.exports = problem1;
