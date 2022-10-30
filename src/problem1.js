function problem1(pobi, crong) {
  if (isValid(pobi) || isValid(crong)) return -1;
  console.log(getMaxSum(pobi));
}

const isValid = (pageArr) => {
  return pageArr[1] - pageArr[0] !== 1;
};

const getMaxSum = (pageArr) => {
  const sumArr = [];
  pageArr.forEach((pageNum) =>
    sumArr.push(
      String(pageNum)
        .split("")
        .reduce((acc, curr) => acc + Number(curr), 0)
    )
  );
  return Math.max(...sumArr);
};

problem1([377, 378], [133, 134]);
module.exports = problem1;
