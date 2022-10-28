function problem6(forms) {
  var answer=answerEmailList(forms);
  if(!error(forms)){
    throw new Error('제한사항을 확인하세요.');
  }
  return answer;
}

module.exports = problem6;

function continuousNicknames(forms){
  let nicknameList=forms.map((el)=>el[1].split(''));
  let continuousArr=[];
  
  nicknameList.map((nickname)=>{
    for(let i=0; i<nickname.length; i++){
      if((nickname[i]+nickname[i+1]).length===2){
        continuousArr.push(nickname[i]+nickname[i+1]);
      }
    }
  });
  return continuousArr;
}

function overlapNicknames(forms){
  let map = new Map();
  let list=continuousNicknames(forms);
  let overlapList=[];
  for(let i=0; i<list.length; i++){
    map.set(list[i], (map.get(list[i]) || 0)+1);
  }
  for(let [key,value] of map){
    if(value>1)  overlapList.push(key);
  }
   return overlapList;
 }

 function answerEmailList(forms){
  let list=overlapNicknames(forms);
  let result=[];
  forms.map((el)=>{
    list.filter(x=>{
      if(el[1].includes(x)){
      return result.push(el[0]);
      }
    })
  });

  result= new Set(result.sort());
  return [...result];
}

function error(forms){
  for(let i=0; i<forms.length; i++){
    let email=forms[i][0];
    let domain=forms[i][0].split('@')[1];
    let name=forms[i][1];
    if(domain !== "email.com" || (email.length < 11 && email.length >= 20)){
      return false;
    }
    if(name.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,'').length!==0 || (name.length<1 || name.length>=20)){
      return false;
    }
  }
    if(forms.length<1 || forms.length>10000){
      return false;
  }
  return true;
}