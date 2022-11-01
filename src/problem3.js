const problem3 = (number) => {
  let answer;
  answer = countClap(number);
  return answer;
};

const countClap = (lastNumber) => {
  let clapCount = 0;
  for (let nowNumber = 1; nowNumber <= lastNumber; nowNumber++) {
    let countNow = 0;
    parseNowNumber = nowNumber
      .toString()
      .split("")
      .map((digits) => parseInt(digits));
    countNow = parseNowNumber.reduce(
      (cnt, element) => cnt + (element === 3 || element === 6 || element === 9),
      0
    );
    clapCount += countNow;
  }
  return clapCount;
};

/*
배달이가 좋아하는 369게임을 하고자 한다. 놀이법은 1부터 숫자를 하나씩 대면서,
 3, 6, 9가 들어가는 숫자는 숫자를 말하는 대신 3, 6, 9의 개수만큼 손뼉을 쳐야 한다.
숫자 number가 매개변수로 주어질 때, 
1부터 number까지 손뼉을 몇 번 쳐야 하는지 횟수를 구해라 
=> 1 ~ 해당 숫자 까지 구해서 3이 있으면 countClap += 1을 통해 구현
*/
module.exports = problem3;
