const fin_max = (page) => {
  temp_sum = 0
  temp_mul = 1  
  while (page >=1){
    page = page * 0.1
    temp_digit = Math.round(10*(page - Math.floor(page)), 0)
    temp_sum += temp_digit
    temp_mul *= temp_digit 
    page = Math.floor(page)
  }  
  return Math.max(temp_sum, temp_mul)
}

function problem1(pobi, crong) {
  var answer;
  if (pobi[1]-pobi[0] != 1 || crong[1]-crong[0] != 1){
    return -1
  }
  pobi_max = Math.max(fin_max(pobi[0]), fin_max(pobi[1]))
  crong_max = Math.max(fin_max(crong[0]), fin_max(crong[1]))
  if (pobi_max > crong_max){
    answer = 1
  } else if (pobi_max < crong_max){
    answer = 2
  } else if (pobi_max === crong_max){
    answer = 0
  }

  return answer;
}

module.exports = problem1;
