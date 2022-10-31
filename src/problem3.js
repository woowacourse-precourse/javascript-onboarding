//기능 구현 목록
// - number를 string배열로 변환하는 함수 생성
// - 3,6,9 포함 여부를 판단하는 함수 생성
// - 손뼉 회수 count

function problem3(number) {
  let answer = 0;
  const targetArr = ["3", "6", "9"];

  function createStringArr(number) {
    const changedNum = String(number);
    const resultArr = changedNum.split("");
    return resultArr;
  }

  function countTargetNum(originArr) {
    let targetCnt = 0;
    originArr.forEach((element) => {
      if (targetArr.includes(element)) {
        targetCnt += 1;
      }
    });
    return targetCnt;
  }

  for (let i = 1; i <= number; i++) {
    const currentArr = createStringArr(i);
    const currentCnt = countTargetNum(currentArr);
    answer += currentCnt;
  }

  return answer;
}

module.exports = problem3;
