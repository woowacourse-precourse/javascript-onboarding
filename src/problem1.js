function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] != 1 || crong[1] - crong[0] != 1) {
    return -1;
  }
  //더할떄
  let pobiPlus = Math.max(
    ...pobi.map((page) => {
      page = page + "";
      return page.split("").reduce((pre, cur) => {
        return Number(pre) + Number(cur);
      }, 0);
    })
  );

  let crongPlus = Math.max(
    ...crong.map((page) => {
      page = page + "";
      return page.split("").reduce((pre, cur) => {
        return Number(pre) + Number(cur);
      }, 0);
    })
  );
  //곱할떄
  let pobiMul = Math.max(
    ...pobi.map((page) => {
      page = page + "";
      return page.split("").reduce((pre, cur) => {
        return Number(pre) * Number(cur);
      }, 1);
    })
  );

  let croungMul = Math.max(
    ...crong.map((page) => {
      page = page + "";
      return page.split("").reduce((pre, cur) => {
        return Number(pre) * Number(cur);
      }, 1);
    })
  );

  let pobiOfScore = Math.max(pobiPlus, pobiMul);
  let crongOfScore = Math.max(crongPlus, croungMul);

  if (pobiOfScore > crongOfScore) {
    return 1;
  } else if (pobiOfScore < crongOfScore) {
    return 2;
  } else if (pobiOfScore == crongOfScore) {
    return 0;
  }
}
console.log(problem1([131, 132], [211, 212]));
module.exports = problem1;
