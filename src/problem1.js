function problem1(pobi, crong) {
  var answer = -1;
  pobi.forEach((item)=>{
    if(item == 1 || item == 400) {return answer}
  })
  crong.forEach((item)=> {
    if(item == 1 || item == 400) {return answer}
  })
  if((pobi[1]-pobi[0])!==1) {return answer}
  if((crong[1]-crong[0])!==1) {return answer}
  //예외 처리
  var pobiValue = 0
  var crongValue = 0

  pobi.forEach((item)=>{
    let addValue = 0
    let mulValue = 1
    let str = item.toString()
    for (let i of str){
      addValue += Number(i)
    }
    for (let j of str){
      mulValue *= Number(j)
    }
    if (pobiValue < addValue){pobiValue = addValue}
    if (pobiValue < mulValue){pobiValue = mulValue}
  })
  crong.forEach((item)=>{
    let addValue = 0
    let mulValue = 1
    let str = item.toString()
    for (let i of str){
      addValue += Number(i)
    }
    for (let j of str){
      mulValue *= Number(j)
    }
    if (crongValue < addValue){crongValue = addValue}
    if (crongValue < mulValue){crongValue = mulValue}
  })
  //기능 2,3,4 구현
  if (crongValue < pobiValue) {answer = 1}
  if (crongValue == pobiValue) {answer = 0}
  if (crongValue > pobiValue) {answer = 2}
  //기능 5 구현
  return answer;
}
module.exports = problem1;
