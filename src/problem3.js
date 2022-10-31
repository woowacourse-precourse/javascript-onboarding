function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    const value = scanTarget(i);
    answer += value;
  }

  return answer;
}

const scanTarget = (number) => {
  let resultValue;
  const rNum = /3|6|9/g;
  const resultArray = [...String(number).matchAll(rNum)];
  resultValue = resultArray.length;

  return resultValue;
};

module.exports = problem3;

/*
 1. number이 주어지면
 2. 해당 숫자까지
 3. 숫자가 3, 6, 9를 포함하는 개수 count.

 - 3,6,9 숫자 찾는 함수


 3, 6, 9를 몇 개 가지고 있는지 판별하는 함수.
 count 추가해서 더하면 될 듯.
 P : 숫자 커지면 for문 너무 많이 돌아서 비효율적.
 S : 일단 구현하고 시간이 오래걸리면 공식으로 구현

 */
