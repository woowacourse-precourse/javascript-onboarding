function problem1(pobi, crong) {
  let answer = 0;
  if (pobi % 2 === 0) {
    return -1
  }
  if (pobi[0] + 1 === pobi[1]) {
    if (crong[0] + 1 === crong[1]) {
      let max_pobi = 0;
      max_pobi = big_number(pobi);
      let max_crong = 0;
      max_crong = big_number(crong);
      if (max_pobi > max_crong) {
          answer = 1;
      }
      else if (max_pobi < max_crong) {
          answer = 2;
      }
      else {
          answer = 0;
      }
      return answer;
    }
  }
  answer = -1;
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