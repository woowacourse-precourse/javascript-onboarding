function problem6(forms) {
  var answer;

  for(let i=0;i<forms.length;i++){
    let name=forms[i][1];
    for(let j=0;j<name.length-1;j++){
      if(name.length<3){
        break;
      }
      let overname=name.slice(i,i+2);
    }
  }
  return answer;
}

module.exports = problem6;
