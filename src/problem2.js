function problem2(cryptogram) {
  var answer;

  newstr='';
  var str= String(cryptogram);
  var count=0;
  answer='';

  //중복문자를 제거
  do{
    count=0;
    for(let i=0; i<str.length; i++){
      if(str[i]!=str[i+1]){
        newstr=newstr+str[i]
      }
      else{
        i++
        count++
      }
    }
    var str=newstr;
    newstr='';
  }while(count>0)

  answer=str;
  return answer;
}

module.exports = problem2;
