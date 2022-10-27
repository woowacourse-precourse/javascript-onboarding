class ErrorCase {
  constructor(forms) {
    this.forms = forms;
    this.checkAllError();
  }

  checkFormsLimit() {
    if (1 <= this.forms.length && this.forms.length <= 10000) {
      return true;
    }

    return false;
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

function problem6(forms) {
  new ErrorCase(forms);
}

/* 
  에러 케이스 테스트
  ok
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ]);

  영어 이름
  problem6([
    ["jm@email.com", "hi"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ]);

  problem6([
    ["jm@email.com", "hi이름"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ]);

  다른 도메인
  problem6([
    ["jm@naver.com", "제이름"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ]);

  No 이름
  problem6([
    ["jm@naver.com", ""],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ]);

  email 이름 길이 초과
  problem6([
    ["jalkdsjfkljaslkdjflasjaslkjasdfljlkasm@naver.com", "하이"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ]);

  이름 길이 초과
  problem6([
    [
      "jsm@naver.com",
      "하이미나얼미나얼미나얼미나얼미나얼미나얼미나얼미나얼미나얼미나얼미나얼",
    ],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ]);
*/

module.exports = problem6;
