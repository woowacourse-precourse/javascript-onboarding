function problem6(forms) {
  var answer = [];
  var substr = new Map();
  var tmp = [];
  for(var i = 0; i < forms.length; i++){
    if(forms[i][1].length > 1){
      // make substrings
      for(var j = 0; j < forms[i][1].length-1; j++){
        var str = forms[i][1][j] + forms[i][1][j+1];
        // if substring is already in map, add counts
        if(substr.get(str) != undefined){
          substr.set(str, substr.get(str)+1);
        }
        // else add new substring to map
        else{
          substr.set(str, 1);
        }
      }
    }
  }
  
  for(var i = 0; i < forms.length; i++){
    if(forms[i][1].length > 1){
      // check every substrings
      for(var j = 0; j < forms[i][1].length-1; j++){
        var str = forms[i][1][j] + forms[i][1][j+1];
        // if count in map is over 1, add e-mail to answer and break
        if(substr.get(str) > 1){
          answer.push(forms[i][0]);
          break;
        }
      }
    }
  }

  answer.sort();
  
  return answer;
}

module.exports = problem6;
