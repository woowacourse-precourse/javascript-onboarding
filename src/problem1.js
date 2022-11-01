function is_vaild_input(pobi, crong){
  let i = 0;
  while (i < 2){
    if (pobi[i] == 0 || pobi[i] == 400 || crong[i] == 0 || crong[i] == 400){
      return (0);
    }
    i++;
  }
  if (pobi[0] % 2 != 1 || crong[0] % 2 != 1){
    return (0);
  }
  if (pobi[1] % 2 != 0 || crong[1] % 2 != 0){
    return (0);
  }
  if ((pobi[0] + 1) != pobi[1]){
    return (0);
  }
  if ((crong[0] + 1 != crong[1])){
    return (0);
  }
  else {
    return (1);
  }
}

function sep(array) {
  left_plus = plus(array[0]);
  right_plus = plus(array[1]);
  left_mul = mul(array[0]);
  right_mul = mul(array[1]);
  return (Math.max(left_plus, right_plus, left_mul, right_mul));
}

function plus(num) {
  let nb;
  for (let num = 0; num > 0; num/10) {
    nb += num % 10;
  }
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
