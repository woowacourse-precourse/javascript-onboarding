function problem3(number) {
  var answer ;
  let number_add = [];

  console.log(number)

  for (i = 1 ; i <= number ; i++) {
    let n = i
    do {
      number_add.push(n % 10);  
      n = Math.floor(n / 10);  
    } while (n > 0);  
  }
  console.log("숫자 확인",number_add)
  //숫자가 입력됬을때 각 자리수 배열로 넣기

}

module.exports = problem3;
