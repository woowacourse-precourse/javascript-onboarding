function problem6(forms) {
  var answer;

  var name1='';
  var name2='';
  var result=[];

  for(let i=0; i<forms.length; i++){
    for(let j=i+1; j<forms.length; j++){
      name1=forms[i][1];
      name2=forms[j][1];
      for(let m=0; m<name1.length; m++){
        for(let k=0; k<name2.length; k++){
          if(name1[m]==name2[k]){
            if((name1[m+1]!=null)&&(name2[k+1]!=null)&&(name1[m+1]==name2[k+1])){

              result.push(forms[i][0]);
              result.push(forms[j][0]);
              break;
            }
          }
        }
      }
    }
  }
  const newresult = [...new Set(result)];
  answer=newresult.sort();
  return answer;
}

module.exports = problem6;
