const addEachDigit = (num) => {
  return String(num)
    .split("")
    .reduce((acc, cur) => Number(acc) + Number(cur));
};

const mulEachDigit = (num) => {
  return String(num)
    .split("")
    .reduce((acc, cur) => Number(acc) * Number(cur));
};

const calculatePageNumber = (page) => {
  const [leftPage, rightPage] = page;
  let addLeftNum, addRightNum;
  let mulLeftNum, mulRightNum;

  addLeftNum = addEachDigit(leftPage);
  addRightNum = addEachDigit(rightPage);
  mulLeftNum = mulEachDigit(leftPage);
  mulRightNum = mulEachDigit(rightPage);

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
  let pobiMaxNumber;
  let crongMaxNumber;

  pobiMaxNumber = findMaxNum(...calculatePageNumber(pobi));
  crongMaxNumber = findMaxNum(...calculatePageNumber(crong));

  if (checkPage(pobi) * checkPage(crong) == 0) answer = -1;
  else {
    if (pobiMaxNumber > crongMaxNumber) answer = 1;
    else if (pobiMaxNumber < crongMaxNumber) answer = 2;
    else if (pobiMaxNumber == crongMaxNumber) answer = 0;
  }

  return answer;
}

module.exports = problem1;
