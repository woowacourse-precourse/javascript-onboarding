class ErrorCase {
  constructor(forms) {
    this.forms = forms;
    this.checkAllError();
  }

  checkFormsLimit() {
    return 1 <= this.forms.length && this.forms.length <= 10000;
  }

  isOnlyKOR(name) {
    return (
      !!name.match(/[가-힣]/g) && name.match(/[가-힣]/g).length === name.length
    );
  }

  isCorrectEmailDomain(email) {
    return (
      !!email.match(/@email.com$/g) && email.match(/@email.com$/g).length === 1
    );
  }

  checkKORName() {
    return this.forms
      .map((form) => form[1])
      .every(
        (name) => this.isOnlyKOR(name) && 1 <= name.length && name.length < 20
      );
  }

  checkEmail() {
    return this.forms
      .map((form) => form[0])
      .every(
        (email) =>
          this.isCorrectEmailDomain(email) &&
          11 <= email.length &&
          email.length < 20
      );
  }

  checkAllError() {
    if (!this.checkKORName()) {
      throw new Error("input 양식 중 한글 이름 양식에 에러가 발생하였습니다.");
    }

    if (!this.checkFormsLimit()) {
      throw new Error("input 양식 중 제한된 input 길이에 벗어났습니다.");
    }

    if (!this.checkEmail()) {
      throw new Error("input 양식 중 email 이름 양식에 에러가 발생하였습니다.");
    }
  }
}

class UAHTechCourse {
  constructor(forms) {
    new ErrorCase(forms);

    this.forms = forms;
  }

  changeNameToTwoWord(name) {
    return name
      .split("")
      .slice(1)
      .map((word, idx) => [name[idx], word].join(""));
  }

  getEmailBook() {
    return this.forms.flatMap(([email, name]) => ({
      twoWords: this.changeNameToTwoWord(name),
      email: email,
    }));
  }

  getTwoWordBook() {
    const resultMap = new Map();

    this.getEmailBook().forEach(({ twoWords, email }) => {
      twoWords.forEach((twoWordName) => {
        const defaultWord = resultMap.get(twoWordName) || [];

        resultMap.set(twoWordName, [...defaultWord, email]);
      });
    });

    return resultMap;
  }

  getResult() {
    return [
      ...new Set(
        [...this.getTwoWordBook().values()].flatMap((emailList) =>
          emailList.length > 1 ? emailList : []
        )
      ),
    ].sort();
  }
}

function problem6(forms) {
  const uah = new UAHTechCourse(forms);

  return uah.getResult();
}

module.exports = problem6;
