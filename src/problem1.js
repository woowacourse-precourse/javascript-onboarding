function problem1(pobi, crong) {
  if(exception_handle(pobi)||exception_handle(crong)){
    return -1;
  }
  let Score_pobi = calculation(pobi);
  let Score_crong = calculation(crong);
  if(Score_pobi>Score_crong){
    return 1;
  }
  else if(Score_pobi<Score_crong){
    return 2;
  }
  else if(Score_pobi==Score_crong){
    return 0;
  }
}
function exception_handle(user){
  if(user[1]-user[0]!= 1 || user[0]<=1 || user[1]>=400){
    return true;
  }
  return false;
}
function calculation(user){
  let result = []
  let highest = 0
  let sum = 0
  let mul = 0
  for(let i = 0;i<user.length;i++){
    if(user[i]>=100){
      result.push(Math.floor(user[i]/100));
      user[i] = user[i]%100;
      result.push(Math.floor(user[i]/10));
      user[i] = user[i]%10;
      result.push(user[i]);
    }
    else{
      result.push(Math.floor(user[i]/10));
      user[i] = user[i]%10;
      result.push(user[i]);
    }
    sum = result.reduce((a,b)=>(a+b));
    if(highest<sum){
      highest = sum;
    }
    mul = result.reduce((a,b)=>(a*b));
    if(highest<mul){
      highest = mul;
    }
  }
  return highest;
}
module.exports = problem1;
