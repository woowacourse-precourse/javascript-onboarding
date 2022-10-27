function problem3(number) {
  let numList = [];
  let totalCount = 0;

  for (let i = 1; i <= number; i++) {
    numList.push(i);
  }

  let numAll = ("" + numList).replace(/,/g, "");
  let countThree = numAll.match(/3/g).length;
  let countSix = numAll.match(/6/g).length;
  let countNine = numAll.match(/9/g).length;

  totalCount = countThree + countSix + countNine;

  return totalCount;
}

module.exports = problem3;
