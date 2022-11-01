function problem2(cryptogram) {
  var answer;
  answer="";
  let code=[];
  var i=0;
  code.push(cryptogram[i++]);
  while(i<cryptogram.length){
      let k=code.pop();
      let p=cryptogram[i];
      if(p==k){
          i++;
      }
      else{
        code.push(k);
        code.push(cryptogram[i++]);
      }
  }
  answer=code.join("");
  return answer;
}

module.exports = problem2;