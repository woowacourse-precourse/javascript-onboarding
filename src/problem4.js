function problem4(word) {
  // 대문자 , 소문자 사전 선언
  let Dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let dictionary = Dictionary.toLowerCase();
  // 빈배열 선언
  let result = [];
  for (let i = 0; i < word.length; i++) {
    // word값이 사전에 맞는 곳에 있는지 확인
    if (Dictionary.includes(word[i])) {
      //확인이 된 사전에 25에서 뺀 인덱스 값을 다시 사전의 인덱스에 맞는 값을 추출 후 배열에 푸시
      result.push(Dictionary.charAt(25 - Dictionary.indexOf(word[i])));
    } else if (dictionary.includes(word[i])) {
      result.push(dictionary.charAt(25 - dictionary.indexOf(word[i])));
    } else {
      // 빈배열이면 빈배열 푸시
      result.push(" ");
    }
  }
  // 결과 값을 join("")으로 다시 합쳐줌
  return result.join("");
}

module.exports = problem4;
