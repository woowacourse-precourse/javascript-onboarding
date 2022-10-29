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
    //왼쪽 페이지와 오른쪽 페이지를 배열로 변환
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



function problem1(pobi, crong) {
  var answer;
  //왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
  const pobiPage = new Page(pobi[0], pobi[1]);
  const crongPage = new Page(crong[0], crong[1]);
  //시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다. => 페이지가 1이나 400인경우 예외
  // ex) (1,2), (null,1), (399, 400), (null, 400)
  if (
    pobiPage.right !== 1 &&
    pobiPage.left !== 400 &&
    pobiPage.right !== 400 &&
    pobiPage.left !== 1 &&
    crong.right !== 1 &&
    crong.left !== 400 &&
    crong.right !== 400 &&
    crong.left !== 1 
  ) {
    //두개의 페이지의 차가 1이 아닌 경우 예외
    if ((pobiPage.right - pobiPage.left === 1 )&& (crongPage.right - crongPage.left === 1)) {
      //오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다. => 가장 큰 수를 본인의 점수로 한다.
      const pobiMaxValue = pobiPage.maxValue();
      const crongMaxValue = crongPage.maxValue();
      //점수를 비교해 가장 높은 사람이 게임의 승자가 된다.
      if (pobiMaxValue > crongMaxValue){
        answer = 1;
      } else if(pobiMaxValue < crongMaxValue) {
        answer = 2;
      } else{
        answer = 0;
      }
    }else {
     answer = -1; 
    }
  } else {
    answer = -1;
  }
  console.log(answer);
  return answer;
}
module.exports = problem1;
