function problem1(pobi, crong) {
  let answer = 0;

  if ((pobi[0] > 1 && pobi[1] < 400 && crong[0] > 1 && crong[1] < 400) && // 모든 페이지가 1~400 이내에 있는지 확인
      (pobi[0] % 2 == 1 && pobi[1] % 2 == 0 && crong[0] % 2 == 1 && crong[1] % 2 == 0) && // 왼쪽은 홀수, 오른쪽은 짝수 페이지인지 확인
      (pobi[1] - pobi[0] == 1 && crong[1] - crong[0] == 1) // 양 페이지 차이가 1인지 확인
  ){
  let pobi_plus = Plus(pobi[0], pobi[1])    // 포비의 각 자릿수 더한 수 중 제일 큰 수
  let crong_plus = Plus(crong[0], crong[1])   // 크롱의 각 자릿수 더한 수 중 제일 큰 수
  let pobi_multi = Multi(pobi[0], pobi[1])   // 포비의 각 자릿수 곱한 수 중 제일 큰 수
  let crong_multi = Multi(crong[0], crong[1])   // 크롱의 각 자릿수 곱한 수 중 제일 큰 수

  pobi_max = Math.max(pobi_plus, pobi_multi)   // 포비의 각 자릿수 더한 수와 곱한 수 중 제일 큰 수
  crong_max = Math.max(crong_plus, crong_multi)   // 크롱의 각 자릿수 더한 수와 곱한 수 중 제일 큰 수

  if(pobi_max > crong_max) answer = 1   // 포비가 크롱보다 크면 1
  else if(pobi_max < crong_max) answer = 2  // 포비가 크롱보다 작으면면 2
  else if(pobi_max === crong_max) answer = 0  // 포비가 크롱과 같으면 0
  else answer = -1  // 예외 사항은 -1
  }

  else answer = -1  // if 조건 외의 사항은 -1
  return answer;
}

function Plus(left, right){ // 왼쪽과 오른쪽 수 중 각 자릿수 더한 값이 더 큰 것을 반환하는 함수
  let left_plus = 0;
  let right_plus = 0;
  let l = String(left);
  let r = String(right);
  
  for ( let i = 0; i < l.length; i++) {
      left_plus += parseInt(l[i]);
  }

  for ( let j = 0; j < r.length; j++) {
      right_plus += parseInt(r[j]);
  }

  return Math.max(left_plus, right_plus) ;
}

function Multi(left, right){// 왼쪽과 오른쪽 수 중 각 자릿수 곱한 값이 더 큰 것을 반환하는 함수
  let left_multi = 1;
  let right_multi = 1;
  let l = String(left);
  let r = String(right);
  
  for ( let i = 0; i < l.length; i++) {
      left_multi *= parseInt(l[i]);
  }
  
  for ( let j = 0; j < r.length; j++) {
      right_multi *= parseInt(r[j]);
  }

  return Math.max(left_multi, right_multi) ;
}

module.exports = problem1;