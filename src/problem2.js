function problem2(cryptogram) {
  var answer;

  let decodingStr = cryptogram;
  while(true){
    let stack = [];
    let char = '';

    for(const c of decodingStr){
      let top = stack[stack.length-1];
      if(top !== c && char !== c) stack.push(c);
      else{
        stack.pop();
        char = c;
      }
    }

    let decodedStr = stack.join("");
    if(decodedStr === decodingStr) return decodedStr;
    else {
      decodingStr = stack.join("");
    }    
  }
}

module.exports = problem2;
