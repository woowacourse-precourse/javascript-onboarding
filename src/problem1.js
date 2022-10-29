function problem1(pobi, crong) {
  var answer;
  // 1. 책을 임의로 펼친다.
  // => 펼쳐진 페이지가 맞는지 확인한다.
  // 둘중 하나라도 false이면 예외사항 이므로 && 사용.
  if(checkPage(pobi) && checkPage(crong))return -1

  return answer;
}

function checkPage(pages){
  // 맞지 않으면 예외사항으로 -1처리
  // 두 페이지의 차이가 1이 아니고 왼쪽은 홀수여야 한다.
  // 시작면과 마지막 면이 나올수 없다.
  if (pages[1]-pages[0] !== 1 || pages[0]%2==0 
    || pages[0]==1 || pages[1]==400){
      return false
  }
  return true
}

function plus_value(page){
  let sum = 0;
  for(let i = 2;i>0;i--){
    let digit = Math.pow(10, i)
    sum+=parseInt(page/digit)
    page = page%digit
  }
  return sum+page
}

function multi_value(page){
  let sum = 1;
  let numbers = page.split("")

  for(let i = 2;i>0;i--){
    let digit = Math.pow(10, i)
    sum*=parseInt(page/digit)
    page = page%digit
  }
  return sum*page
}



function find_multi(pages){
  let pages_multi = !numbers.includes('0')? numbers.reduce((sum,num)=>sum*=num,1):0
    
}

function find_Max(plus,multi){
  if (pages_answer < Math.max(plus,multi)){
    pages_answer = Math.max(plus,multi)
  }
}


module.exports = problem1;
