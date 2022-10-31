function number_to_str(number){
  number_arr = [...number.toString()]
  return number_arr
}

function cal_clap(answer,check_num,number_arr){
  for(let j=0;j<3;j++){
    number_arr.forEach((ele)=>{ele==check_num[j] ? answer+=1 : answer});
  }
  return answer;
}

function problem3(number) {
  let answer = 0;
  const check_num = [3,6,9]
  for(let num=1;num<=number;num++)
  {
    let number_arr = number_to_str(num)
    // 각 숫자에 3,6,9 몇개인지 확인
    answer = cal_clap(answer,check_num,number_arr);
  }
  return answer;
}

module.exports = problem3;
