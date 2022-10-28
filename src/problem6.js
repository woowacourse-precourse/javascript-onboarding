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