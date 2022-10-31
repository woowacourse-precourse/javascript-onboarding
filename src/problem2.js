const test_foo = (text_input) => {  
  for (var i = 0; i < text_input.length-1; i++){
    if (text_input[i] === text_input[i+1]){
      return [true, text_input.slice(0, i)+text_input.slice(i+2, text_input.length)]
    }
  }
  return [false, null]
}

function problem2(cryptogram) {
  var answer;
  while (true){
    temp = test_foo(cryptogram)
    if (temp[0]){
      cryptogram = temp[1]
    } else if (temp[0] == false) {
      break
    }     
  }
  answer = cryptogram;
  return answer;
}

module.exports = problem2;
