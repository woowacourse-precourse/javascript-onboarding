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

const checkPage = (page) => {
  let [leftPage, rightPage] = page;
  if (leftPage <= 1 || rightPage >= 400) return 0; //1-400 사이 수
  else {
    if (leftPage % 2 == 0) return 0; // 왼쪽 페이지 홀수
    else {
      if (leftPage + 1 != rightPage)
        return 0; // 왼쪽 페이지 + 1 = 오른쪽 페이지
      else return 1;
    }
  }
};

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
