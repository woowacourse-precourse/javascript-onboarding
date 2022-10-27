# 미션 - 온보딩

> ## README 목차
> 1. 🔍 [진행 방식]
> 2. 📮 [미션 제출 방법]
> 3. 🚨 [과제 제출 전 체크 리스트 - 0점 방지]
> 4. 💥 [테스트 실행 가이드]
> 5. 🚀 [기능 요구 사항]
> 6. 🎯 [프로그래밍 요구 사항]
> 7. 💥 [과제 진행 요구 사항]
> 8. 🛒 [구현 기능 목록]
> 9. ✅ [테스트 결과]
> 10. 💎 [새로 알게 된 점]
> 11. ❓ [아쉬운 점 & 궁금한 점]

---
## 1. 🔍 진행 방식

- 미션은 **기능 요구 사항, 프로그래밍 요구 사항, 과제 진행 요구 사항** 세 가지로 구성되어 있다.
- 세 개의 요구 사항을 만족하기 위해 노력한다. 특히 기능을 구현하기 전에 기능 목록을 만들고, 기능 단위로 커밋 하는 방식으로 진행한다.
- 기능 요구 사항에 기재되지 않은 내용은 스스로 판단하여 구현한다.
---
## 2. 📮 미션 제출 방법

- 미션 구현을 완료한 후 GitHub을 통해 제출해야 한다.
  - GitHub을 활용한 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서를 참고해
    제출한다.
