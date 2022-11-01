function problem6(forms) {
  let answer;
  let nickname=[];
  let email=[];
  let double=[];
  let doubleNickname= [];

  for(i=0;i<forms.length;i++){
    nickname.push(forms[i][1])
    for(j=0;j<forms[i][1].length-1;j++){
      double.push(forms[i][1].substring(j,j+2));
    }
  }

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
}

  var x=findDouble(double);
  for(let i=0;i<forms.length;i++){
    var nick=forms[i][1].toString()
    if(nick.includes(x)){
      doubleNickname.push([forms[i][0],forms[i][1]])
    }
    }
    doubleNickname.sort();
    answer=doubleNickname;
  
}

module.exports = problem6;
