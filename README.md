## [문제 1] 구현할 기능 목록

* 입력값 `validationArr` 함수 생성 
  + 배열 크기(`array.length`)가 2인지 확인
  + 왼쪽, 오른쪽 값 차이가 1만 나야함

* 전체 프로세서관리 `pageGameApp` 함수 생성
  + `validationArr` 함수 통과 후 전체 프로세스를 관리할 함수로 구현
  + 두 값을 받아서 같으면 0, A가 크면 1, B가 크면 2 를 리턴

* 수를 받아서 각 자리를 배열로 return 하는 `splitNumber` 함수 구현
  > B안 선택: 변수의 형태가 변형되지 않도록 하는 것이 합산시 오류발생이 낮아 택함.
  + [ ] A안: `split()` 내부 함수로 구현하는 방법
    - 주의사항: 형이 String으로 바뀌는 문제가 발생할 수 있음.
  + [x] B안: 10으로 나눈 나머지로 일자리부터 빼서 배열 구현 하는 방법
    - ~~일자리부터 처리 되긴 하지만 문제없어보임.~~
    - 내부함수 `unshift()`로 자리수 대로 index 위치 맞춰서 구현.

* 배열 더하기 값 반환 `sumArr` 함수 구현
  + 변수 `totalSum` 에 Arr 값만큼 for문 돌면서 더한 후 totalSum 반환 

* 배열 곱하기 값 반환 `mulArr` 함수 구현
  + 변수 `totalMul` 에 Arr 값만큼 for문 돌면서 곱한 후 totalMul 반환

* 값을 받아 최대값을 리턴하는 maxValueCalculator 함수 구현
  > A안 선택: 비교값 크기가 작아 시간복잡도 차이가 없을 것으로 예상하여, 가독성이 더 좋은 `Math.max()`로 택함.
  + [x] A안: `Math.max()`로 각 왼쪽/오른쪽에 더하기/곱하기 값에서 최대값 반환
  + [ ] B안: for문을 사용해서 4번 돌면서 변수 `maxValue` 랑 비교하여 최대값 반환

***
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