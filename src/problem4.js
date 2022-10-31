function problem4(word) {
  var answer ="";

  var forward = "AaBbCcDdEeFfGgHhIiJjKkLlMmnNoOpPqQrRsStTuUvVwWxXyYzZ";
  var reverse = forward.split('').reverse().join('');

  for(var i = 0; i<word.length; i++){
    if(!(word[i].match(/[a-z|A-Z]/))){
      answer = answer + word[i];
    }else{
      answer = answer + reverse[forward.indexOf(word[i])];
    }
  }
  return answer;
}

module.exports = problem4;
