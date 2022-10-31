function problem1(pobi, crong) {
  var answer;
  if (isException(pobi) || isException(crong)) answer = -1;
  else {
    const pobiMax = calcMax(pobi);
    const crongMax = calcMax(crong);
    if (pobiMax > crongMax) answer = 1;
    else if (pobiMax === crongMax) answer = 0;
    else answer = 2;
  }
  return answer;
}

const isException = (arr) => {
  if (arr.includes(1) || arr.includes(400)) return true;
  else if (arr[1] - arr[0] !== 1) return true;
  else return false;
};

const calcMax = (arr) => {
  let calc = [];
  arr = arr.map((e) => e.toString());
  arr.forEach((num) => {
    let sum = 0;
    let mul = 1;
    for (let i = 0; i < num.length; i++) {
      sum += parseInt(num[i]);
      mul *= parseInt(num[i]);
    }
    calc.push(sum);
    calc.push(mul);
  });
  const max = Math.max(...calc);
  return max;
};

module.exports = problem1;

// 기능 구현
// 1. 예외사항 사전 처리
// 2. 문자열 변환을 통해 좌 우 페이지의 최대값 찾기
// 4. 위의 과정을 통해 포비와 크롱의 비교

// 예외 사항
// 1. 좌우 페이지의 차이가 1 이상인 경우
// 2. [1,2] [399,400] 페이지가 나오는 경우
