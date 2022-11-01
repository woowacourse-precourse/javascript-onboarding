class ErrorCase {
  constructor(word) {
    this._word = word;
    this.checkLimit();
  }

  checkLimit() {
    return 1 <= this._word.length && this._word.length <= 1000;
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
    this._word = word;
  }

  getFrogDicTranslation() {
    const momLanguage = Dictionary.momFor();
    const frogLanguage = Dictionary.frogFor();

    return momLanguage.reduce(
      (acc, cur, index) => ({
        ...acc,
        [cur]: frogLanguage[index],
      }),
      {}
    );
  }

  translate(alpha) {
    return /[a-zA-Z]/.test(alpha) ? this.getFrogDicTranslation()[alpha] : alpha;
  }

  say() {
    return this._word
      .split("")
      .map((alpha) => this.translate(alpha))
      .join("");
  }
}

function problem4(word) {
  const error = new ErrorCase(word);

  if (!error.checkLimit()) {
    console.log("input 양식이 제한사항에 맞게 주어지지 않았습니다.");
    return;
  }

  const frog = new Frog(word);
  return frog.say();
}

module.exports = problem4;
