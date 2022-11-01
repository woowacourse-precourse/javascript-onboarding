//문제 4번 기능목록
//1. A - Z, B - Y 이런 식으로 반대로 매칭해주는 기능 필요 => matchBackward
//2. 문자열의 원소, 문자를 순회하면서 변환된 값을 새로운 문자열에 하나씩 추가해주기 
function matchBackward (AsciiNum){
  //대문자인 경우 (A의 아스키 코드 값은 65, Z는 90임.)
  //65 <=> 90, 66 <=> 89, 67 <=> 88...  
  if (AsciiNum >= 65 && AsciiNum <= 90){
    backwardAscii = String.fromCharCode(155-AsciiNum);
  } else if(AsciiNum >= 97 && AsciiNum <= 122) { //소문자인 경우
    //97 <=> 122, 98 <=> 121, 99 <=> 120..
    backwardAscii = String.fromCharCode(219-AsciiNum);
  }
  return backwardAscii; 
}

function problem4(word) {
  var answer = ""; //청개구리 규칙대로 변환된 결과 (result)
  for(i=0; i<word.length; i++){
    //console.log(word[i]);
    //==는 비교하는 객체의 타입이 달라도, 형변환하여 값이 같으면 true를 리턴
    //===는 객체 타입이 같고 값이 같을 때 true 리턴
    if (word[i]==" "){
      answer += " "; 
      //console.log("hihihihi");
    } else{
      var charAscii = word.charCodeAt(i); //아스키코드로 변환 (A -> 65)
      answer += matchBackward(charAscii); //청개구리 규칙에 따라 문자 변환
    }
    //console.log(answer);
  }
  return answer;
}

console.log(problem4("I love you"));
module.exports = problem4;