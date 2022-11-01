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
    }
    doubleNickname.sort();
    answer=doubleNickname;
    
  return answer;
}

console.log(problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]))

module.exports = problem6;
