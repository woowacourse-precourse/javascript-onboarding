function problem4(word) {
  let answer = "";

  let dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
  let oppositeDictionary = 'ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba ';

  // 매개변수로 전달된 문자열을 청개구리 사전을 참고하여 반대로 변환하는 기능 구현
  for (let i = 0; i < word.length; i++) {
    let b = dictionary.indexOf(word[i]);
    answer = answer.concat(oppositeDictionary[b]);
  }

  return answer;
}

module.exports = problem4;