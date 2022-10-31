//아스키 코드를 활용하기로 함

const bigCode = "A".charCodeAt(0) + "Z".charCodeAt(0)
const smallCode = "a".charCodeAt(0) + "z".charCodeAt(0)

//예외사항
//word는 문자열
//word.length은 1~1000
//알파벳 이외의 문자는 변환x
//대문자는 대문자 소문자는 소문자로 변환
function except(word=""){
  if(typeof(word)!='string'){return -1;}
  if(1>word.length|| 1000<word.length){return -1;}
  return 0;
}

funtion action(word='')

function problem4(word="") {
  var answer;

  let e = except(word)
  if(e == -1){return -1}



  return answer;
}

module.exports = problem4;
