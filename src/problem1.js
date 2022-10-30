function problem1(pobi, crong) {
  var answer = 0;
  var sum = 0;
  var multiply = 1;
  // pobi 시작
  var pobiLeftPage = pobi[0].toString();
  var pobiRightPage = pobi[1].toString();

  // pobi 왼쪽 페이지 시작
  for (i = 0; i < pobiLeftPage.length; i++) {
    sum += Number(pobiLeftPage[i]);
    multiply *= Number(pobiLeftPage[i]);
  }
  if (sum < multiply) {
    var pobiLeft = multiply;
  } else {
    pobiLeft = sum;
  }

  // pobi 오른쪽 페이지 시작
  sum = 0;
  multiply = 1;
  for (i = 0; i < pobiRightPage.length; i++) {
    sum += Number(pobiRightPage[i]);
    multiply *= Number(pobiRightPage[i]);
  }
  if (sum < multiply) {
    var pobiRight = multiply;
  } else {
    pobiRight = sum;
  }

  // crong 시작
  var crongLeftPage = crong[0].toString();
  var crongRightPage = crong[1].toString();

  // crong 왼쪽 페이지 시작
  sum = 0;
  multiply = 1;
  for (i = 0; i < crongLeftPage.length; i++) {
    sum += Number(crongLeftPage[i]);
    multiply *= Number(crongLeftPage[i]);
  }
  if (sum < multiply) {
    var crongLeft = multiply;
  } else {
    crongLeft = sum;
  }

  // crong 오른쪽 페이지 시작
  sum = 0;
  multiply = 1;
  for (i = 0; i < crongRightPage.length; i++) {
    sum += Number(crongRightPage[i]);
    multiply *= Number(crongRightPage[i]);
  }
  if (sum < multiply) {
    var crongRight = multiply;
  } else {
    crongRight = sum;
  }

  console.log(crongRightPage);
  console.log(sum);
  console.log(multiply);
  console.log(crongRight);

  return answer;
}

module.exports = problem1;
console.log(problem1([97, 98], [197, 198]));
