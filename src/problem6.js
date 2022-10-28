function duplicate(forms){
  var answer = [];
  var check = {};
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
       
      }
    }
  }

  return answer;
}
function problem6(forms) {
  var answer;
  //기능목록1: 같은 글자 포함된 목록 구하기
  answer = duplicate(forms);

}
module.exports = problem6;
