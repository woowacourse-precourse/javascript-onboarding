/* 
  기능 목록
  1. 크루원 닉네임을 2개씩 잘라 중복 가능한 경우의 문자 개수 추출
  2. 크루원 목록을 돌며 중복 확인 후 중복되는 크루원 이메일 배열에 삽입
*/

function sliceString(crew, redundantCountMap) {
  for (let j = 0; j <= crew.length - 2; j++) {
    const sliceElement = crew.substr(j, 2);
    const sliceElementCount = redundantCountMap.get(sliceElement) || undefined;
    redundantCountMap.set(
      sliceElement,
      sliceElementCount ? sliceElementCount + 1 : 1
    );
  }
}

function checkRedundant(crew, redundantCountMap, resultArray) {
  for (let j = 0; j <= crew[1].length - 2; j++) {
    const sliceElement = crew[1].substr(j, 2);
    if (redundantCountMap.get(sliceElement) >= 2) {
      resultArray.add(crew[0]);
      return;
    }
  }
}

function problem6(forms) {
  const resultArray = new Set();
  const redundantCountMap = new Map();
  for (const crew of forms) {
    sliceString(crew[1], redundantCountMap);
  }
  for (const crew of forms) {
    checkRedundant(crew, redundantCountMap, resultArray);
  }
  return [...resultArray].sort();
}

module.exports = problem6;
