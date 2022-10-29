function problem1(pobi, crong) {
  // 페이지가 유효한지 검사
  if (invalid(pobi) || invalid(crong)) {
    return -1;
  } 
  
  var pMax = maxScore(pobi);
  var cMax = maxScore(crong);

  if (pMax > cMax) {
    return 1;
  } else if (pMax < cMax) {
    return 2;
  } else if (pMax === cMax) {
    return 0;
  } else {
    return -1;
  }
}

//페이지 값이 유효한지 확인하는 함수
function invalid(pages) {
  return pages[0] - pages[1] !== -1;
}

//최대값 찾는 함수
function maxScore(arr) {
  var result = -1;
  for(var p = 0; p < arr.length; p++) {
    var page = String(arr[p]);
    var plus = 0;
    var multiply = 1;
    for(var i = 0; i < page.length; i++) {
      plus += parseInt(page[i]);
      multiply *= parseInt(page[i]);
    }
    var max = Math.max(plus, multiply);

    if (result < max) {
      result = max;
    }
  }
  return result;
}


module.exports = problem1;
