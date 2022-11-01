function problem3(number) {
  var answer=0;
  let nums = []
  for (let i = 1 ; i<= number ; i++) nums.push(String(i))
  let clap_num = ["3","6","9"]

  nums.forEach((num)=>{
      for(let i = 0 ;i < num.length; i++){
          if(clap_num.includes(num[i])) {
              answer += 1 
          }
      }
  })


  return answer;
}

module.exports = problem3;
