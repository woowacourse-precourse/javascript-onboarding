function problem2(cryptogram) {
  var answer;
  var bool = true;
  var old_string = cryptogram;
  var before_length = old_string.length;


  while(bool){
    var new_string= "";
    for(var i = 0; i < before_length - 1; i++){
      if(old_string[i] == old_string[i+1]) i++;
      else new_string += old_string[i];
    }
    if(old_string[old_string.length-1] != old_string[old_string.length-2]) new_string += old_string[old_string.length-1];
    
    if(before_length == new_string.length){
      answer = new_string;
      bool = false;
    }
    else {
      old_string = new_string;
      before_length = new_string.length;
    }
  }
  return answer;  
}

module.exports = problem2;
