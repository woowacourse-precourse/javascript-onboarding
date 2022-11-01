function problem6(forms) {
  var answer = [];

  let data = new Map();
  let dup = [];
  let except = [];
  
  for(var i = 0; i < forms.length; i++){
    for(var j = 0; j < forms[i][1].length - 1; j++){
      if(!dup.includes(forms[i][1].substr(j, j + 2))){
        dup.push(forms[i][1].substr(j, j + 2));
      }
    }
  }

  for(var i = 0; i < dup.length; i++){
    data.set(dup[i], 0);
  }

  for(var i = 0; i < forms.length; i++){
    for(var j = 0; j < dup.length; j++){
      if (forms[i][1].includes(dup[j])) data.set(dup[j], data.get(dup[j])+1);
    }
  }

  for (var [key, value] of data) {
      if(value > 1){
        except.push(key);
      }     
  }
  
  for(var i = 0; i < forms.length; i++){
    for(var j = 0; j < except.length; j++){
      if(forms[i][1].includes(except[j]) && !answer.includes(forms[i][0])) answer.push(forms[i][0]);
    }
  }

  
  return answer;
}

module.exports = problem6;
