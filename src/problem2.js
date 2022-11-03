// 1. 주어진 문자열 배열로 변경
// 2. forEach문을 통해 현재의 값과 다음 값 및 이전 값 비교하여 다르면 임시 배열에 추가
// 3. 임시 리스트 완성 후 원본 리스트와 길이가 같으면 더 이상 중복된 값이 없으므로 while문 break
// 4. 다를 시 여전히 중복된 값이 존재 하므로 원본 리스트를 임시 리스트로 재할당
// 4. 배열 문자열 화

function problem2(cryptogram) {
  var answer;
  let flag = true;
  // List 화
  let cryptogramList = cryptogram.split("");

  // 값 비교 for문
  while (flag) {
    //임시 리스트 생성
    let tempList = [];

    // 순회하며 임시 리스트에 값 추가
    cryptogramList.forEach((data, index) => {
      if (
        data !== cryptogramList[index + 1] &&
        data !== cryptogramList[index - 1]
      ) {
        tempList.push(data);
      }
    });

    // 길이 비교 같다면 더이상 중복된 문자열이 없으므로 while문 중단
    if (cryptogramList.length === tempList.length) flag = false;

    //재할당
    cryptogramList = tempList;
  }
  //문자열 화
  answer = cryptogramList.join("");
  return answer;
}

module.exports = problem2;
