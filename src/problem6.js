class ErrorCase {
  constructor(forms) {
    this._forms = forms;
  }

  checkFormsLimit() {
    return 1 <= this._forms.length && this._forms.length <= 10000;
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
    return this._forms
      .map((form) => form[1])
      .every(
        (name) => this.isOnlyKOR(name) && 1 <= name.length && name.length < 20
      );
  }

  checkEmail() {
    return this._forms
      .map((form) => form[0])
      .every(
        (email) =>
          this.isCorrectEmailDomain(email) &&
          11 <= email.length &&
          email.length < 20
      );
  }

  checkAllError() {
    return this.checkKORName() && this.checkFormsLimit() && this.checkEmail();
  }
}

class UAHTechCourse {
  constructor(forms) {
    this._forms = forms;
  }

  changeNameToTwoWord(name) {
    return name
      .split("")
      .slice(1)
      .map((word, idx) => [name[idx], word].join(""));
  }

  getEmailToManyTwoWords() {
    return this._forms.flatMap(([email, name]) => ({
      twoWords: this.changeNameToTwoWord(name),
      email: email,
    }));
  }

  getTwoWordToManyEmails() {
    const resultMap = new Map();

    this.getEmailToManyTwoWords().forEach(({ twoWords, email }) => {
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
        [...this.getTwoWordToManyEmails().values()].flatMap((emailList) =>
          emailList.length > 1 ? emailList : []
        )
      ),
    ].sort();
  }
}

function problem6(forms) {
  const error = new ErrorCase(forms);

  if (!error.checkAllError()) {
    console.log("input 양식이 제한사항에 맞게 주어지지 않았습니다.");
    return;
  }

  const uah = new UAHTechCourse(forms);

  return uah.getResult();
}

module.exports = problem6;
