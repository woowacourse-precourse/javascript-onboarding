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

  return answer;
}

problem1();

module.exports = problem1;
