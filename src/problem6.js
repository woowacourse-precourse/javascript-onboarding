function problem6(forms) {
  var answer=[]

  for(var i=0;i<forms.length;i++){
    for(var a=0;a<forms[i].length-1;a++){
      var li=forms[i][1].substr(a,2)

      for(var c=0;c<forms.length;c++){
        if((forms[c][1].indexOf(li)!=-1)&&(i!=c)){
          answer.push(forms[c][0])
        }
      }
    }

  }
  var set = new Set(answer);
  answer= [...set];
  answer=answer.sort()
  return answer;
}

module.exports = problem6;
