function problem2(cryptogram) {
  var answer;
  let flag = false;
  while (!flag){
    let str = "";
    for(let i=0;i<cryptogram.length;i++){
      if (str.length > 0 || str[stack.length-1] === cryptogram[i]){
        str = str.slice(0,str.length - 1);
        flag = true;
        continue;
      }
      str += cryptogram[i];
    }
    cryptogram = str;
  }
  return answer;
}

module.exports = problem2;
