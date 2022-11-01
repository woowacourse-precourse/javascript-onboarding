function is_vaild_input(pobi, crong){
  let i = 0;
  while (i < 2) {
    if (pobi[i] < 0 || pobi[i] > 400 || crong[i] < 0 || crong[i] > 400) {
      return (false);
    }
    i++;
  }
  if (pobi.length != 2 || crong.length != 2) {
    return (false);
  }
  
  if (pobi[0] % 2 != 1 || crong[0] % 2 != 1) {
    return (false);
  }
  if (pobi[1] % 2 != 0 || crong[1] % 2 != 0) {
    return (false);
  }
  if ((pobi[0] + 1) != pobi[1]) {
    return (false);
  }
  if ((crong[0] + 1 != crong[1])) {
    return (false);
  }
  else {
    return (true);
  }
}

function max(array) {
  left_plus = plus(array[0]);
  right_plus = plus(array[1]);
  left_mul = mul(array[0]);
  right_mul = mul(array[1]);
  return (Math.max(left_plus, right_plus, left_mul, right_mul));
}

function plus(num) {
  let nb = 0;
  for (; num > 0; num = Math.floor(num / 10)) {
    nb += num % 10;
  }
  
  return nb;
}

function mul(num) {
  let nb = 1;
  for (; num > 0; num = Math.floor(num/10)) {
    nb *= num % 10;
  }
  
  return nb;
}

function problem1(pobi, crong) {
  let answer;
  if (is_vaild_input(pobi, crong)) {
    pobi_max = max(pobi);
    crong_max = max(crong);
    if (pobi_max > crong_max) {
      answer = 1;
    }
    else if (crong_max > pobi_max) {
      answer = 2;
    }
    else if (pobi_max == crong_max) {
      answer = 0;
    }
    else {
      answer = -1;
    }
  }
  else {
    answer = -1;
  }
  return answer;
}

// problem1([97, 98], [197, 198]);

module.exports = problem1;
