function problem6(forms) {
  let answer = [];
  let email_set= new Set(); // 중복허용X
  let crew_num = forms.length;
  
  if (crew_num < 2){ // crew가 1명인 경우 종료
    return answer;
  }
  
  let overlaps = Array.from({length: crew_num}, () => 0); // 닉네임 중복여부 저장

  for (let i=0; i<crew_num; i++){ // i번 크루는 i+1~n번 크루와 비교
    for (let j=i+1; j<crew_num; j++){
      if (overlaps[i]==1 && overlaps[j]==1){ // 이미 목록에 있다면 다음으로 넘어가기
        continue;
      }
      if(isOverlapNickname(i, j, forms)){
        overlaps[i] = 1; // 닉네임 중복 체크
        overlaps[j] = 1;
        email_set.add(forms[i][0]); // 이메일목록에 추가
        email_set.add(forms[j][0]);
      }
    }
  }

  answer = sortEmailArray(email_set); // 이메일 목록 오름차순 정렬
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
