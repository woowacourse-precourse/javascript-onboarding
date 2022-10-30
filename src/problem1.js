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