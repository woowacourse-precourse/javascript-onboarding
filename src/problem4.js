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

class Dictionary {
  static momFor() {
    return [
      ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65)),
      ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97)),
    ];
  }

  static frogFor() {
    return [
      ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(90 - i)),
      ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(122 - i)),
    ];
  }
}

class Frog {
  constructor(word) {
    new ErrorCase(word);

    this.word = word;
  }

  makeFrogDic() {
    return Dictionary.momFor().reduce(
      (acc, cur, index) => ({
        ...acc,
        [cur]: Dictionary.frogFor()[index],
      }),
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
