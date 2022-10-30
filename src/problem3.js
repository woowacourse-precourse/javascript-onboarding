function problem3(number) {
  let answer = 0;
  //number까지의 숫자를 반환하는 메서드
  for(let i=1; i < number+1; i++) {
    const eachNum = i.toString().split("").map(x => parseInt(x));
    const count = eachNum.filter((element) => 3 === element || 6 === element || 9 === element).length;
    answer += count;
  }
  return answer;
}

module.exports = problem3;
