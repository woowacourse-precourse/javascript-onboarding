function problem1(pobi, crong) {
  const [pobiLeft, pobiRight] = pobi
  const [crongLeft, crongRight] = crong

  if(Math.max(...pobi, ...crong) === 400 || Math.min(...pobi, ...crong)===0)return -1
  if(pobiRight-pobiLeft !== 1 || crongRight - crongLeft !== 1)return -1

  const pobiMax = math.Max(getMaxPageValue(pobiLeft), getMaxPageValue(pobiRight))
  const crongMax = math.Max(getMaxPageValue(crongLeft), getMaxPageValue(crongRight))

  if(pobiMax === crongMax)return 0
  if(pobiMax > crongMax) return 1
  if(pobiMax < crongMax) return 2
  return -1;
}

function getMaxPageValue(pageNum){
  const pageStr = `${pageNum}`
  const pageArr = pageStr.split('')
  
  let sum = 0
  let multi = 0

  pageArr.forEach(num => {
    const parsedNum = parseInt(num, 10)
    sum += parsedNum
    multi *= parsedNum
  })
  
  return Math.max(sum, multi)
}

module.exports = problem1;
