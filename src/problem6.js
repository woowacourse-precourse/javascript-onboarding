function problem6(forms) {
  var answer=[];
  var temp=[];
  let overname=[];
  for(let i=0;i<forms.length;i++){
    for(let j=0;j<forms[i][1].length-1;j++){
      if(forms[i][1].length<3){
        break;
      }
      overname.push(forms[i][1].slice(j,j+2));
    }
  }

  return answer;
}

module.exports = problem6;
