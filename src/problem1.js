function problem1(pobi, crong) {
  let answer;

  if (!edgeCase(pobi) || !edgeCase(crong)) {
    return -1;
  }

  const pobiScore = Math.max(searchForMax(pobi[0]), searchForMax(pobi[1]));
  const crongScore = Math.max(searchForMax(crong[0]), searchForMax(crong[1]));

  if (pobiScore > crongScore) {
    answer = 1;
  } else if (pobiScore < crongScore) {
    answer = 2;
  } else {
    answer = 0;
  }

  return answer;
}

function edgeCase(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 1 || arr[i] >= 400) {
      return false;
    }

    if (
      i === 0 &&
      (arr[i] + 1 !== arr[i + 1] || !(arr[i] % 2) || arr[i + 1] % 2)
    ) {
      return false;
    }
  }
  return true;
}

function searchForMax(num) {
  num = num.toString();
  let [resultOfPlus, resultOfMultiple] = [0, 1];

  for (let i = 0; i < num.length; i++) {
    let number = Number(num[i]);
    resultOfPlus += number;
    resultOfMultiple *= number;
  }

  return Math.max(resultOfPlus, resultOfMultiple);
}

module.exports = problem1;

/**
 *
 * pobi, crong 공통 edge case => return -1
 *  1 < !(페이지 번호) < 400
 *  왼쪽 페이지 번호 + 1 !== 오른쪽 페이지 번호
 *  왼쪽 페이지 % 2 !== 1 || 오른쪽 페이지 % 2 !== 0
 *
 * 점수 구하기
 *  for each pobi & crong
 *    iterate arr[0]
 *      for each el => resultOfPlus += el
 *      for each el => resultOfMultiple *= el
 *      resultOfArr0 = Math.max(resultOfPlus, resultOfMultiple)
 *
 *    iterate arr[1]
 *      for each el => resultOfPlus += el
 *      for each el => resultOfMultiple *= el
 *      resultOfArr1 = Math.max(resultOfPlus, resultOfMultiple)
 *
 *  pobi > crong => return 1
 *  pobi < crong => return 2
 *  pobi === crong => return 0
 *
 */
