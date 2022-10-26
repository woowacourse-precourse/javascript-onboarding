
//기능 1.책을 임의로 펼친다.
//6. 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다.
let pobiBookPgL = Math.floor(Math.random() * 398) + 1;
let pobiBookPgR = pobiBookPgL + 1;
let crongBookPgL = Math.floor(Math.random() * 398) + 1;
let crongBookPgR = crongBookPgL + 1;

//제한사항 - pobi와 crong에는 [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 순서대로 들어있다.
//- pobi와 crong의 길이는 2이다.
pobi = [pobiBookPgL, pobiBookPgR];
crong = [crongBookPgL, crongBookPgR];
let sum = 0;
let multy = 1;


function problem1(pobi, crong) {
  //예외사항은 -1로 return
  if (pobi[0] + 1 !== pobi[1]) {
    return -1
  } else if (crong[0] + 1 !== crong[1]) {
    return -1
  }
  //2. 왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
  //3. 오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
  for (let i = 0; i < pobi[0].toString().length; i++) {
    sum += parseInt(pobi[0].toString()[i]);
    multy *= parseInt(pobi[0].toString()[i]);
  }
  if (sum > multy) {
    var pobiLeftPg = sum;
  } else {
    var pobiLeftPg = multy;
  }

  sum = 0;
  multy = 1;

  for (let i = 0; i < pobi[1].toString().length; i++) {
    sum += parseInt(pobi[1].toString()[i]);
    multy *= parseInt(pobi[1].toString()[i]);
  }
  if (sum > multy) {
    var pobiRightPg = sum;
  } else {
    var pobiRightPg = multy;
  }

  sum = 0;
  multy = 1;

  for (let i = 0; i < crong[0].toString().length; i++) {
    sum += parseInt(crong[0].toString()[i]);
    multy *= parseInt(crong[0].toString()[i]);

  }
  if (sum > multy) {
    var crongLeftPg = sum;
  } else {
    var crongLeftPg = multy;
  }

  sum = 0;
  multy = 1;

  for (let i = 0; i < crong[1].toString().length; i++) {
    sum += parseInt(crong[1].toString()[i]);
    multy *= parseInt(crong[1].toString()[i]);
  }
  if (sum > multy) {
    var crongRightPg = sum;
  } else {
    var crongRightPg = multy;
  }

  //4. 2~3 과정에서 가장 큰 수를 본인의 점수로 한다.
  if (pobiLeftPg > pobiRightPg) {
    var pobiResult = pobiLeftPg;
  } else {
    var pobiResult = pobiRightPg;
  }

  if (crongLeftPg > crongRightPg) {
    var crongResult = crongLeftPg;
  } else {
    var crongResult = crongRightPg;
  }
  //5. 점수를 비교해 가장 높은 사람이 게임의 승자가 된다.
  if (pobiResult < crongResult) {
    answer = 2;
  } else if (pobiResult > crongResult) {
    answer = 1;
  } else if (pobiResult === crongResult) {
    answer = 0;
  }


  return answer;
}

module.exports = problem1;
