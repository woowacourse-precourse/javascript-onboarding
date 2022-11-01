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

## 과제 별 기능 구현 목록

### problem1

### problem2

1. 알파벳 소문자로만 이루어져 있는지 확인, crpyto가 string인지 확인, 길이가 1 이상 1000이하인지 확인 (예외처리)
2. 중복되는 문자의 시작점 찾는 함수 구현
3. 중복이 끝나는 지점 찾는 함수 구현
4. 적용 및 반환

### problem3

1. 1~number 까지의 수에 박수를 각각 몇 번 쳐야하는지 배열로 반환하는 함수
2. 배열의 총합을 구하는 함수

### problem4

1. ascii코드를 통해 소문자와 대문자로 나누어 청개구리 사전에 따라 변환하는 함수 구현
2. answer array를 하나의 문자열로 합쳐서 return으로 끝냄

### problem5

1. result 배열과 moneyUnit 배열 생성
2. 큰 단위부터 그 금액보다 크다면 계속 빼면서 result += 1 하는 함수 구현
3. 반복문을 통해 2번 함수 실행
4. result 배열 반환

### problem6

1. 배열메서드 search(~) !== -1 를 통해 두개의 문자가 forms에 존재하는지 단어들에 포함되는지를 확인한다.
2. 중복을 제거하기 위해 object로 바꿔준다.
3. object를 이메일을 기준으로 정렬해주며 return 해준다.

### problem7

1. user의 친구를 확인하는 함수 구현
2. 친구관계가 아닌 사람들 point의 key 값으로 추가하는 함수
3. point의 key로 있는 사람들의 친구들 중 user의 친구로 있다면 value +10해주는 함수 구현
   4.visitor는 돌면서 userFriends 에 없고 point의 키값으로 없으면 point의 키로 등록하면서 동시에 value + 1
4. userFriends 에 없고 point의 키값으로 있으면 value + 1 userFriends 에 있으면 무시 하는 함수 구현
5. point 객체 value를 기반으로 정렬 , 같다면 사전순 정렬 하여 상위 5개의 값 result 에 추가하는 함수
