function problem6(forms) {
  var answer;
  var nickname=[];
  var email=[];
  var double=[];
  var doubleNickname= [];

  for(i=0;i<forms.length;i++){
    nickname.push(forms[i][1])
    for(j=0;j<forms[i][1].length-1;j++){
      double.push(forms[i][1].substring(j,j+2));
    }
  }//닉네임 두글자씩 쪼개기

  function findDouble(arr){
  var distinct= new Set(arr);
  var filtered= arr.filter(item=>{
    if(distinct.has(item)){
      distinct.delete(item);
    }
    else
    { return item; }
  });
  return [...new Set(filtered)]
}//연속된 글자 추출

  var x=findDouble(double);
  for(let i=0;i<forms.length;i++){
    var nick=forms[i][1].toString()
    if(nick.includes(x)){
      doubleNickname.push([forms[i][0],forms[i][1]])
    }
    }//연속된 글자가 포함된 닉네임,이메일 반환

    doubleNickname.sort();//오름차순 정렬

    answer=doubleNickname;

  return answer;
}


module.exports = problem6;
