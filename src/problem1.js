function problem1(pobi, crong) {
  let isRestrict = false;

  if (pobi.length !== 2 || crong.length !== 2) {
    isRestrict = true;
  } else if (
    pobi.includes(1) ||
    pobi.includes(400) ||
    crong.includes(1) ||
    crong.includes(400)
  ) {
    isRestrict = true;
  } else if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    isRestrict = true;
  }

  if (isRestrict) {
    return -1;
  } else {
    function checkBigger(num) {
      let sum = 0;
      let numStr = String(num);
      let mul = 1;
      for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i]);
        mul *= Number(numStr[i]);
      }
      return sum, mul;
    }

    function getBiggerNum(arr) {
      let bigNum = [];
      bigNum.push(checkBigger(arr[0]));
      bigNum.push(checkBigger(arr[1]));
      bigNum.sort((a, b) => b - a);
      console.log(bigNum);
      return bigNum[0];
    }
    let answer;

    const [pobiPage, crongPage] = [getBiggerNum(pobi), getBiggerNum(crong)];

    if (pobiPage == crongPage) {
      answer = 0;
    } else if (pobiPage > crongPage) {
      answer = 1;
    } else if (pobiPage < crongPage) {
      answer = 2;
    } else {
      answer = -1;
    }
    return answer;
  }
}
module.exports = problem1;
