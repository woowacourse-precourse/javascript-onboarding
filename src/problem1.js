function problem1(pobi, crong) {
  if(pobi[1] - pobi[0] != 1 || crong[1] - crong[0] != 1) return -1;
  if(pobi[0]%2 != 1 || crong[0]%2 != 1) return -1;
  if(pobi[0] < 1 || crong[0] < 1) return -1;
  if(pobi[1] > 400 || crong[1] > 400) return -1;

  var answer;
  var pb_ans, cr_ans;

  var pb = pobi[0].toString() + pobi[1].toString();
  var pb_plus = 0, pb_times = 1;

  for(var i = 0; i < pb.length; i++){
    pb_plus += parseInt(pb[i]);
    pb_times *= parseInt(pb[i]);
  }
  if(pb_plus > pb_times) pb_ans = pb_plus;
  else pb_ans = pb_times;

  var cr = crong[0].toString() + crong[1].toString();
  var cr_plus = 0, cr_times = 1;
  for(var i = 0; i < cr.length; i++){
    cr_plus += parseInt(cr[i]);
    cr_times *= parseInt(cr[i]);
  }
  if(cr_plus > cr_times) cr_ans = cr_plus;
  else cr_ans = cr_times;

  if(pb_ans == cr_ans) answer = 0;
  else if (pb_ans > cr_ans) answer = 1;
  else answer = 2;

  return answer;
}

module.exports = problem1;
