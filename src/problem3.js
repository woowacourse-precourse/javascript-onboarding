function problem3(number) {
  // 제한사항: 숫자이자 1 이상 10000 이하
  if (Number(number) > 10000) {
    number = 10000;
  } else if (Number(number) < 1) {
    number = 1;
  }

  // 각 자릿수마다 3 6 9 추가
  // 1번처럼 floor 쓰거나 includes?써서 true면 추가 - filter?
  let firstString = "";
  // 1. 빈 문자열 추가 후 split()
  for (let i = 1; i <= number; i++) {
    firstString += i.toString();
  }
  // 2. 각 배열을 순회하며 문자열로 만든 후 includes하기
  let strToArr = firstString.split("");
  let filteredArr = strToArr.filter((el) => ["3", "6", "9"].includes(el));
  // 3. 3 6 9만 남은 배열의 길이 반환
  return filteredArr.length;
}

module.exports = problem3;
