function duplicate(forms){
  var answer = [];
  var check = {};
  //두번 체크
  for(var i=0; i<forms.length; i++){
    check[i]=false;
  }
  //기능목록1-1: 연속된 글자 저장
  var name = new Set();
  var same="";
  for(var i=0; i<forms.length; i++){
    var email = forms[i][0];
    var nickname = forms[i][1];
    for(var j=0; j<nickname.length-1; j++){
      var tmp=nickname[j]+nickname[j+1];
      if(name.has(tmp)==false){
        name.add(tmp);
      }else{
        //기능목록1-2: 중복된 지원자 1차 저장
        answer.push(email);
        check[i]=true;
        same=tmp;
      }
    }
  }
  //기능목록1-3: 한번 더 체크(최초 사용자 2차 저장)
  for(var i in check){
    if(check[i]==false){
      for(var j=0; j<forms[i][1].length-1; j++){
        var tmp=forms[i][1][j]+forms[i][1][j+1];
        if(tmp==same){
          answer.push(forms[i][0]);
        }
      }
    }
  }
  return answer;
}
function problem6(forms) {
  var answer;
  //기능목록1: 같은 글자 포함된 목록 구하기
  answer = duplicate(forms);
  //기능목록2: 오름차순 정렬
  answer.sort();
  //기능목록3: 중복제거
  answer = new Set(answer);
  answer = [...answer];
  return answer;
}
module.exports = problem6;
