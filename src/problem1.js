function problem1(pobi, crong) {
  var answer;
  // 페이지에 문제 있는 경우
  if(isException(pobi) || isException(crong)){
    console.log("연속된 페이지 아님 ");
    return -1;
  }

  var pobiBig = getBigNumber(pobi);
  var crongBig = getBigNumber(crong);

  if(pobiBig == -1 || crongBig == -1){
    console.log("페이지 1, 400");
    return -1;
  }

  answer = compare(pobiBig, crongBig, true);
  return answer;
}

// 예외처리 : 페이지가 1 또는 400인 경우 
function isFirstLast(num){
  if(num == 1 || num == 400){
    return true;
  }
}

// 예외처리 2 : 연속된 페이지가 아닌 경우 
function isException(arr){
  if(arr[0] + 1 != arr[1]){
    return true;
  }
}

// 가장 큰 수를 반환
function getBigNumber(arr){
  var bignum = 0;
  if(isFirstLast(arr)){
    return -1;
  }

  for(var i = 0 ; i < arr.length ; i++){
    var num = arr[i] + "";

    var p = 0;
    var m = 1;
    for(var j = 0 ; j < num.length ; j++){
      var tmp = Number(num[j]);
      p += tmp;
      m *= tmp;
    }

    bignum = compare(bignum, p);
    bignum = compare(bignum, m);
  }

  return bignum;
}

// 두 수를 비교 
function compare(num1, num2, isAnswer){
  var chai = num1 - num2;

  if(isAnswer){
    return chai > 0 ? 1 : chai < 0 ? 2 : 0;
  }else{
    return chai >= 0 ? num1 : num2;
  }
}
module.exports = problem1;