//문자열 길이 제한 검사
function isWordLimit (num) {
  if(num>=1 && num<=1000) return true;
  else return false;
}

function problem4(word) {
  var answer;

  var motherDictionary = new Array("a", "b", "c", "d", "e", "f", "g", "h",
   "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x" ,"y", "z");
  var frogDictionary = new Array("z", "y", "x", "w", "v", "u", "t", "s",
  "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c" ,"b", "a");

  //word 문자열 분리
  let words = word.split("");

  if(isWordLimit(words.length)) {

    //한 문자씩 변환
    let index = 0;
    while (index <= words.length) {
      for(let i=0; i<motherDictionary.length; i++) {
        if(words[index] == motherDictionary[i]) {
          words[index] = frogDictionary[i];
          break;
        }
        else if(words[index] == motherDictionary[i].toUpperCase()) {
          words[index] = frogDictionary[i].toUpperCase();
          break;
        }
      }
      index++;
    }

    //문자열 합치기
    answer = words.join('');
    return answer;

  }
  else {
    console.log("길이가 1이상 1000이하인 문자열이어야 합니다.");
    return;
  }

}

module.exports = problem4;
