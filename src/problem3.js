function problem3(number) {
  let answer = 0;
  for (let i = 1; i < number + 1; i++){
    i += "";
    answer += check369(i);
  }
  return answer;
}


const check369 = (num) => {
  const arr369 = ['3', '6', '9'];
  let cnt = 0;

  arr369.map((el) => {
    let tmpArr = num.split(el);
    cnt += tmpArr.length - 1;
    let tmpNum = tmpArr.join('');
  })
  return cnt;
}

  
problem3(13);
module.exports = problem3;
