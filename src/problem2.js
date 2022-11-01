function decode(password) {
  var result = "";
  let arr = [...password];
  let len = arr.length;
  var flag = false;
  var now = "";
  var post = "";

  for (let i=0; i<len-1; i++){
    now = arr[i];
    post = arr[i+1];
    if (now !== post){
      if (flag === false){
        result += now;
      }
      else {
        flag = false;
      }
    }
    else {
      flag = true;
    }
    if(i === len-2 && flag === false){
      result += post
    }
  }
  

  return result;
}

function problem2(cryptogram) {
  var answer = cryptogram;
  var result;
  while (true){
    if (answer.length <= 1){
      break
    }
    result = decode(answer);
    if (result === answer){
      break
    }
    else{
      answer = result;
    }
  }
  
  return answer;
}

module.exports = problem2;
