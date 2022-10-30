function problem3(number) {
  var answer = 0;
  let arr = Array.from({length: number}, (v, i) => i+1);
  let ind = 0;

  for(i in arr){
    let v = Array.from(String(arr[ind]));
    for (i in v){
      if (v[i] == '3' || v[i] == '6' || v[i] == '9'){
        answer++;
      };
    }
    ind++;
  };

  return answer;
}


module.exports = problem3;
