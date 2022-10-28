function problem1(pobi, crong) {
  var answer;

  //pobi 변수
  var pobi_answer = 0;
  var pobi_odd_answer = 0;
  var pobi_answer_multiply = 1;
  var pobi_odd_answer_multiply = 1;
  var pobi_max_even = 0;
  var pobi_max_odd = 0;
  var pobi_max = 0;

  //crong 변수
  var crong_answer = 0;
  var crong_odd_answer = 0;
  var crong_answer_multiply = 1;
  var crong_odd_answer_multiply = 1;
  var crong_max_even = 0;
  var crong_max_odd = 0;
  var pobi_max = 0;

  //pobi 더하기
  pobi_even_number = pobi[1].toString();
  for (let i = 0; i < pobi_even_number.length; i++) {
    pobi_answer += parseInt(pobi_even_number[i]);
  }
  pobi_odd_number = pobi[0].toString();
  for (let i = 0; i < pobi_odd_number.length; i++) {
    pobi_odd_answer += parseInt(pobi_odd_number[i]);
  }

  //crong 더하기
  crong_even_number = crong[1].toString();
  for (let i = 0; i < crong_even_number.length; i++) {
    crong_answer += parseInt(crong_even_number[i]);
  }
  crong_odd_number = crong[0].toString();
  for (let i = 0; i < crong_odd_number.length; i++) {
    crong_odd_answer += parseInt(crong_odd_number[i]);
  }

  //pobi 곱하기
  for (let i = 0; i < pobi_even_number.length; i++) {
    pobi_answer_multiply *= parseInt(pobi_even_number[i]);
  }
  for (let i = 0; i < pobi_odd_number.length; i++) {
    pobi_odd_answer_multiply *= parseInt(pobi_odd_number[i]);
  }

  //crong 곱하기
  for (let i = 0; i < crong_even_number.length; i++) {
    crong_answer_multiply *= parseInt(crong_even_number[i]);
  }
  for (let i = 0; i < crong_odd_number.length; i++) {
    crong_odd_answer_multiply *= parseInt(crong_odd_number[i]);
  }

  //pobi 짝수 더하기 곱하기 비교
  if (pobi_answer > pobi_answer_multiply) {
    pobi_max_even = pobi_answer;
  } else {
    pobi_max_even = pobi_answer_multiply;
  }

  //crong 짝수 더하기 곱하기 비교
  if (crong_answer > crong_answer_multiply) {
    crong_max_even = crong_answer;
  } else {
    crong_max_even = crong_answer_multiply;
  }

  //pobi 홀수 더하기 곱하기 비교
  if (pobi_odd_answer > pobi_odd_answer_multiply) {
    pobi_max_odd = pobi_odd_answer;
  } else {
    pobi_max_odd = pobi_odd_answer_multiply;
  }

  //crong 홀수 더하기 곱하기 비교
  if (crong_odd_answer > crong_odd_answer_multiply) {
    crong_max_odd = crong_odd_answer;
  } else {
    crong_max_odd = crong_odd_answer_multiply;
  }

  return answer;
}

module.exports = problem1;
