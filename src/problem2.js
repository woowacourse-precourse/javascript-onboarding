class Stack{
  constructor(){
    this.stack = [];
  }
  push(value){
    this.stack.push(value);
  }
  pop(){
    return this.stack.pop();
  }
  peek(){
    return this.stack[this.stack.length - 1];
  }
  isEmpty(){
    if(this.stack.length == 0) return true;
    return false;
  }
  reverse(){
    return this.stack.reverse();
  }
  join(){
    return this.stack.join("");
  }
}

function problem2(cryptogram) {
  var answer = "";
  let inputLen = cryptogram.length;
  const stack = new Stack();
  for(let i = inputLen - 1; i >= 0; i--){
    if(stack.isEmpty() || (cryptogram[i] != stack.peek())){
      stack.push(cryptogram[i]);
    }
    else if(cryptogram[i] == stack.peek()){
      decipher(cryptogram[i], stack);
    }
  }
  if(!stack.isEmpty()){
    stack.reverse();
    answer = stack.join();
  }
  return answer;
}

function decipher(crypto, stack){
  while(!stack.isEmpty() && crypto == stack.peek()){
    stack.pop();
  }
}

module.exports = problem2;
