function problem6(forms) {
  var answer= duplicateChecker(forms);
  return answer;
}

function duplicateChecker(forms) {
  let result = []
  let store = new Set();
  forms.forEach(([email,nickName])=>{
    for(let i = 0; i <nickName.length-1; i++ ){
      const wordOfNickName = nickName.slice(i,i+2);
      if(!store[wordOfNickName])
        store[wordOfNickName] = new Set([email]);
      else
        store[wordOfNickName].add(email);
    }
    for(let key of Object.keys(store))
      if(store[key].size> 1 ) 
        result.push(...store[key]);
  })
  return [...new Set(result)].sort();
}
module.exports = problem6;
