function problem1(pobi, crong) {
  var answer;
  return answer;
  pobiMax = makePage(pobi);
  crongMax = makePage(crong);
function multi(multiArray) {
  const result = multiArray.reduce(function (multi, cur) {
    return multi * cur;
  }, 1);
  return result;
function sum(sumArray) {
  const result = sumArray.reduce(function (sum, cur) {
    return parseInt(sum) + parseInt(cur);
  }, 0);
  return result;
}
function makePage(pocroArray) {
  const pobiCrongMax = [];
  pocroNumberLeft = pocroArray[0].toString().split("");
  pocroNumberRight = pocroArray[1].toString().split("");
  pobiCrongMax.push(sum(pocroNumberLeft));
  pobiCrongMax.push(sum(pocroNumberRight));
  pobiCrongMax.push(multi(pocroNumberLeft));
  pobiCrongMax.push(multi(pocroNumberRight));
  console.log(pobiCrongMax);
  return Math.max(...pobiCrongMax);
  //포비,크롱의 페이지를 각 숫자별로 배열로 만듬
}

module.exports = problem1;
