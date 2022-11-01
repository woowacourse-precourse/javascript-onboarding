// 함수 하나에 넣으니까 너무 꼬임 -> 한 함수 안에서 부속적으로 기능 분리? -> problem1에 들어가는 함수와 가장 큰값을 가져오는 함수로 2개로 구성

function problem1(pobi, crong) {
  let answer;
  let pobinumbers = 0;
  let crongnumbers = 0;
  let leftpage = 0;
  let rightpage = 0;
  let leftmultifle = 0;
  let leftsum = 0;
  let rightmultifle = 0;
  let rightsum = 0;

  function bigpage(number) {
    if (number[0] !== number[1] - 1) {
      answer = -1;
      return;
    }
    leftpage = number[0].toString().split("").map(Number);
    rightpage = number[1].toString().split("").map(Number);

    leftmultifle = leftpage[0];

    if (leftpage.length > 1) {
      for (let i = 1; i < leftpage.length; i++) {
        leftmultifle *= leftpage[i];
      }
    }
    leftsum = 0;

    for (let i = 0; i < leftpage.length; i++) {
      leftsum += leftpage[i];
    }

    if (leftsum >= leftmultifle) {
      leftpage = leftsum;
    } else {
      leftpage = leftmultifle;
    }

    rightmultifle = rightpage[0];

    if (rightpage.length > 1) {
      for (let i = 1; i < rightpage.length; i++) {
        rightmultifle *= rightpage[i];
      }
    }

    rightsum = 0;

    for (let i = 0; i < rightpage.length; i++) {
      rightsum += rightpage[i];
    }

    if (rightsum >= rightmultifle) {
      rightpage = rightsum;
    } else {
      rightpage = rightmultifle;
    }
    if (leftpage < rightpage) {
      return rightpage;
    } else {
      return leftpage;
    }
  }

  pobinumbers = bigpage(pobi);
  crongnumbers = bigpage(crong);

  if (pobinumbers > crongnumbers) {
    return 1;
  } else if (pobinumbers === crongnumbers) {
    return 0;
  } else if (pobinumbers < crongnumbers) {
    return 2;
  }
  return answer;
}

module.exports = problem1;
