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
  }

  return answer;
}

module.exports = problem6;
