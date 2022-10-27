const add = (num) => {
  return String(num)
    .split("")
    .reduce((acc, cur) => Number(acc) + Number(cur));
};

const mul = (num) => {
  return String(num)
    .split("")
    .reduce((acc, cur) => Number(acc) * Number(cur));
};

const calculatePageNumber = (page) => {
  const [leftPage, rightPage] = page;
  let addLeftNum, addRightNum;
  let mulLeftNum, mulRightNum;

  addLeftNum = add(leftPage);
  addRightNum = add(rightPage);
  mulLeftNum = mul(leftPage);
  mulRightNum = mul(rightPage);

  console.log(addLeftNum);
  console.log(mulLeftNum);
  console.log(addRightNum);
  console.group(mulRightNum);

  return [addLeftNum, addRightNum, mulLeftNum, mulRightNum];
};

const findMaxNum = (num1, num2, num3, num4) => {
  return Math.max(num1, num2, num3, num4);
};

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
