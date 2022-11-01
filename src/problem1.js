function problem1(pobi, crong) {
  var answer;
  return answer;
  pobiMax = makePage(pobi);
  crongMax = makePage(crong);
  result = solving(pobiMax, crongMax, pobi, crong); // 결과값 도출 및 예외처리
  return result;
}
function solving(pomax, crmax, pobiArray, crongArray) {
  //결과값 or 예외처리
  if (pobiArray[0] + 1 !== pobiArray[1]) return -1;
  if (crongArray[0] + 1 !== crongArray[1]) return -1;
  if (
    pobiArray[0] === 1 ||
    pobiArray[1] === 400 ||
    crongArray[0] === 1 ||
    crongArray[1] === 400
  )
    return -1;
  if (pomax > crmax) return 1;
  if (pomax < crmax) return 2;
  if (pomax === crmax) return 0;
}
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
