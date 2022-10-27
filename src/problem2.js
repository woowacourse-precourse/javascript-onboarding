function problem2(cryptogram) {
  var answer = checkDuplicate(cryptogram);
  return answer;
}
function checkDuplicate(cryptogram){
  let stack = [];
  stack.push(cryptogram[0]);
  let nextchar;
  
  for(let i = 1; i < cryptogram.length;i++){
    nextchar = cryptogram[i];
    let topElement = stack.length-1;
    if(stack[topElement]===nextchar){
      stack.pop();
    }
    else{
      stack.push(nextchar);
    }
  }
  return stack.join('');
}
module.exports = problem2;
