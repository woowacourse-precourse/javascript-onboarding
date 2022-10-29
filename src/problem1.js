class Page {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  numberToArray(n) {
    let num = [];
    do {
      num.push(n%10);
      n = Math.floor(n/10);
    } while(n>0) ;
    return num;
  }

  maxValue() {
    var leftArray = this.numberToArray(this.left);
    var rightArray = this.numberToArray(this.right);

    let leftSum = 0;
    let leftMuiti = 1;
    leftArray.forEach((item) => leftSum += item);
    leftArray.forEach((item) => leftMuiti *= item);

    let rightSum = 0;
    let rightMulti = 1;
    rightArray.forEach((item) => rightSum += item);
    rightArray.forEach((item) => rightMulti *= item);

    return Math.max(leftSum, leftMuiti, rightSum, rightMulti);
  }
}

function inputValidation(userPage) {
  if(userPage.left <= 1 || userPage.right >= 400) {
    return false;
  }
  if(userPage.right-userPage.left !== 1) {
    return false;
  }
  if(userPage.left%2 !== 1 || userPage.right%2 !== 0) {
    return false;
  }
  return true;
}


function problem1(pobi, crong) {
  var answer;
  const pobiPage = new Page(pobi[0], pobi[1]);
  const crongPage = new Page(crong[0], crong[1]);
  if(inputValidation(pobiPage) && inputValidation(crongPage)) {
    if(pobiPage.maxValue() > crongPage.maxValue()) {
      answer = 1;
    }else if(pobiPage.maxValue() < crongPage.maxValue()) {
      answer = 2;
    }else {
      answer = 0;
    }
  } else {
    answer = -1;
  }
  return answer;
}

problem1([97, 98],	[197, 198]);
module.exports = problem1;
