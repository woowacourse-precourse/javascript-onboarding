function problem1(pobi, crong) {
  var answer;
  var pobi_max = 0;
  var crong_max = 0;

  /* 오류 검출하는 부분 */
  if (pobi[0] + 1 != pobi[1] || crong[0] + 1 != crong[1]){
    //console.log("answer = ", -1);
    return -1;
  }
  page_list = [pobi[0], pobi[1], crong[0], crong[1]];
  for (var k = 0; k < 4; k++){
    if (page_list[k] < 1 || page_list > 400){
      //console.log("answer = ", -1);
      return -1;
    }
  }
  
  /* 누가 승자인지 계산하는 부분 */
  for (var j = 0; j < 2; j++){
    var times = 1;
    var sum = 0;
    for (var i = 0; i < String(pobi[j]).length; i++) {
      var a = parseInt(String(pobi[j])[i]);
      times *= a;
      sum += a;
    }
    if (times > pobi_max){
      pobi_max = times;
    }
    if (sum > pobi_max){
      pobi_max = sum;
    }
  }

  for (var j = 0; j < 2; j++){
    var times = 1;
    var sum = 0;
    for (var i = 0; i < String(crong[j]).length; i++) {
      var a = parseInt(String(crong[j])[i]);
      times *= a;
      sum += a;
    }
    if (times > crong_max){
      crong_max = times;
    }
    if (sum > crong_max){
      crong_max = sum;
    }
  }

  /* 승자를 정하는 부분 */

  if (pobi_max > crong_max){
    answer = 1;
  }
  else if (pobi_max < crong_max){
    answer = 2;
  }
  else{
    answer = 0;
  }
  //console.log("answer = ", answer);

  return answer;
}

module.exports = problem1;
