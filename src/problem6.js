function problem6(forms) {
  var answer = new Set(); //이메일 중복 허용X
  
  for (var index=0; index<forms.length-1; index++){
    let nowCrew = forms[index]; //현재 크루
    let nowEmail = nowCrew[0];
    let nowNickname = nowCrew[1];
    for(var i=0; i<nowNickname.length-1; i++){
      let nameSubstr = nowNickname.substr(i, 2); //현재 크루의 닉네임을 2음절씩 잘라 비교
      for (var compareIndex=index+1; compareIndex<forms.length; compareIndex++){ //(index+1)~마지막에 위치한 크루와 비교
        let compareCrew = forms[compareIndex];
        let compareEmail = compareCrew[0];
        let compareNickname = compareCrew[1];

        const flag = compareNickname.includes(nameSubstr); //다른 크루의 nickname에 해당 단어가 있는지 확인

        if(flag){
          answer.add(nowEmail)
          answer.add(compareEmail);
        }        
      }
    }
  }
  return answer;
}

module.exports = problem6;
