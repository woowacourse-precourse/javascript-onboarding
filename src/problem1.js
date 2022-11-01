function problem1(pobi, crong) {
  let answer = 0;
  return answer;
}

function big_number(page_lst) {
  const answer = [];
  for (let num of page_lst) {
    let page_multiple = 1;
    let page_sum = 0;
    let text = num.toString();
    for (let n of text) {
      page_multiple *= Number(n);
      page_sum += Number(n);
    }
    answer.push(page_multiple);
    answer.push(page_sum);
  }
  return Math.max.apply(null,answer);
}
module.exports = problem1;
