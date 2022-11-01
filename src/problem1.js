function exceptionPage(arr) {
  const diff = arr[1] - arr[0] === 1 ? true : false;
  var range = true;

  for(let i = 0;i < arr.length;i++){
    if(arr[i]>=0 && arr[i]<=400){
      range = true;
    }
    else{
      range = false;
    }
  }
  return diff && range;
}

function problem1(pobi, crong) {
  var answer;
  
  //예외처리
  const except_Pobi = exceptionPage(pobi);
  const except_Crong = exceptionPage(crong);
  if(!except_Pobi || !except_Crong){
      answer = -1;
      return answer;
  }
  const pobiScore = [];
  const crongScore = [];

  pobi.forEach((num)=>{
      const numArr = num.toString().split("");
      const num_Sum = numArr.reduce((pre,cur)=>Number(pre) + Number(cur));
      const num_mul = numArr.reduce((pre,cur)=>Number(pre)*Number(cur));
      pobiScore.push(Math.max(num_Sum,num_mul));
  })

  crong.forEach((num)=>{
      const numArr = num.toString().split("");
      const num_Sum = numArr.reduce((pre,cur)=>Number(pre) + Number(cur));
      const num_mul = numArr.reduce((pre,cur)=>Number(pre)*Number(cur));
      crongScore.push(Math.max(num_Sum,num_mul));
  })

  const Maxpobi = Math.max(...pobiScore);
  const Maxcrong = Math.max(...crongScore);

  if(Maxpobi>Maxcrong)
      answer = 1;
  else if(Maxpobi<Maxcrong)
      answer = 2;
  else if(Maxpobi == Maxcrong)
      answer = 0;
  return answer;
}

module.exports = problem1;
