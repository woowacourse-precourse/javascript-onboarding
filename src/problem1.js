function problem1(pobi, crong) {

  //예외사항 기능
  const exceptions = (page) => {
    const minPage = 1;
    const maxPage = 400;
  
    if (page[0] < minPage || page[1] > maxPage) return true;
    if (page[0] !== page[1] - 1) return true;
    if (page.length !== 2) return true;
    return false;
  }

  //페이지 번호의 각 자리 숫자를 모두 더하는 기능
  const addNum = (num) => {
    let numStr = num.toString().split("");
    let add = numStr.reduce((prev, curr) => prev += Number(curr), 0);
    return add;
  }

  //페이지 번호의 각 자리 숫자를 모두 곱하는 기능
  const mulNum = (num) => {
    let numStr = num.toString().split("");
    let mul = numStr.reduce((prev, curr) => prev *= Number(curr), 1);
    return mul;
  }

  //2~3 과정을 통해 나온 숫자를 비교해 더 큰 숫자를 구하는 기능
  const maxNum = (num) => {
    let Score = Math.max(addNum(num[0]), mulNum(num[0]), addNum(num[1]), mulNum(num[1]));
    return Score;
  }

  //4 과정에서 나온 숫자를 통해 결과 값을 구하는 기능
  if (exceptions(pobi) || exceptions(crong)) return -1;
  if (maxNum(pobi) > maxNum(crong)) return 1;
  if (maxNum(pobi) < maxNum(crong)) return 2;
  if (maxNum(pobi) == maxNum(crong)) return 0;
}

module.exports = problem1;
