function problem3(number) {
  var answer = 0;
  for(var i =0; i<=number ; i++){
    var num_arr=i.toString().split('').map(x=>parseInt(x));
    if(num_arr.includes(3)||num_arr.includes(6)||num_arr.includes(9)){
      answer = answer + 1;
    }
  }
  return answer;
}

module.exports = problem3;
