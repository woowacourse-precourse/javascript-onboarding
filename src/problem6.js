function problem6(forms) {
  var answer = [];
  var tmp = [];
  let nameMap = new Map();

  for(let i = 0;i < forms.length;i++){
    for(let j = 0;j < forms[i][1].length-1;j++){
      if(nameMap.has(forms[i][1].substr(j,2))){
        tmp.push(forms[i][0]);
        tmp.push(nameMap.get(forms[i][1].substr(j,2)));
      }
      else{
        nameMap.set(forms[i][1].substr(j,2),forms[i][0]);
      }
    }
  }
  answer = [...new Set(tmp)];
  answer.sort();
  return answer;
}

module.exports = problem6;
