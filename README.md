# 🌈 문제 구현 시 신경썼던 점

1. 각 문제에 대해서 제한 사항 및 에러 관련 로직과 메인 로직 두 부분을 기능 목록으로 나누어 구현하였습니다.
2. 추가적으로 리팩토링 과정을 통해서 클래스 분리 및 함수 명 변경들을 하면서 최대한 클린코드로 작성하도록 노력하였습니다.
3. 함수 선언 시 해당 함수의 동작을 정확히 표현하여 주석없이도 제 코드를 잘 읽히게 코드를 짜고 싶었습니다.
4. 해당 함수나 클래스에 네이밍과 관련한 하나의 책임만을 부여하려고 노력했습니다. 쉽게 말해, 해당 함수명과 관련한 로직에 대한 내용만 포함하고 다른 로직은 넣지 않도록 노력하였습니다.

<br />

# 📌 회고 링크

- [우아한 테크코스 프리코스 1주차 회고 링크](https://velog.io/@turtle601/%ED%9A%8C%EA%B3%A0-%EC%9A%B0%EC%95%84%ED%95%9C-%ED%85%8C%ED%81%AC%EC%BD%94%EC%8A%A4-5%EA%B8%B0-1%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0)

<br />

# 📝 1주 동안 내가 학습하고 정리한 블로그 글

- [프로그래밍 패러다임에 대해(선언형 vs 명령형)](https://velog.io/@turtle601/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%ED%8C%A8%EB%9F%AC%EB%8B%A4%EC%9E%84%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%A0%EC%96%B8%ED%98%95-vs-%EB%AA%85%EB%A0%B9%ED%98%95)

- [함수형 프로그래밍에 대해](https://velog.io/@turtle601/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%97%90-%EB%8C%80%ED%95%B4)

- [[JS] 객체지향 프로그래밍에 대해](https://velog.io/@turtle601/JS-%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%97%90-%EB%8C%80%ED%95%B4)

- [[JS] 좋은 객체 지향 설계를 위해서(/w SOLID)](https://velog.io/@turtle601/JS-%EC%A2%8B%EC%9D%80-%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5-%EC%84%A4%EA%B3%84%EB%A5%BC-%EC%9C%84%ED%95%B4%EC%84%9C-SOLID-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4)

<br />

# ✅ 기능 목록

**1번 문제**

- [x] 제한 사항 및 에러 관련 로직인 PageError 클래스 구현
- [x] 메인 로직인 Calculator 클래스 구현

**2번 문제**

- [x] 제한 사항 관련 로직인 ErrorCase 클래스 구현
- [x] 메인 로직인 Password 클래스 구현

**3번 문제**

- [x] 제한 사항 관련 로직인 ErrorCase 클래스 구현
- [x] 369를 확인하는 369함수와 메인 로직 구현

**4번 문제**

- [x] 제한 사항 관련 로직인 ErrorCase 클래스 구현
- [x] 메인 로직인 Frog 클래스 구현

**5번 문제**

- [x] 제한 사항 관련 로직인 ErrorCase 클래스 구현
- [x] 메인 로직인 Bank 클래스 구현

**6번 문제**

- [x] 제한 사항 관련 로직인 ErrorCase 클래스 구현
- [x] 메인 로직인 UAHTechCourse 클래스 구현

**7번 문제**

- [x] 제한 사항 관련 로직인 ErrorCase 클래스 구현
- [x] 메인 로직인 SNSAlgorithm 클래스 구현

<br />

# 미션 - 온보딩

## 🔍 진행 방식

- 미션은 **기능 요구 사항, 프로그래밍 요구 사항, 과제 진행 요구 사항** 세 가지로 구성되어 있다.
- 세 개의 요구 사항을 만족하기 위해 노력한다. 특히 기능을 구현하기 전에 기능 목록을 만들고, 기능 단위로 커밋 하는 방식으로 진행한다.
- 기능 요구 사항에 기재되지 않은 내용은 스스로 판단하여 구현한다.

## 📮 미션 제출 방법

- 미션 구현을 완료한 후 GitHub을 통해 제출해야 한다.
  - GitHub을 활용한 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서를 참고해
    제출한다.
- GitHub에 미션을 제출한 후 [우아한테크코스 지원](https://apply.techcourse.co.kr) 사이트에 접속하여 프리코스 과제를 제출한다.
  - 자세한 방법은 [제출 가이드](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse#제출-가이드) 참고
  - **Pull Request만 보내고 지원 플랫폼에서 과제를 제출하지 않으면 최종 제출하지 않은 것으로 처리되니 주의한다.**

## 🚨 과제 제출 전 체크 리스트 - 0점 방지

- 기능 구현을 모두 정상적으로 했더라도 **요구 사항에 명시된 출력값 형식을 지키지 않을 경우 0점으로 처리**한다.
- 기능 구현을 완료한 뒤 아래 가이드에 따라 테스트를 실행했을 때 모든 테스트가 성공하는지 확인한다.
- **테스트가 실패할 경우 0점으로 처리**되므로, 반드시 확인 후 제출한다.

### 테스트 실행 가이드

- 테스트 패키지 설치를 위해 `Node.js` 버전 `14` 이상이 필요하다.
- 다음 명령어를 입력해 패키지를 설치한다.

```bash
npm install
```

- 설치가 완료되었다면, 다음 명령어를 입력해 테스트를 실행한다.

```bash
npm test
```

---

## 🚀 기능 요구 사항

아래의 7가지 기능 요구 사항을 모두 해결해야 한다.

1. [문제 1](docs/PROBLEM1.md)
2. [문제 2](docs/PROBLEM2.md)
3. [문제 3](docs/PROBLEM3.md)
4. [문제 4](docs/PROBLEM4.md)
5. [문제 5](docs/PROBLEM5.md)
6. [문제 6](docs/PROBLEM6.md)
7. [문제 7](docs/PROBLEM7.md)

---

## 🎯 프로그래밍 요구 사항

- Node.js 14 버전에서 실행 가능해야 한다. **Node.js 14에서 정상적으로 동작하지 않을 경우 0점 처리한다.**
- `package.json`을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현한다.
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그램 구현이 완료되면 `ApplicationTest`의 모든 테스트가 성공해야 한다. **테스트가 실패할 경우 0점 처리한다.**
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.

---

## ✏️ 과제 진행 요구 사항

- 미션은 [javascript-onboarding](https://github.com/woowacourse-precourse/javascript-onboarding) 저장소를 Fork & Clone해 시작한다.
- 과제 진행 및 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서를 참고한다.
