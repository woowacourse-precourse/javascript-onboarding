function problem3(number) {
  var answer;
  let answer_arr = [0];

  for(let i=1; i<=10000; i++){
    let cnt = 0;
    const int_to_str = String(i);
    for(let j=0; j<int_to_str.length; j++){
      let num = int_to_str.charAt(j);
      if(num.match('3')) cnt++;
      else if(num.match('6')) cnt++;
      else if(num.match('9')) cnt++;
    }
    answer_arr.push(cnt + answer_arr[i-1]);
  }
  answer = answer_arr[number];
  return answer;
}

module.exports = problem3;
