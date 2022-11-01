const CLAP_NUMBER = [3, 6, 9];

// 총 쳐야하는 박수 개수
function problem3(number) {
  let handsClap = 0;

  for (let i = 1; i <= number; i++) {
    const num = i.toString().split(""); // 숫자를 순회할 수 있는 배열로 변경
    handsClap += oneNumberClap(num);
  }

  return handsClap;
}

// 하나의 숫자에 치는 박수 개수
function oneNumberClap(num) {
  let clap = 0;
  num.map((n) => {
    if (CLAP_NUMBER.includes(Number(n))) clap++;
  });

  return clap;
}

module.exports = problem3;
