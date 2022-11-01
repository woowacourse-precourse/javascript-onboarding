function problem1(pobi, crong) {
  var pobi_arr = pobi;
  var crong_arr = crong;
  var answer;
  if(Math.abs(pobi_arr[0]-pobi_arr[1])!=1||Math.abs(crong_arr[0]-crong_arr[1])!=1) return -1;
  else{
    pobi_arr[0] = selfCompare(pobi_arr[0]);
    pobi_arr[1] = selfCompare(pobi_arr[1]);
    crong_arr[0] = selfCompare(crong_arr[0]);
    crong_arr[1] = selfCompare(crong_arr[1]);
    var result = Math.max(pobi_arr[0], pobi_arr[1]) - Math.max(crong_arr[0], crong_arr[1]);
    result==0? answer = 0 : (result>0 ? answer = 1 : answer = 2);
  }
  return answer;
}

function selfCompare(num){
  if(num<10) return num;
  else if(num<100) return Math.max(parseInt(num/10)*(num%10), num/10+(num%10));
  else return Math.max((num%10)*parseInt(num%100/10)*parseInt(num/100), num%10+(num%100/10)+(num/100));
}
module.exports = problem1;
