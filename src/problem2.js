function problem2(cryptogram) {
  var stack = []


  for(let i of cryptogram){
    if (stack.length == 0)
    {stack.push(i)}
    else if (stack.length != 0)
    {
      
      if(stack[stack.length-1] == i){
        stack.pop()
      }
      else if(stack[stack.length-1]!= i){
        stack.push(i)
      }
    }
  }

  return stack.join("")
}

module.exports = problem2;
console.log(problem2("browoanoommnaon"))
