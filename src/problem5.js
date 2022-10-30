function problem5(money) {
  var answer=new Array(9).fill(0)
  //ex
  //[160,237]// 50000,10000,5000,1000,500,100,50,10,1// [1,1,0,0,0,2,0,3,7] 
 
  test[0]=Math.floor(n/50000);
  n=n%50000;

  test[1]=Math.floor(n/10000)
  n=n%10000;
 
  return answer;
}

module.exports = problem5;
