function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;

function continuousNicknames(forms){
  let nicknameList=forms.map((el)=>el[1].split(''))
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
    if(el[1].includes(list)){
      result.push(el[0]);
    }
  });

  result= new Set(result.sort());
  return [...result];
}