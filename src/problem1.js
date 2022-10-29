function problem1(pobi, crong) {

  if(!checkPage(pobi) && checkPage(crong)){return -1}

  if (resultValue(pobi)>resultValue(crong)){
    return 1
  }
  if (resultValue(pobi)<resultValue(crong)){
    return 2
  }
  if(resultValue(pobi)==resultValue(crong)){
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

function plusValue(page){
  let sum = 0;
  for(let i = 2;i>0;i--){
    let digit = Math.pow(10, i)
    sum+=parseInt(page/digit)
    page = page%digit
  }
  return sum+page
}

function multiValue(page){
  let sum = 1;
  let numbers = String(page).split("")
  if(numbers.includes('0')){return 0}
  sum = numbers.reduce((sum,num)=>sum*=Number(num),1)
  return sum
}

function resultValue(member){
  for (let idx in member){
    member[idx] = Math.max(plusValue(member[idx]),multiValue(member[idx]))
  }
  return Math.max(...member)
}

module.exports = problem1;
