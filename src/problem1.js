function problem1(pobi,crong) {
  let answer = 0
  pobi_num = check_pobi(pobi);
  crong_num = check_crong(crong)

  if(check(pobi, crong) != false) {
      if(pobi_num > crong_num) {
          answer = 1
      } else if(pobi_num < crong_num) {
          answer = 2
      } else {
          answer = 0
      }
  } else {
      answer = -1
  }
  return answer
}

// 포비 검사
function check_pobi(pobi) {
  val1 = pobi[0].toString()
  val2 = pobi[1].toString()
  left_tmp = 0;
  right_tmp = 0
  sum(val1) >= mul(val1) ? left_tmp = sum(val1) : left_tmp = mul(val1)
  sum(val2) >= mul(val2) ? right_tmp = sum(val2) : right_tmp = mul(val2)
  
  return Math.max(left_tmp, right_tmp)
}

// 크롱이 검사
function check_crong(crong) {
  val1 = crong[0].toString()
  val2 = crong[1].toString()
  left_tmp = 0;
  right_tmp = 0
  sum(val1) >= mul(val1) ? left_tmp = sum(val1) : left_tmp = mul(val1)
  sum(val2) >= mul(val2) ? right_tmp = sum(val2) : right_tmp = mul(val2)
  
  return Math.max(left_tmp, right_tmp)
}

// 더하기 함수 

function sum(num) {
  tmp = 0
  for(let i=0; i<num.length; i++) {
      tmp += parseInt(num[i])
  }
  return tmp
}

// 곱셈에 대한 함수
function mul(num) {
  tmp = 1
  for(let i=0; i<num.length; i++) {
      tmp *= parseInt(num[i])
  }
  return tmp
}

// 예외처리 

function check(pobi, crong) {
  if(1 != Math.abs(pobi[0] - pobi[1])) {
      return false
  } else if(1 != Math.abs(crong[0] - crong[1])) {
      return false
  } else {
      return true
  }
}

module.exports = problem1;
