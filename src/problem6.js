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
  
  for(let i=0;i<overname.length;i++){
    for(let j=0; j<overname.length;j++){
      if(overname[i]==overname[j]&&!(i==j)){
        for(let k=0; k<forms.length;k++){
          if(forms[k][1].includes(overname[i])){
            temp.push(forms[k][0]);
          }
        }
      }
    }
  }
  let uniqueArr=[];
  temp.forEach((element)=>{
    if(!uniqueArr.includes(element)){
      uniqueArr.push(element);
    }
  });
  answer=uniqueArr.sort();
  return answer;
}

module.exports = problem6;
