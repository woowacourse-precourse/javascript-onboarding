// 각 페이지 번호를 가장 큰 점수로 만드는 함수
function pageToMax(pageNum) {}

// 가장 큰 수 본인의 점수로 만드는 함수
function getMaxNum(pageArr) {
  let leftMaxNum = pageToMax(pageArr[0]);
  let rightManNum = pageToMax(pageArr[1]);

  let maxNum = Math.max(leftMaxNum, rightManNum);
  return maxNum;
}

//제한사항에 해당되면  true, 안되면 false
// 1.길이가 2가 아닐 시
// 2.페이지 번호 순서가 맞지 않을 시
function exception(pobi, crong) {
  let except = false;
  if (pobi.length !== 2 || crong.length !== 2) {
    //제한사항1
    except = true;
  }
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) {
    //제한사항2
    except = true;
  }
  return except;
}

function problem1(pobi, crong) {
  var answer;
  let pobiMaxNum = getMaxNum(pobi);
  let crongMaxNum = getMaxNum(crong);
  //예외사항
  if (exception(pobi, crong)) return -1;

  // 승부
  if (pobiMaxNum === crongMaxNum) answer = 0; //무승부
  else if (pobiMaxNum > crongMaxNum) answer = 1; //포비 승
  else if (pobiMaxNum < crongMaxNum) answer = 2; //크롱 승

  return answer;
}

module.exports = problem1;

/* 문제에서 제시한 예외사항 외에 pobi, crong에 페이지 번호(숫자)가 아닌
null, NaN, undefined, boolean, 문자열 이 들어올 때 발생할 것으로 생각됨
배열에서는 null,boolean 값도 number로 계산 가능하여 문제 됨 
ex) [ null, 1], [true,1]
그러나 문제 제한사항에 페이지 번호가 순서대로 들어온다고 제시되어 있으니 위 예외사항은 배제하였음
*/
