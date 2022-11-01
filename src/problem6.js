/*
 #기능 요구 사항
신청받은 닉네임 중 같은 글자가 연속적으로 포함 되는 
닉네임을 작성한 지원자의 이메일 목록을 return 하도록 solution 메서드를 완성.

1. 주어진 금액을 가장 큰 단위의 화폐부터 작은 단위의 화폐로 가장 많이 포함되도록 한다.

*/

function problem6(forms) {
    let answer;
  return answer;
}

/*닉네임의 중복 여부를 검사한다.*/
function compareNickname(nickname1, nickname2) {

  const EQUAL = -1;
  const BLANK = 0;

if(nickname1===nickname2){
    return EQUAL;
}

let subString = "";
let result="";

for(let i = 0; i <nickname2.length-1; i++) {

    subString = nickname2[i] + nickname2[i+1];

    if(nickname1.indexOf(subString) !== -1) {
        result = (nickname2);
    } 
}

if(result ===''){
    return BLANK;
}

return result;
}

module.exports = problem6;
