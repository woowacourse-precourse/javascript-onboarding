function problem1(pobi, crong) {
  var answer;

  pobi_list = [];
  for (var page of pobi) {
    var sum = 0; // 각 자리 모든 숫자의 합
    var mult = 1; // 각 자리 모든 숫자의 곱
    while (page >= 1) {
      sum += page % 10;
      mult *= page % 10;
      page /= 10;
      page = Math.floor(page);
    }
    if (sum >= mult) pobi_list.push(sum);
    else pobi_list.push(mult);
  }
  var pobi_max = Math.max.apply(null, pobi_list);
  crong_list = [];
  for (var page of crong) {
    var sum = 0; // 각 자리 모든 숫자의 합
    var mult = 1; // 각 자리 모든 숫자의 곱
    while (page >= 1) {
      sum += page % 10;
      mult *= page % 10;
      page /= 10;
      page = Math.floor(page);
    }
    if (sum >= mult) crong_list.push(sum);
    else crong_list.push(mult);
  }
  var crong_max = Math.max.apply(null, crong_list);
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1])
    answer = -1; //예외사항
  else {
    if (pobi_max > crong_max) answer = 1; // pobi가 이기는 경우
    else if (pobi_max < crong_max) answer = 2; // crong이 이기는 경우
    else if (pobi_max === crong_max) answer = 0; // 무승부하는 경우
    else answer = -1; //예외사항
  }
  return answer;
}

module.exports = problem1;
