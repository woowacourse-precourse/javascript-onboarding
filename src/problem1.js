// 기능 요구 사항
// - [o] 왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
// - [o] 오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
// - [o] 위 과정에서 가장 큰 수를 본인의 점수로 한다.
// - [o] 점수를 비교해 높은 사람이 게임의 승자가 된다.
//   - [o] 포비가 이기면 1, 크롱이 이기면 2, 무승부면 0, 그 외 -1을 return 한다.
// 예외사항
// - [o] 오른쪽 페이지 수에서 왼쪽 페이지 수를 빼면 그 값은 1이다.
// - [o] 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수이다.
// - [o] 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다. (덮개-0, 401-덮개)

function problem1(pobi, crong) {
  if (isException(pobi) && isException(crong)) {
    const pobiMax = getMaxValue(pobi);
    const crongMax = getMaxValue(crong);
    return whoWinner(pobiMax, crongMax);
  } else {
    return -1;
  }
}

function isException(name) {
  if (name[1] - name[0] != 1) {
    return 0;
  }
  if ((name[0] % 2 == 0) || (name[1] % 2 != 0)) {
    return 0;
  }
  if (name[0] < 1 || name[1] > 400) {
    return 0;
  }
  else {
    return 1;
  }
}

function getMaxValue(name) {
  let maxValue = 0;
  for (let i = 0; i < name.length; i++) {
    let plus = 0;
    let mult = 1;

    let str = name[i].toString();
    for (let j = 0; j < str.length; j++) {
      plus += Number(str[j]);
      mult *= Number(str[j]);
    }
    if (maxValue < plus) {
      maxValue = plus;
    }
    if (maxValue < mult) {
      maxValue = mult;
    }
  }
  return maxValue;
}

function whoWinner(pobi, crong) {
  if (pobi > crong) {
    return 1
  } else if (pobi < crong) {
    return 2;
  } else if (pobi === crong) {
    return 0;
  } else {
    return -1;
  }
}

const pobi = [131, 132];
const crong = [211, 212];
console.log(problem1(pobi, crong));
module.exports = problem1;
