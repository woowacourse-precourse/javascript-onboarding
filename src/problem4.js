function problem4(word) {
  var answer;
  //워드를 배열로 변경
  let word_array = Array.from(word);
  //뒤집힌 문자를 담을 배열 생성
  let reverse_word = []
  word_array.map((element)=>{
    //배열에 담긴 문자를 아스키코드로 변경
    let char_code = element.charCodeAt(0)
    //대문자인 경우 리버스
    if(char_code >= 65 && char_code <= 90){
      char_code = 155 - char_code
    }
    //소문자인 경우 리버스
    if(char_code >= 97 && char_code <= 122){
      char_code = 219 - char_code
    }
    //알파벳 이외의 경우는 변환x
    //아스키코드 숫자 배열을 다시 문자로 변경
    reverse_word.push(String.fromCharCode(char_code));
  })
  //배열을 문자열로 변경
  answer = reverse_word.join("")
  return answer;
}

module.exports = problem4;
