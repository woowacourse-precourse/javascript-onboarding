function problem6(forms) {
  var answer= new Array();
  let visited = new Array(forms.length);
  visited.fill(0);
  for(let i=0; i<forms.length; i++){
    let names = forms[i][1];
    if(visited[i]==1) continue;

    for(let j=0; j<names.length-1; j++){
      let cutname = names.substr(j,2);
      for(let k=i+1; k<forms.length; k++){
          let finds = forms[k][1].indexOf(cutname);
          if(finds!=-1){
            visited[k]=1;
            visited[i]=1;
          }
        //    console.log("answer is : " +finds+" " + names +" "+forms[k][1]);
      }
    }
  }

  for(let i=0; i<forms.length; i++){
    if(visited[i]==1)
    answer.push(forms[i][0]);
  }
  answer.sort();
  for(let i=0; i<answer.length; i++){
   // console.log(answer[i]);
  }
  return answer;
}

module.exports = problem6;
