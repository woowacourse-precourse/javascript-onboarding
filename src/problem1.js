function problem1(pobi, crong) {

  if(!checkPage(pobi) || !checkPage(crong)){return -1}

  if (maxValue(pobi)>maxValue(crong)){
    return 1
  }
  if (maxValue(pobi)<maxValue(crong)){
    return 2
  }
  if(maxValue(pobi)==maxValue(crong)){
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

function plusNum(page){
  let numbers = String(page).split("")
  const sum = numbers.reduce((sum,num)=>sum+Number(num),0)
  return sum
}

function multiNum(page){
  let numbers = String(page).split("")
  if(numbers.includes('0')){return 0}
  const sum = numbers.reduce((sum,num)=>sum*Number(num),1)
  return sum
}

function maxValue(member){
  const resultArr = []
  for (let page of member){
    resultArr.push(Math.max(plusNum(page),multiNum(page)))
  }
  return Math.max(...resultArr)
}

module.exports = problem1;
