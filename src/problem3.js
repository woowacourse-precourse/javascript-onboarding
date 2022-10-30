function problem3(number) {
  let count=0
  let remain=0
  let mok=0
  for(let i=3;i<=number;i++){
    remain=i%10
    mok=Math.floor(i/10)
    if(remain!==0 && remain%3===0){
      count++
    }
    if(mok/3===1) {
      count++
    }
  }
  return count
}

problem3(13)

module.exports = problem3;
