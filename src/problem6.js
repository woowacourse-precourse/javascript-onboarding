function problem6(forms) {
  let answer = [];
  let email_set= new Set(); // 중복허용X
  let crew_num = forms.length;

  if (crew_num < 2){ // crew가 1명인 경우 종료
    return answer;
  }
  
  return answer;
}

function isOverlapNickname(crew1, crew2, forms){
  let str_to_search = '';
  nick1 = forms[crew1][1];
  nick2 = forms[crew2][1];

  for (let i=0; i<nick1.length-1; i++){
    str_to_search = nick1.substring(i, i+2);

    // nick1의 연속된 두 문자열이 nick2에 존재하는지 확인
    if(nick2.includes(str_to_search)){ 
      return true;
    } 
  }
  return false;
}

function sortEmailArray(email_set){
  let email_arr = Array.from(email_set);
  email_arr.sort(); // 문자열 오름차순 정렬
  return email_arr;
}

module.exports = problem6;
