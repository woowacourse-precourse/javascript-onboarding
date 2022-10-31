function problem1(pobi, crong) {
  let page = validation(pobi, crong); //예외처리
  if (!page) {
    return -1;
  }
  let pobiPageSum = sum(pobi);
  let crongPageSum = sum(crong);

  let pobiPageMul = mul(pobi);
  let crongPageMul = mul(crong);

  let pobi_max_score = mixScore(pobiPageSum, pobiPageMul);
  let crong_max_score = mixScore(crongPageSum, crongPageMul);

  if (pobi_max_score > crong_max_score) {
    //포비승
    return 1;
  } else if (pobi_max_score < crong_max_score) {
    //크롱승
    return 2;
  } else if ((pobi_max_score = crong_max_score)) {
    //무승부
    return 0;
  }
}
//예외처리 함수
function validation(pobi, crong) {
  let result = true;

  // [null,1],[400,null]
  if (
    pobi[0] == null ||
    crong[0] == null ||
    pobi[1] == null ||
    crong[1] == null
  ) {
    return false;
  } else if (1 != pobi[1] - pobi[0]) {
    return false;
  } else if (1 != crong[1] - crong[0]) {
    return false;
  } else {
    return result;
  }
}
// 덧셈함수
function sum(value) {
  let leftSplit = value[0].toString().split("");
  let rightSplit = value[1].toString().split("");

  return mixScore(SumValue(leftSplit), SumValue(rightSplit));
}
//곱셈함수
function mul(value) {
  let leftSplit = value[0].toString().split("");
  let rightSplit = value[1].toString().split("");
  return mixScore(MulValue(leftSplit), MulValue(rightSplit));
}
function mixScore(a, b) {
  return a > b ? a : b;
}
function SumValue(value) {
  result = 0;
  for (let a of value) {
    result += Number(a);
  }
  return result;
}
function MulValue(value) {
  result = 1;
  for (let a of value) {
    result *= Number(a);
  }
  return result;
}
let input = {
  pobi: [
    [97, 98],
    [131, 132],
    [99, 102],
  ],
  crong: [
    [197, 198],
    [211, 212],
    [211, 212],
  ],
};
for (let i = 0; i < input.pobi.length; i++) {
  console.log(`#${i + 1} ${problem1(input.pobi[i],input.crong[i])}`);
}
module.exports = problem1;