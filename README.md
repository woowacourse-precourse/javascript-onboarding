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

---

## 📝 기능 목록

1. [문제 1](src/problem1.js)

   - [x] 예외 처리 코드 작성 -> 바로 -1 return
     - [x] 각 입력 값의 왼쪽 페이지가 짝수일 경우
     - [x] 각 입력 값의 오른쪽 페이지가 홀수일 경우
     - [x] 각 페이지 번호가 연속되지 않을 경우
     - [x] 입력 값이 1보다 작거나 400보다 클 경우
   - [x] 게임 규칙 2, 3에 따라 입력된 각 페이지(왼쪽, 오른쪽) 번호에 대해서 가장 큰 수를 구하는 함수 작성
   - [x] 함수를 통해 구한 pobi의 점수와 crong의 점수 비교
   - [x] 비교값에 따른 결과 반환

2. [문제 2](src/problem2.js)
   - [x] 중복 문자에 해당하는 정규표현식 작성
   - [x] 중복 문자가 존재할 경우 제거하고 제거한 암호문 다시 재귀
   - [x] 중복 문자가 존재하지 않을 경우 해당 문자열 반환
3. [문제 3](src/problem3.js)
   - [x] 1부터 number까지 숫자를 element로 갖는 배열 생성
   - [x] join을 통해 하나의 문자열 변환
   - [x] 문자열에서 3, 6, 9를 제거
   - [x] 처음 문자열과 길이 비교 => 해당 값이 박수 횟수
4. [문제 4](src/problem4.js)
   - [x] a ~ z, A ~ Z까지의 청개구리 사전 작성
   - [x] word를 배열로 변환
   - [x] 사전을 참고하여 문자열 반환
5. [문제 5](src/problem5.js)
   - [x] 50000, 10000, 5000, 1000, 500, 100, 50, 10, 1을 key로 갖는 Map 자료구조 작성
   - [x] 입력된 money에 대해 Map.keys()로 순회하며 각 금액의 몫을 구하고 money에서 차감
   - [x] Map.values()를 반환
6. [문제 6](src/problem6.js)
   - [x] forms의 닉네임을 2글자 단위로 나눠가며 pair 정보 담을 Map의 key 생성
     - [x] 생각해볼 수 있는 예외사항 : 2글자 이상 중복되는 경우는 이미 2글자 겹치는 경우로 포함
   - [x] 해당 key에 해당하는 이메일 @+도메인은 제거하고 Map의 value인 array에 push
   - [x] forms 순회를 마치고 pair 정보 담은 Map에서 value의 길이가 2일 경우 element들을 모두 Set에 add
   - [x] Set을 Array화 하고 정렬 수행
   - [x] 정렬된 배열에 element마다 @+도메인 추가해 반환
7. [문제 7](src/problem7.js)
   - [x] friends를 순회하며 각 친구 관계를 key, value & value, key로 저장(value는 array)
   - [x] 각 key 값에 대해 방문 여부 위한 visited object, score Map 생성
   - [x] user를 기준으로 dfs 수행 -> depth 2일 경우 score Map의 값 + 10
   - [x] visitors를 순회하며 score Map의 점수 + 1
   - [x] score Map -> array 변환
   - [x] 정렬한 array 정렬(점수 기준, 동일할 경우 이름 순)
   - [x] array의 index 0만 반환
