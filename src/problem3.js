// function problem3(number) {
//   let snap = 0;

//   // 1부터 number까지 증가하면서 369 게임 진행
//   for (let i = 1; i <= number; i++) {
//     const splitedNum = i.toString().split("");

//     for (let j = 0; j < splitedNum.length; j++) {
//       if (
//         splitedNum[j] === "3" ||
//         splitedNum[j] === "6" ||
//         splitedNum[j] === "9"
//       ) {
//         snap++;
//       }
//     }
//   }

//   return snap;
// }

/**
 * 입력받은 배열에 대햐여 3,6,9를 찾아 손뼉 카운트를 증가시키는 함수
 * @param {array} splitedNum 숫자를 각 자릿수로 쪼개서 만든 배열
 * @returns 해당 숫자에 대하여 손뼉을 친 횟수
 */
function check369(splitedNum) {
  let snap = 0;

  for (let j = 0; j < splitedNum.length; j++) {
    if (
      splitedNum[j] === "3" ||
      splitedNum[j] === "6" ||
      splitedNum[j] === "9"
    ) {
      snap++;
    }
  }

  return snap;
}

function problem3(number) {
  let snapSum = 0;

  // 1부터 number까지 증가하면서 369 게임 진행
  for (let i = 0; i <= number; i++) {
    const splitedNum = i.toString().split("");

    snapSum += check369(splitedNum);
  }

  return snapSum;
}

module.exports = problem3;
