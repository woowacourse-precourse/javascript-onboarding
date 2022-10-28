function wordChange(c){
  let mn;
  if(c===c.toUpperCase()){
    mn= c-'A';
    mn=25-mn;
    mn=mn+'A';
  }else{
    mn= c-'a';
    mn=25-mn
    mn=mn+'a';
  }
  return mn;
}

function getStr(w){
}

function problem4(word) {
  var answer;
  answer = getStr(word)
  return answer;
}

module.exports = problem4;
