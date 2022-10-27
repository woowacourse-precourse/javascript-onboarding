/**
 * 왼쪽, 오른쪽 페이지가 유효함을 반환하는 함수
 * @param {Array} pages 왼쪽, 오른쪽 페이지 배열
 * @returns 페이지의 유효함
 */
function checkPage(pages){
  const [left, right] = pages;

  // 왼쪽 페이지가 홀수이고 오른쪽 페이지가 왼쪽 페이지와 이어지는지
  return (left % 2) !== 0 && right === (left + 1);
}

/**
 * 각 자리 숫자를 더하거나 곱했을 때 가장 큰 수를 반환하는 함수
 * @param {Array} pages 왼쪽, 오른쪽 페이지 배열 
 * @returns 가장 큰 수
 */
function getMaxNum(pages){
  let maxNumArr = [];

  pages.map(page=>{
    let plus = 0;
    let multiply = 1;

    (page+'').split('').map(num=>{
      plus += parseInt(num);
      multiply *= parseInt(num);
    })

    // 각 자리 숫자를 더한 값과 곱한 값 중에 큰 값을 배열에 삽입
    maxNumArr.push(Math.max(plus, multiply));
  })
  
  // 왼쪽 페이지의 값과 오른쪽 페이지의 값 중에 큰 값을 반환
  return Math.max(...maxNumArr);
}

function problem1(pobi, crong) {
  //유효한 페이지인지 검사
  if(checkPage(pobi) && checkPage(crong)){
    // 각자 핀 페이지의 큰 값 구하기
    const pobiNum = getMaxNum(pobi);
    const crongNum = getMaxNum(crong);

    // 승리, 패배, 무승부 판별
    if(pobiNum > crongNum) return 1;
    else if (pobiNum < crongNum) return 2;
    else return 0;
  }

  return -1;
}

module.exports = problem1;
