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

class Frog {
  constructor(word) {
    new ErrorCase(word);
    this.word = word;
  }

  getLowerAlphaList() {
    return Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
  }

  getUpperAlphaList() {
    return Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
  }

  makeFrogDic() {
    const alphabet = [...this.getLowerAlphaList(), ...this.getUpperAlphaList()];
    const reverseAlphabet = [
      ...this.getLowerAlphaList().reverse(),
      ...this.getUpperAlphaList().reverse(),
    ];

    return [...alphabet].reduce(
      (acc, cur, index) => ({ ...acc, [cur]: reverseAlphabet[index] }),
      {}
    );
  }

  checkAlpha(alpha) {
    return /[a-zA-Z]/.test(alpha) ? this.makeFrogDic()[alpha] : alpha;
  }

  say() {
    return this.word
      .split("")
      .map((alpha) => this.checkAlpha(alpha))
      .join("");
  }
}

function problem4(word) {
  const frog = new Frog(word);
  return frog.say();
}

module.exports = problem4;
