function calculator(pages) {
  let pageResult = [];
  for (let page of pages) {
    let sum = 0;
    let time = 1;
    while (page > 0) {
      sum += page % 10;
      time *= page % 10;
      page = Math.floor(page / 10);
    }
    sum > time ? pageResult.push(sum) : pageResult.push(time);
  }
  return Math.max(...pageResult);
}
function problem1(pobi, crong) {
  var answer = [];
  answer.push(calculator(pobi), calculator(crong));
  return answer;
}

module.exports = problem1;
