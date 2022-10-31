function problem6(forms) {
  var answer;
  let overname;
  for(let i=0;i<forms.length;i++){
    let name=forms[i][1];
    for(let j=0;j<name.length-1;j++){
      if(name.length<3){
        break;
      }
      overname=name.slice(i,i+2);
    }
  }
  for(let i=0;i<overname.length;i++){
    for(let j=0; j<overname.length;j++){
      if((overname[i]==overname[j]&&!(i==k)){
        for(let k=0; k<forms.length;k++){
          if(forms[k][1]==overname[i]){
            answer=forms[k][0];
          }
        }
      }
    }
  }
  return answer;
}

module.exports = problem6;
