// 제일 높은 숫자 도출하는 함수.
function getBestNumber(number) {
  number = number.toString().split("").map(Number);

  let add = 0;
  let multiple = 1;
  number.forEach((v) => {
    add += v;
    multiple *= v;
  });
  return add > multiple ? add : multiple;
}

function problem1(pobi, crong) {
  // 이상한 인풋값 아닌지 확인
  if (pobi[1] - pobi[0] === 1 && crong[1] - crong[0] === 1&& pobi[0] > 1 && crong[1] < 400) {
    let answer;

    const pobiLeft = getBestNumber(pobi[0]); // 포비 왼쪽 페이지 높은 수
    const pobiRight = getBestNumber(pobi[1]); // 포비 오른쪽 페이지 높은 수
    const crongLeft = getBestNumber(crong[0]); // 크롱 왼쪽 페이지 높은 수
    const crongRight = getBestNumber(crong[1]); // 크롱 오른쪽 페이지 높은 수

    const pobiResult = pobiLeft > pobiRight ? pobiLeft : pobiRight; // 포비 제일 높은 수
    const crongResult = crongLeft > crongRight ? crongLeft : crongRight; // 크롱 제일 높은 수

    answer = pobiResult > crongResult ? 1 : pobiResult === crongResult ? 0 : 2; // 결과

    return answer;
  } else {
    // 이상한 인풋값인 경우.
    return -1;
  }
}

module.exports = problem1;
