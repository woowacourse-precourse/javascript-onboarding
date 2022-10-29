function problem6(forms) {
  const userInfo = new Map();
  const nickMap = new Map();

  makeMaps(userInfo, nickMap, forms);
  const answer = findRepeatName(userInfo, nickMap);

  return answer;
}

function checkInputErr(email, nickName){
  const validType = (input) => typeof input === 'string'; //TypeError
  const validlength = (input,a,b) => a <= input.length && input.length < b; // RangeError
  const validEmail = (input) =>{
    const regex = /^[a-zA-Z0-9]+@email.com/; 
    return regex.test(input);
  }; 
  const validName = (input) =>{
    const regex = /^[ㄱ-ㅎ|가-힣]+$/;
    return regex.test(input);
  }

  if (!validType(email) || !validType(nickName)) return true;
  else if (!validlength(email,11,20) || !validlength(nickName,1,20)) return true;
  else if (!validEmail(email)) return true;
  else if (!validName(nickName)) return true;
  else return false;
}

function makeMaps(userInfo, nickMap, forms){
  
  for(let i=0; i<forms.length; i++){
    const [email, nickName] = forms[i];
    if(checkInputErr(email,nickName)) continue;

    userInfo.set(nickName, email);

    for(let i=0; i<nickName.length-1; i++){
      const key = nickName[i] + nickName[i+1];
      nickMap.has(key)? nickMap.set(key,nickMap.get(key)+1) : nickMap.set(key,1) 
    }
  }
}

function findRepeatName(userInfo, nickMap){

  const repeatName = [...nickMap.keys()].filter(key => nickMap.get(key) > 1);
  const userKeys = [...userInfo.keys()];
  const set = new Set();

  for(let i=0; i<repeatName.length; i++){
    const curRepeat = repeatName[i];
    for(let j=0; j<userKeys.length; j++){
      const curKey = userKeys[j];
      const curEmail = userInfo.get(curKey);
      if(set.has(curEmail)) continue;

      if(curKey.includes(curRepeat)){
        set.add(curEmail);
      }
    }
  }

  return [...set].sort();
}

console.log(problem6([["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"]]));

module.exports = problem6;
