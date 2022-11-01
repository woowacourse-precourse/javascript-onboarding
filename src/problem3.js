function problem3(number) {
  let count = 0;

  // 한번 count369 함수가 실행될 때마다 반환값을 count에 누적시키는 반복문
  for (i = 1; i <= number; i++) {
    count += count369(i);
  }

  return count;
}

// 현재 인자로 들어오는 숫자에 3,6,9 숫자가 몇개인지 반환하는 기능을 하는 함수
const count369 = (num) => {
  const regex = new RegExp(/[369]/g);
  return num.toString().match(regex) ? num.toString().match(regex).length : 0;
};

module.exports = problem3;
