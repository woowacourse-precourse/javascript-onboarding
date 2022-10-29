function problem6(forms) {
  if (forms.length < 1 || forms.length > 10000) {
    return "error : plz add length or minus length"
  }
  let arr = [];
  let answer = [];
    for(let i=0; i<forms.length; i++){
      answer[i] = Array.from(forms[i][1]); 
    }

    for(let j=1; j<forms.length; j++){
      for(h=0; h<answer.length-1; h++){
        if(answer[0][0]+answer[0][1] == answer[j][h]+answer[j][h+1])
        arr.push(forms[j][0]);
        
        else if(answer[0][1]+answer[0][2] == answer[j][h]+answer[j][h+1])
        arr.push(forms[j][0]);
      }
    }
    arr.push(forms[0][0]);
  
  return arr.sort();
}

module.exports = problem6;