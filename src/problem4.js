function problem4(word) {
  var answer;
  let dictionary = [];
  let reversDictionary = [];
  let wordIndex = 0;
  let flogWord = [];
  new Array(26).fill().map((_, i) => {
    dictionary += String.fromCharCode(i + 97);
  });
  reversDictionary = dictionary.split("").reverse();
  console.log(dictionary, reversDictionary);

  word.split("").map((x) => {
    wordIndex = dictionary.indexOf(x.toLowerCase());
    flogWord.push(reversDictionary[wordIndex]);
  });
  console.log(flogWord.join());
  return answer;
}

module.exports = problem4;

// 기능 목록
// 1. 일반 사전과 청개구리 사전을 만든다.
// 2. 매개변수를 받았을 때, 그 문자가 일반 사전의 몇 번째 문자(index)인지 반환한다.
// 3. index를 청개구리 사전에서 찾아서 반환한다.
// 4. 예외 : 대문자는 대문자로 유지한다.
