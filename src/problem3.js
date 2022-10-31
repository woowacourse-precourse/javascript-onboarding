function problem3(number) {
  // number가 1 이상이 아닌 경우 "Error: number는 1이상이어야 합니다"라는 문자열을 반환한다.
  if (number < 1) return "Error: number는 1이상이어야 합니다";

  // number가 10000 이하가 아닌 경우 "Error: number는 10000이하이어야 합니다"라는 문자열을 반환한다.
  if (number > 10000) return "Error: number는 10000이하이어야 합니다";

  // number가 자연수가 아닌 경우 "Error: number는 자연수이어야 합니다"라는 문자열을 반환한다.
  if (!Number.isInteger(number)) return "Error: number는 자연수이어야 합니다";

  // 1부터 number까지의 숫자를 모두 순회하여 순회하는 숫자의 3,6,9 개수를 세어 리턴함.
  let count = 0;

  let i = 1;
  while (i <= number) {
    String(i)
      .split("")
      .forEach((num) => {
        if (num === "3" || num === "6" || num === "9") count++;
      });

    i++;
  }

  return count;
}

module.exports = problem3;
