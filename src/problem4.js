function problem4(word) {
  var answer;

  answer = "";

  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"  
  var lower = "abcdefghijklmnopqrstuvwxyz"
  
  for(i = 0; i < word.length; i++) {  //i => I love you
    for(j = 0; j < 26; j++){          //j => 대소문자 인덱스
      //대문자 인덱스 확인
      if(word[i] === upper[j]) {      //ex) word의 'I'에 인덱스 추출
        answer += upper[25-j];
        console.log("upper : " + answer);
      }//소문자 인덱스 확인
      if(word[i] === lower[j]) {
        answer += lower[25-j];
        console.log("lower : " + answer);
      }
    }
    //공백 처리
    if(word[i] == " "){
      answer += " ";
      console.log("spacing : " + answer);
    }
  }
  
  return answer;
}

module.exports = problem4;
