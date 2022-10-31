function problem4(word) {
  var answer = '';

  //1. word string 을 ascii 코드로 전환 
  let wordArray = word.split('');
  let convertAscii;


  wordArray.forEach(function(char){
    charAscii = char.charCodeAt(0);

    //2. ascii로 문자가 아닌 값 확인, 대소문자 구분, ascii 값 이용해서 문자 변환하기
    if (charAscii < 65 || (charAscii > 90 && charAscii < 97) || charAscii > 122 ){
      answer += char;
    }
    else{
      if (charAscii > 90){ //A~Z : 65~90 // ASCII > 90: lowercase
        convertAscii = 122 - (charAscii - 97);
      }
      else{
        convertAscii = 90 - (charAscii - 65);
      }
      answer += String.fromCharCode(convertAscii);

    }

  })

  return answer;
}

module.exports = problem4;
