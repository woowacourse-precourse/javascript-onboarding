class ErrorCase {
  constructor(word) {
    this.word = word;
    this.checkLimit();
  }

  checkLimit() {
    if (!(1 <= this.word.length && this.word.length <= 1000)) {
      throw new Error("input 양식에 에러가 발생했습니다!!");
    }
  }
}

function problem4(word) {
  console.log(word.length);
  new ErrorCase(word);
}

/*
  에러케이스 - 1000자 이상 테스트 성공 but 너무 길어 담지 않음
  problem4("");
*/

module.exports = problem4;
