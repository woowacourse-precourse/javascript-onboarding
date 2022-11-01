function problem6(forms) {
  var arr=new Array();
  for(var i=0; i<forms.length; i++){
    word=forms[i][1];
    for(var j=0; j<word.length-1;j++){
      var check=word.slice(j,j+2);
      for(var k=0; k<forms.length;k++){
        if(i==k)continue;
        if(same(check,forms[k][1])){
          arr.push(forms[k][0]);
          arr.push(forms[i][0]);
        }
      }  
    }
  }
  var set=new Set(arr);
  var answer=[...set];
  answer.sort();
  return answer;
}

function same(check,word){
  if(word.match(check)==check) return true;
  else return false;
}

module.exports = problem6;
