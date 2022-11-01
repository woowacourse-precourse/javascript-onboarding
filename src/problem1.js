/* 기능 1. 책을 임의로 펼친다.
   기능 6. 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다. */
let pobiBook = Math.floor(Math.random() * 399) + 1;
let crongBook = Math.floor(Math.random() * 399) + 1;
pobi = [pobiBook, pobiBook+1];
crong = [crongBook, crongBook+1];

let sum = 0;
let mul = 1;

function problem1(pobi, crong) {

  /* 기능 2. 왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
     기능 3. 오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다. */
  // poby
  for (let i = 0; i < pobi[0].toString().length; i++) {
    sum += parseInt(pobi[0].toString()[i]);
    mul *= parseInt(pobi[0].toString()[i]);
  }
  if (sum > mul) {
    var pobiBookL = sum;
  } else {
    var pobiBookL = mul;
  }

  sum = 0;
  mul = 1;
  for (let i = 0; i < pobi[1].toString().length; i++) {
    sum += parseInt(pobi[1].toString()[i]);
    mul *= parseInt(pobi[1].toString()[i]);
  }
  if (sum > mul) {
    var pobiBookR = sum;
  } else {
    var pobiBookR = mul;
  }

  // crong
  sum = 0;
  mul = 1;
  for (let i = 0; i < crong[0].toString().length; i++) {
    sum += parseInt(crong[0].toString()[i]);
    mul *= parseInt(crong[0].toString()[i]);
  }
  if (sum > mul) {
    var crongBookL = sum;
  } else {
    var crongBookL = mul;
  }

  sum = 0;
  mul = 1;
  for (let i = 0; i < crong[1].toString().length; i++) {
    sum += parseInt(crong[1].toString()[i]);
    mul *= parseInt(crong[1].toString()[i]);
  }
  if (sum > mul) {
    var crongBookR = sum;
  } else {
    var crongBookR = mul;
  }

  // 기능 4. 2~3 과정에서 가장 큰 수를 본인의 점수로 한다.
  if (pobiBookL > pobiBookR) {
    var pobiScore = pobiBookL;
  } else {
    var pobiScore = pobiBookR;
  }

  if (crongBookL > crongBookR) {
    var crongScore = crongBookL;
  } else {
    var crongScore = crongBookR;
  }


  // 기능 5. 점수를 비교해 가장 높은 사람이 게임의 승자가 된다.
  if (pobiScore < crongScore) {
    var answer = 2;
  } else if (pobiScore > crongScore) {
    var answer = 1;
  } else if (pobiScore === crongScore) {
    var answer = 0;
  }
  return answer;
}

module.exports = problem1;
