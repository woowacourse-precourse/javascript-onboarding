function problem1(pobi, crong) {

  var answer;
  if (checkExcept(pobi))
    return -1
  if (checkExcept(crong))
    return -1

  const pobiScore=calculateNum(pobi)
  const crongScore= calculateNum(crong)
  
  if (pobiScore>crongScore)
    answer=1
  else if (pobiScore <crongScore)
    answer=2
  else
    answer=0
  
  return answer;
}

module.exports = problem1;

function checkExcept(pages){
  if (pages[1]!=pages[0]+1)
    return true
  
}

function calculateNum(nums){

  let scoreList=new Array()

  for (let num of nums){
    let sumAdd = 0
    let sumMulti = 1
    while(num>0)
    {
      sumAdd = sumAdd + num%10
      sumMulti *= num%10
      num=parseInt(num/10)
    }

    scoreList.push(sumAdd,sumMulti)
  }

  return Math.max(...scoreList)

}



module.exports = problem1;
