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
function exceptionHandler(pobi, crong) {
  if (
    pobi[1] - pobi[0] !== 1 ||
    crong[1] - crong[0] !== 1 ||
    pobi[0] === 1 ||
    crong[0] === 1 ||
    pobi[1] === 400 ||
    crong[1] === 400 ||
    pobi[0] % 2 === 0 ||
    crong[0] % 2 === 0 ||
    pobi[1] % 2 === 1 ||
    crong[1] % 2 === 1
  )
    return true;
}
function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
