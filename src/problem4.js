function problem4(word) {
  var answer;
  // 제한사항
  if (word.length < 1 || word.length > 1000) return;
  answer = makeOpposite(word);
  return answer;
}

// word 청개구리 사전을 따라 반대로 변환 
function makeOpposite(word) {
  // 기존 알파벳 사전
  const dictionay = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );
  // 반대로 뒤집은 청개구리 알파벳 사전
  const oppositeDictionay = dictionay.slice().reverse();

  let arr = separateString(word.slice());
  let result = [];

  // idx 뽑기
  for (let i = 0; i < arr.length; i++) {
    result.push(dictionay.indexOf(arr[i].toUpperCase()));
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] === -1) {
      result.splice(i, 1, arr[i]);
    } else {
      if (arr[i] == arr[i].toLowerCase()) {
        result.splice(i, 1, oppositeDictionay[result[i]].toLowerCase());
      } else {
        result.splice(i, 1, oppositeDictionay[result[i]]);
      }
    }
  }
  return result.join("");
}

// 문자열을 배열로 변환
function separateString(string) {
  let array = string.split("");
  return array;
}
module.exports = problem4;
