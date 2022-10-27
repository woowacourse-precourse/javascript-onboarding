function problem4(word) {
  let answer;
  answer = swap(word).join("");
  return answer;
}

function swap(word) {
  let array = [...word]; //word에 담겨있는 글자를 하나하나 담는 배열
  let ascii; //ascii로 변환한 값을 담는 변수

  for(let i = 0; i < array.length; i++) {
    ascii = word.charCodeAt(i);
    if(ascii >= 65 && ascii <= 90) { //대문자
      if(ascii - 65 <= 90 - ascii)
        array[i] = String.fromCharCode(90 - (ascii - 65));
      else
        array[i] = String.fromCharCode(65 + (90 - ascii));
    }else if(ascii >= 97 && ascii <= 122) { //소문자
      if(ascii - 97 <= 122 - ascii)
        array[i] = String.fromCharCode(122 - (ascii - 97));
      else
        array[i] = String.fromCharCode(97 + (122 - ascii));
    }
  }

  return array;
}

module.exports = problem4;
