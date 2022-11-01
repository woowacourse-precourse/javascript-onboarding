function problem6(forms) {
  var answer;
  var res = [];
  var check;
  var cmp;
  var u=0;
  forms.forEach(element => {
      for(j=0;j<forms.length-2;j++){
          check = element[1][j] + element[1][j+1];
          for(k=0;k<forms.length;k++){
              cmp=forms[k][1]
              if (cmp==element[1]){
                  continue;
              }
              if (cmp.indexOf(check) != -1 && !res.includes(forms[k][0])){
                  res[u++]=forms[k][0];

              }
          }
      }
  });
  answer=res.sort();
  return answer;
}

module.exports = problem6;