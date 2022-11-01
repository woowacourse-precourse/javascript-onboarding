function problem2(cryptogram1) {
  var answer;
  var stack=[]
  let cryptogram=cryptogram1.split('')
  const Delete=(element)=>{
    if(stack.length===0){
      stack.push(element)
    }else{
      stack_top=stack[stack.length-1];
      if(stack_top===element){
        stack.pop();
      }else{
        stack.push(element)
      }

    }
  }
  cryptogram.map(element=>Delete(element))
  answer=stack.join('');
  return answer;
}

module.exports = problem2;
