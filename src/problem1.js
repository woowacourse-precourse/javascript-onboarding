//페이지 유효성 검사
const isValidPage = (book1, book2) => {
  if (book1[0] <= 1 || book1[2] >= 400 || book2[0] <= 1 || book2[2] >= 400)
    return false;
  else if (book1[1] - book1[0] !== 1) return false;
  else if (book2[1] - book2[0] !== 1) return false;
  else return true;
};

// 각 자리수를 더해서 반환하는 함수
const sum = (book) => {
  const bookToString = book.toString().split("");
  let sum = 0;
  bookToString.forEach((num) => {
    sum += Number(num);
  });

  return sum;
};

function problem1(pobi, crong) {
  var answer;
  return answer;
}

// // 여기에 테스트
// let page = ;

// console.log(sum(page));

// module.exports = problem1;
