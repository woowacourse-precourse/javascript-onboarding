function problem1(pobi, crong) {

  //예외사항 기능
  const exceptions = (page) => {
    const minPage = 1;
    const maxPage = 400;
  
    if (page[0] < minPage || page[1] > maxPage) return false;
    if (page[0] !== page[1] - 1) return false;
    if (page.length !== 2) return false;
    return true;
  }

  //페이지 번호의 각 자리 숫자를 모두 더하는 기능
  const addNum = (num) => {
     let numStr = num.toString().split("");
     let add = numStr.reduce((prev, curr) => prev += Number(curr), 0);
     return add
  }
}

problem1([97, 98], [197, 198])
problem1([131, 132], [211, 212])
problem1([99, 102], [211, 212])
// module.exports = problem1;
