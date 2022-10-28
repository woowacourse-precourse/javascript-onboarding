function problem4(word) {
  var answer;

  console.log("워드입력",word)

  
  //워드 단어 변수화
  let dictionary_big = {}
  let dictionary_small = {}

  
  for ( i = 65 ; i < 91 ; i ++ ) {
    dictionary_big[i] = 90 + 65 - i 
  }
  //대문자 변환 테이블 생성
  console.log(dictionary_big)
  
  for ( j = 97 ; j < 123 ; j ++ ) {
    dictionary_small[j] = 122 + 97 - j 
  }
  console.log(dictionary_small)
  //소문자 변환 테이블 생성

  for (i = 0 ; i <= word.length  ; i++) { 
    let word = word.charCodeAt(i)
  }
  console.log("아스키 워드 테스트",word)
  //입력 단어 아스키 코드 변환

  //변환 단어 알파벳으로 변환

  for (i = 0 ; i <= word.length  ; i++) { 
    let word = word.charCodeAt(i)
  }
  console.log(word)
  return answer;
}

module.exports = problem4;
