function problem3(number) {
  let answer = 0;

  // cf. 1부터 숫자를 하나씩 대면서, 3, 6, 9가 들어가는 숫자는 숫자를 말하는 대신 3, 6, 9의 개수만큼 손뼉을 쳐야 한다.
  for (let i=1; i<=number; i++) {
    const strNum = String(i);
    for (let j=0; j<strNum.length; j++) {
      if (strNum[j] === '3' || strNum[j] === '6' || strNum[j] === '9') answer++;
    }
  }

  // cf. 1부터 number까지 손뼉을 몇 번 쳐야 하는지 횟수를 return
  return answer;
}

console.log(problem3(13));
console.log(problem3(33));

module.exports = problem3;
