function problem6(forms) {
  var answer;
  var result = [];
  
  for(var n = 0; n < forms.length; n++) { 
    // 1. 크루 별 닉네임 부분 집합 구하기
    const [email, nickname] = forms[n]; // 기준 크루 : n
    var partion = new Set(); 
      
    for(var i = 0; i < nickname.length; i++) { // n의 부분 닉네임 구하기
      var temp = '';
      for(var j = i + 1; j <= nickname.length; j++) {
        temp = nickname.substring(i, j);
        if(temp.length >= 2) partion.add(temp); 
      }
    }

     // 2. n 제외한 크루 중 중복 있는지 체크
    for(var k = 0; k < forms.length; k++) {
      partion.forEach((part) => {
        if(k !== n && forms[k][1].includes(part)) result.push(forms[k][0]);
      }) 
    }
  }

  answer = new Set(result.sort());

  return answer;
}

module.exports = problem6;
