function problem2(cryptogram) {
  var answer = "";
  const cryptogram_arr = cryptogram.split('');
  stack = [];



  for(let i = 0; i < cryptogram.length; i++){
    if (stack==[]){
      stack.push(cryptogram_arr[i]);
    }else if (stack[stack.length - 1] == cryptogram_arr[i]){
      stack.pop();
    }else if (stack[stack.length - 1] != cryptogram_arr[i]){
      stack.push(cryptogram_arr[i]);
    } 
    }
  

  answer = stack.join('');
    
  return answer;
}



module.exports = problem2;