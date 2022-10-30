function check_valid(arr){
  var isValid = true
  if(arr[0]%2==0 || arr[1]%2==1 ||(arr[1]-arr[0])!=1 ||
  arr[0]<1|| arr[0]>400 || arr[1]<1 || arr[1]>400){
    isValid = false
  }
  return isValid
}
function div_num(num){
  var arr = []
  while (num>0){
    now_num = num%10
    arr.push(now_num)
    num = parseInt(num/10)
  }
  return arr
}
function cal_arr(arr){
  var sum = 0
  var mul = 1
  var bigger = 0
  arr.forEach(element => {
    sum+=element
    mul*=element
  });
  bigger = Math.max(sum,mul)
  return bigger
}
function problem1(pobi, crong) {
  var answer;
  if(!check_valid(pobi) || !check_valid(crong)){
    answer = -1
  }
  else{
    var left_pobi = div_num(pobi[0])
    var left_crong = div_num(crong[0])
    var right_pobi = div_num(pobi[1])
    var right_crong = div_num(crong[1])
    
    var bigger_pobi = Math.max(cal_arr(left_pobi),cal_arr(right_pobi))
    var bigger_crong = Math.max(cal_arr(left_crong),cal_arr(right_crong))
    if (bigger_pobi>bigger_crong){
      answer = 1
    }
    else if(bigger_pobi<bigger_crong){
      answer=2
    }
    else if(bigger_pobi==bigger_crong){
      answer = 0
    }
    else{
      answer = -1
    }
  }
  return answer;
}

module.exports = problem1;
