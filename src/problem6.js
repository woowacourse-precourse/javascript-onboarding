function problem6(forms) {
  var answer=[];
  var dup_list=[];

  
  for(let i=0;i<forms.length;i++){
    let tar=forms[i][1];
    var tmp_list=[];
    for(let j=0;j<tar.length;j++){
      for(let x=j;x<tar.length;x++){
        if(j!==x){
          tmp_list.push(tar.substring(j,x+1))
        }
      }
    }
    dup_list.push(tmp_list);
  }

  for(let i=0;i<dup_list.length-1;i++){
    for(let j=0;j<dup_list[i].length;j++){
      let tar = dup_list[i][j];
      for(let k=0; k<forms.length;k++){
        if(i!==k){
          if(forms[k][1].includes(tar)){
            answer.push(forms[i][0]);
            answer.push(forms[k][0]);
          }
        }
      }
    }
  }

  answer = new Set(answer);
  answer= Array.from(answer);
  answer.sort();
  return answer;
}


module.exports = problem6;
