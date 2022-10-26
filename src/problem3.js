function problem3(number) {
  let handsClap = 0;

  for (let i = 1; i <= number; i++) {
    let num = i.toString().split(""); // 숫자를 순회할 수 있는 배열로 변경
    num.map((n) => {
      if (n === "3" || n === "6" || n === "9") handsClap++;
    });
  }

  return handsClap;
}

module.exports = problem3;
