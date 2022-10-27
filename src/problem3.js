function problem3(number) {
  let answer;
  answer = clap(number);

  return answer;
}

function clap(number) {
  let string;
  let check = 0;

  for(let i = 1; i <= number; i++) {
    string = [...i.toString()]; //number를 toString으로 문자열 -> 스프레드 연산자를 활용하여 문자열 배열로 변경
    for(let j = 0; j < string.length; j++) {
      if(string[j] === "3" || string[j] === "6" || string[j] === "9")
        check++;
    }
  }

  return check;
}

module.exports = problem3;
