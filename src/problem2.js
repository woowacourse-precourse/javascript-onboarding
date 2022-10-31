//인접하는 문자가 없어질 때까지만 반복하면 되는듯
//입력값은 string
//결과값은 중복제거한 문자열

//입력값은 알파벳 소문자로만 이루어져있음
//1<= 입력값.length <=1000

function except(cryptogram=""){
  
  //string인지 아닌지 확인
  if(typeof(cryptogram) != "string"){return -1;}

  //length가 1미만 1000이상이면 -1
  if(cryptogram.length < 1 ||
    cryptogram.length > 1000){return -1;}

    //정규표현식 사용
    //a-z가 아닌 것이 있으면 -1
    let reg = /[^a-z]/g
    if(cryptogram.match(reg) != null){return -1}

    return 0;
  
}

function action(cryptogram=""){
  for (let i=0; i<(cryptogram.length-1); i++){


  }
    
  
}

function problem2(cryptogram="") {
  var answer;

  let e = except(cryptogram)
  if(e == -1){return -1;}

  return answer;
}

module.exports = problem2;