- GitHub에 미션을 제출한 후 [우아한테크코스 지원](https://apply.techcourse.co.kr) 사이트에 접속하여 프리코스 과제를 제출한다.
  - 자세한 방법은 [제출 가이드](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse#제출-가이드) 참고
  - **Pull Request만 보내고 지원 플랫폼에서 과제를 제출하지 않으면 최종 제출하지 않은 것으로 처리되니 주의한다.**
---
## 3. 🚨 과제 제출 전 체크 리스트 - 0점 방지

- 기능 구현을 모두 정상적으로 했더라도 **요구 사항에 명시된 출력값 형식을 지키지 않을 경우 0점으로 처리**한다.
- 기능 구현을 완료한 뒤 아래 가이드에 따라 테스트를 실행했을 때 모든 테스트가 성공하는지 확인한다.
- **테스트가 실패할 경우 0점으로 처리**되므로, 반드시 확인 후 제출한다.
---
### 4. 💥 테스트 실행 가이드

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

## 5. 🚀 기능 요구 사항

아래의 7가지 기능 요구 사항을 모두 해결해야 한다.

1. [문제 1](docs/PROBLEM1.md)
2. [문제 2](docs/PROBLEM2.md)
3. [문제 3](docs/PROBLEM3.md)
4. [문제 4](docs/PROBLEM4.md)
5. [문제 5](docs/PROBLEM5.md)
6. [문제 6](docs/PROBLEM6.md)
7. [문제 7](docs/PROBLEM7.md)

---

## 6. 🎯 프로그래밍 요구 사항

- Node.js 14 버전에서 실행 가능해야 한다. **Node.js 14에서 정상적으로 동작하지 않을 경우 0점 처리한다.**
- `package.json`을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현한다.
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그램 구현이 완료되면 `ApplicationTest`의 모든 테스트가 성공해야 한다. **테스트가 실패할 경우 0점 처리한다.**
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.

---

## 7. ✏️ 과제 진행 요구 사항

- 미션은 [javascript-onboarding](https://github.com/woowacourse-precourse/javascript-onboarding) 저장소를 Fork & Clone해 시작한다.
- 과제 진행 및 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서를 참고한다.

--- 
## 8. 🛒 구현 기능 목록
### 1번 ✅
- 제시된 입력 받기 ⭕
  - pobi와 crong의 [왼쪽 페이지, 오른쪽 페이지]를 컴퓨터로부터 입력받기 ⭕ 
  - (예외 1) 왼쪽 페이지와 오른쪽 페이지가 불연속되면 안됨 ⭕ 
  - (예외 2) 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수여야 함 ⭕
  - (예외 3) 오른쪽 페이지는 왼쪽 페이지보다 한 쪽수 많아야 함 ⭕
  - (예외 4) 시작 면이나 마지막 면이 나오면 안됨 ⭕
- 각각의 점수 계산하기 ⭕
  - 왼쪽 페이지 계산시 가장 큰 수 구하기 ⭕
  - 오른쪽 페이지 계산시 가장 큰 수 구하기 ⭕
  - 위 둘 중 큰 수를 구하여 내 점수로 하기 ⭕
- 승패 나누기 ⭕ 
  - 각각의 점수를 비교 ⭕
  - 높은 사람이 이김 ⭕
- 결과 출력하기 ⭕
  - pobi가 이기면 1 출력 ⭕ 
  - crong이 이기면 2 출력 ⭕
  - (예외)는 -1 출력 ⭕

### 2번
- 입력 받기 ⭕
  - 길이가 1 이상 1000 이하인 문자열을 컴퓨터로부터 입력받기 ⭕
  - 문자열은 소문자로만 이루어져 있다 ⭕
- 중복 문자 삭제하기 ⭕
  - 한 문자가 2개 이상 이어져 있으면 그 문자열을 삭제하기 ⭕
  - 중복된 문자가 더이상 없을 때까지 위의 과정을 반복하기 ⭕
- 출력하기 ⭕
  - 결과값을 반환하기 ⭕

### 3번 ✅
- 제시된 숫자 받기 ⭕
  - 1 이상 10,000 이하인 자연수 ⭕
- 1부터 받은 숫자까지 3, 6, 9가 몇 번이나 들어가는지 확인하기 ⭕
- 결과 출력하기 ⭕

### 4번 
- 

---

## 9. ✅ 테스트 결과
### 1번 👉 통과!
√ case1 (2 ms)
√ case2 (1 ms)
√ case3

### 2번


### 3번 👉 통과!
√ case1 (2 ms)
√ case2
---

## 10. 💎 새로 알게 된 점
### 1번
- 숫자의 각 자릿수를 더하거나 곱하는 법을 알게됐다. 숫자이기 때문에 10으로 나눠서 각 자릿수를 구하는 법만 생각했는데, 문자형으로 변환하여 각 자리수를 더하거나 곱하는 것이 더 편리했다.
- Math.max(a, b, c, ...)를 사용하는 법을 알게됐다. 파이썬에서는 max(a, b, c ...)라고 하면 됐었는데, 자바스크립트에서는 Math.max()라고 해야 했다.
- 리턴하는 법에 대해 알게 됐다. 평소 알고리즘 문제를 풀 때는 함수를 만들지 않아 리턴을 잘 사용하지 않아서 낯설었는데, 이번 문제를 풀면서 적절한 위치에서 리턴하여 함수를 사용하는 방법을 조금 더 알게 되었다.

### 2번
- 코드를 작성하면서 자바스크립트 코딩/네이밍 컨벤션을 자주 찾아봤다. 항상 `for (let i = 0; i < arr.length; i++) {}`가 맞는지 아니면 `for (let i=0; i<arr.length; i++) {}` 이게 맞는지 소소하게 궁금했엇는데, 전자가 맞다는 걸 알게되었다.
- 

### 3번
- 좀 더 익숙한 파이썬으로 코드를 짜고 이를 자바스크립트로 옮기기도 했다.
- String 내장 함수를 이용하여 숫자 -> 문자로 형변환을 한 후 split 내장 함수를 이용하여 모두 한 자리의 문자로 나누었다. 3, 6, 9가 몇 번 들어갔는지를 세면 되므로 일단 한 글자로 만들어 나중에 이 한 글자가 3 혹은 6 혹은 9인지를 확인하면 손쉽게 문제를 풀 수 있을 것 같다. 
- flat 내장 함수를 이용하여 2차원 리스트를 1차원 리스트로 변환했다. 
- filter 내장 함수를 이용하여 split으로 나뉘어진 문자가 3, 6, 9이면 length()로 세어 count에 저장했다. 


---

## 11. ❓ 아쉬운 점 & 궁금한 점
### 1번
- 각각의 점수를 계산하는 부분에서 pobi와 crong 각각의 왼쪽 합/왼쪽 곱/왼쪽 합과 곱 중 큰 수/오른쪽 합/오른쪽 곱/오른쪽 합과 곱 중 큰 수/ 왼쪽 합과 곱 중 큰 수와 오른쪽 합과 곱 중 큰 수 중 큰 수 변수를 구했었는데 이렇게 변수를 많이 써서 푸는게 맞는 것인지 궁금하다. 변수를 선언하지 않고 Math.max() 안에 넣어서 무조건 큰 수를 구하기만 하면 되는 것인지!
- 주석을 어느정도 써야 하는지 궁금하다. 일단 최소화하여 5줄 쓴 상태이다.
- 슬랙에서 어떤 분이 이 문제를 푸는 코드가 35줄 나왔다고 하셨는데, 나는 80줄이다.. 그래서 그 분과 나의 코드는 무엇이 다른지 알고 싶다.