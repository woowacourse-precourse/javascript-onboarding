function problem2(cryptogram) {
  var answer;
  let status = false;
  arrayCryptogram = [...cryptogram]
  for (let i = 0; i<=arrayCryptogram.length-1; i++){
    if(arrayCryptogram[i] == arrayCryptogram[i+1]){
      let count=1;
      let j=i;
      while(arrayCryptogram[j]==arrayCryptogram[j+1]){
          count++;
          j++;
      }
      arrayCryptogram.splice(i,count);
      i=j-2;
      status = false
    }
  }
  answer = arrayCryptogram.join("")
  return answer;
}

module.exports = problem2;
