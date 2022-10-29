function problem1(pobi, crong) {
  // 1. 책을 임의로 펼친다.
  // => 펼쳐진 페이지가 맞는지 확인한다.
  // 둘중 하나라도 false이면 예외사항 이므로 && 사용.
  if(!checkPage(pobi) && checkPage(crong)){return -1}

  if (result_value(pobi)>result_value(crong)){
    return 1
  }
  if (result_value(pobi)<result_value(crong)){
    return 2
  }
  if(result_value(pobi)==result_value(crong)){
    return 0
  }

  return -1;
}

function checkPage(pages){
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
  let numbers = String(page).split("")
  if(numbers.includes('0')){return 0}
  sum = numbers.reduce((sum,num)=>sum*=Number(num),1)
  return sum
}

function result_value(member){
  for (let idx in member){
    member[idx] = Math.max(plus_value(member[idx]),multi_value(member[idx]))
  }
  return Math.max(...member)
}

module.exports = problem1;
