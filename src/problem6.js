function problem6(forms) {
  var answer;
  var arr = [];
  for(var i = 0; i<forms.length-1; i++){
    for(var j = 1; j<forms.length-i;j++){
      if(checkStr(forms[i][1], forms[i+j][1])){
        arr.push(forms[i][0]);
        arr.push(forms[i+j][0]);
      }
    }
  }
  var set = new Set(arr);
  answer = [...set];
  answer.sort();
  return answer;
}

function checkStr(str1, str2){
  var result = false;
  for(var i = 0; i<str1.length-1;i++){
    if(str2.includes(str1.substring(i,i+2))) {
      result = true; break;
    }
  }
  return result;
}

module.exports = problem6;
