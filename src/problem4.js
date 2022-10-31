function problem4(word) {
  var answer;

  var motherDictionary = new Array("a", "b", "c", "d", "e", "f", "g", "h",
   "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x" ,"y", "z");
  var frogDictionary = new Array("z", "y", "x", "w", "v", "u", "t", "s",
  "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c" ,"b", "a");

  //word 문자열 분리
  let words = word.split("");

  //모두 다 소문자로 변환
  for(let i=0; i<words.length; i++){
    words[i] = words[i].toLowerCase();
  }

  //한 문자씩 변환
  let index = 0;
  while (index <= words.length) {
    for(let i=0; i<motherDictionary.length; i++) {
      if(words[index] == motherDictionary[i]) {
        words[index] = frogDictionary[i];
        break;
      }
    }
    index++;
  }
  
  //첫 문자 대문자로 변환
  words[0] = words[0].toUpperCase();
  //문자열 합치기
  answer = words.join('');
  
  return answer;
}

module.exports = problem4;
