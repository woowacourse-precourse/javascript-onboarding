function problem6(forms) {
  var answer = [];
  for (var i = 0; i < forms.length; i++){ // 크루원 이름들
    var dup_name = [];
    var crew_name = forms[i][1];
    for (var j = 0; j < crew_name.length - 1; j++){ // 
      dup_name.push(crew_name[j] + crew_name[j+1])
    } // 크루원 이름을 2글자씩 붙혀서 모두 dup_name에 넣음
    var is_dup = false;
    for (var n = 0; n < forms.length; n++){
      if (n == i) continue; // 본인 이름 건너뛰기
      var other_crew_name = forms[n][1];
      for (var m = 0; m < other_crew_name.length - 1; m++){
        for (var k = 0; k < dup_name.length; k++){
          if (dup_name[k] == other_crew_name[m] + other_crew_name[m+1]){
            is_dup = true;
          }
        }
      }
    }
    if (is_dup == true){
      answer.push(forms[i][0]);
    }
  }
  //console.log(answer);
  return answer;
}


//var forms = [ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]
//problem6(forms)
module.exports = problem6;
