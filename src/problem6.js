function problem6(forms) {
  
  var answer = [];

  let crew = [];
  let sameNickCrew = []; // 연속 닉네임을 가진 크루 배열
  let sameNick = []; // 연속된 글자
  let nameSplit = []; 

  for (let i = 0; i < forms.length; i++) {
    crew[forms[i][1]] = forms[i][0];
  }

  // 연속된 같은 글자 뽑기 
  for(i = 0; i < forms.length; i++) {
    var nick = forms[i][1]; // 닉네임만 뽑음
  
    for( j = 0; j < nick.length - 1 ; j++) {
      var slice = nick.substr(j,2);
      
      if(nameSplit.includes(slice)) {
        sameNickCrew.push(nick);
        sameNick.push(slice);
      } else {
        nameSplit.push(slice);
      }
    }
  }

  // 현재 sameNickCrew 배열 안에 첫 타겟 크루 index 뽑기
  let firstSame = forms.findIndex((arr) => arr[1] === sameNickCrew[0]);
  // 첫 닉네임 이전 값에 연속 값 있는지 확인 
  for (i = 0; i < firstSame; i++){
    let nick = forms[i][1];
    for (j = 0; j < nick.length - 1; j++){
      let slice = nick.substr(j, 2);
      if (sameNick.includes(slice)) {
        sameNickCrew.push(nick);
      }  
    }

  }

  // 닉네임에 대응되는 이메일 뽑기

  // 오름차순

}

module.exports = problem6;
