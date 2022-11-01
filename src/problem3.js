function problem3(number) {
  var answer;
  answer = getClap(number);
  return answer;
}

function getClap(num) {
  const arr = [];

  for (let i = 1; i < num + 1; i++) {
    // 정규표현식을 사용하여 3,6,9에 부합하면 arr에 push
    let char = i.toString();
    if (char.match(/[3,6,9]/g)) {
      //수의 자리수가 2자리 이상이라면 split 해서 ex) ["1","3"] 변환 후 정규 표현식에 부합한 수만 ex) ["1" = X ,"3" = O] arr에 넣기
      if (char.length >= 2) {
        char.split("").map((value) => {
          if (value.match(/[3,6,9]/g)) {
            arr.push(value);
          }
        });
      } else {
        arr.push(char);
      }
    }
  }
  //array 는 반드시 ["3","6","9"] 형태 이므로 array.length 로 구하면 369의 숫자를 완벽하게 알 수 있다.
  return arr.length;
}

module.exports = problem3;
