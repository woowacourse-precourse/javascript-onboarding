function getMax(pageNum1, pageNum2) {
  // 예외상황인 경우
  if (pageNum2 - pageNum1 !== 1){
    return -1
  } 

  var left; // 왼쪽페이지의 큰 수
  var right; // 오른쪽페이지으 큰 수
  var gob = 1; // 모두 곱한 경우
  var hap = 0;// 모두 더한 경우

  var str1 = String(pageNum1);
  var str2 = String(pageNum2);
  const mapfn = (arg) => Number(arg);

  let arr1 = str1.split('').map(mapfn);
  let arr2 = str2.split('').map(mapfn);

  arr1.forEach(n => gob *= n);
  arr1.forEach(n => hap += n);
  if (gob >= hap){
    left = gob;
  }
  else {
    left = hap;
  }

  gob = 1
  hap = 0
  arr2.forEach(n => gob *= n);
  arr2.forEach(n => hap += n);
  if (gob >= hap){
    right = gob;
  }
  else {
    right = hap;
  }

  // 왼쪽, 오른쪽 중 큰 값 반환 
  if (left >= right) {
    return left;
  }
  else{
    return right;
  }
}

function problem1(pobi, crong) {
  var answer;
  pobi_left = pobi[0];
  pobi_right = pobi[1];
  pobiMax = getMax(pobi_left, pobi_right);

  crong_left = crong[0];
  crong_right = crong[1];
  crongMax = getMax(crong_left, crong_right);

  if (pobiMax === -1 || crongMax === -1){
    return -1
  }
  else if (pobiMax > crongMax){
    return 1;
  } 
  else if (pobiMax === crongMax) {
    return 0;
  }
  else {
    return 2;
  }
  return answer;
}

module.exports = problem1;
