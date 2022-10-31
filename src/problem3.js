function problem3(number) {
  let cnt = 0;
  for(let i =1;i<=number;i++){
    let strNum = String(i).split('');
    for(let num of strNum){
      if(num ==='3' || num === '6' || num === '9'){
        cnt++
      }
    }

  }
  return cnt
}

module.exports = problem3;
