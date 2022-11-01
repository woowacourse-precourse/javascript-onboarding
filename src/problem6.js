function problem6(forms) {
  
  let ans = new Set();
  for(let i = 0;i < forms.length;i++){
    for(let j = 0 ; j < forms.length; j++) {
      if(i === j) continue
      for(let start = 0; start < forms[i][1].length -2 ; start++){
        for(let end = 2 + start; end < forms.length ; end++){
          if(forms[j][1].indexOf(forms[i][1].substr(start,end)) !== -1){
            ans.add(forms[j][0]);
          }
        }
      }
    }
  }


  return Array.from(ans).sort();
}

module.exports = problem6;
