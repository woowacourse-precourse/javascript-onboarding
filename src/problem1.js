function problem1(pobi, crong){
  var answer;

  var pobi_sum = 0;
  var pobi_mul = 1;
  var max_pobi = 0;
  var crong_sum = 0;
  var crong_mul = 1;
  var max_crong = 0;

  
  if (pobi[1] == pobi[0] + 1 && crong[1] == crong[0] + 1){
      for (let i = 0; i<2; i++){
          pobi_sum = 0;
          pobi_mul = 1;
          let pobiNumArr = (pobi[i] + "").split('');
          pobiNumArr.forEach((e) => {
              pobi_sum += Number(e)
              pobi_mul *= Number(e)
          })
          max_pobi = Math.max(pobi_sum,pobi_mul,max_pobi)
  
          crong_sum = 0;
          crong_mul = 1;
          let crongNumArr = (crong[i] + "").split('');
          crongNumArr.forEach((e)=>{
              crong_sum += Number(e);
              crong_mul *= Number(e);
          })
          max_crong = Math.max(crong_sum,crong_mul,max_crong);
      }
  } else {
      answer = - 1
      return answer
  }
  
  if (max_pobi > max_crong){
      answer = 1
  }else if(max_pobi < max_crong){
      answer = 2
  }else{
      answer = 0
  }

  return answer
}


module.exports = problem1;