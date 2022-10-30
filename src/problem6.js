const checkNick=(n1, n2)=>{
  let regex, check_str, test_n2;
  for(let i=0;i<n1.length-1;i++){
      check_str = `${n1[i]}${n1[i+1]}`;
      regex = new RegExp(check_str,'g');
      test_n2 = n2.replace(regex,'');
      if(test_n2!==n2){
          return true;
      }
  }
  return false;
}

function problem6(forms) {
  let result = [];
  let idx = count = 0;
  forms.sort((x,y)=>x[1].length-y[1].length);
  while(idx<forms.length-1){
      count = 0;
      for(let i=idx+1;i<forms.length;i++){
          if (checkNick(forms[idx][1],forms[i][1])){
              count += 1;
              if (result.indexOf(forms[i][0])<0){
                  result.push(forms[i][0]);
              }
          }
      }
      if (result.indexOf(forms[idx][0])<0 && count){
          result.push(forms[idx][0]);
      }
      idx+=1;
  }
  result.sort();
  return result;
}
module.exports = problem6;
