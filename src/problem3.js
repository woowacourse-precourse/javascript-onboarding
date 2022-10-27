function problem3(number) {
  let clap = 0;
  // 1부터 number까지 숫자를 일의 자리의 수부터 쪼개어 배열로 만들어 준다.
  for (let i = 1; i <= number; i++) {
    arrNum = i.toString().split("");
    // 숫자의 최대 자리수를 변수로 지정
    placeValue = arrNum.length;
    // 반복문을 만들어 1의 자리수부터 N의 자리수 까지 3 6 9를 찾는다.
    for (let j = 0; j < placeValue; j++) {
      if (arrNum[j] === "3" || arrNum[j] === "6" || arrNum[j] === "9") clap++;
    }
  }
  return clap;
}

module.exports = problem3;
