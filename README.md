***
## 📋 [문제 1] 구현할 기능 목록 

* `pageGameApp` 함수 : 전체 프로세서를 관리함.  
  + `checkValidation` 함수 통과 후 전체 프로세스를 관리할 함수로 구현
  + 두 값을 받아서 같으면 0, A가 크면 1, B가 크면 2 를 리턴                                                                   

* `checkValidation` 함수 : input된 값 데이터 유효성 검사.
  + 왼쪽, 오른쪽 값 차이가 1만 나야함.
  + 입력값이 1이상 400이하여야 함.

* `splitNumber` 함수 : 수를 받아서 수를 한 자리로 나눠서 배열로 리턴하는 함수.
  + 📮 알고리즘 선택
    - [x] A안: `split()` 내부 함수로 구현하는 방법.
      - 주의사항: 형이 String으로 바뀌는 문제가 발생할 수 있음.
    - [ ] B안: 10으로 나눈 나머지로 일자리부터 빼서 배열 구현 하는 방법
      - 내부함수 `unshift()`로 자리수 대로 index 위치 맞춰서 구현.
    > ❓선정 이유 : 코드를 줄여서 코드 가독성을 늘리는 것으로 정함. `map(Number)`를 통하여 반환할 때 숫자형으로 변경 후 리턴함.

* `splitNumberSum` 함수 : 배열 전부를 더한 후 전체 합계 반환.
  + 변수 `totalSum` 에 Arr 값만큼 for문 돌면서 더한 후 totalSum 반환.

* `splitNumberMul` 함수 : 배열 전부를 곱한 후 전체 곱한 값 반환.
  + 변수 `totalMul` 에 Arr 값만큼 for문 돌면서 곱한 후 totalMul 반환.

* `maxValueCalculator` 함수 : 전체 값을 입력하여 최대값을 반환.
  + 📮 알고리즘 선택
    - [x] A안: `Math.max()`로 각 왼쪽/오른쪽에 더하기/곱하기 값에서 최대값 반환
    - [ ] B안: for문을 사용해서 4번 돌면서 변수 `maxValue` 랑 비교하여 최대값 반환
    > ❓선정 이유 : 비교값 크기가 작아 시간복잡도 차이가 없을 것으로 예상하여, 가독성이 더 좋은 `Math.max()`로 택함.

***

## 📋 [문제 2] 구현할 기능 목록

* 📮 전체 알고리즘 선택
  + [ ] A안 : Stack 배열을 만들어서 한글자씩 중복문자 체크하며, `push()` / `pop()` 으로 채워넣는 방법.
    - 단계별로 삭제가 아닌 앞에서부터 하나씩 소거해가면서 처리.
  + [ ] B안 : 문자 하나씩 앞에서부터 연속된 글자를 파악 후 단계별로 삭제하는 방법.
  + [x] C안 : Queue의 원리를 이용하며, 함수를 재귀하여, 단계적으로 삭제하는 방법. 
  > ❓선정 이유 : A안은 예외상황 있음 : `"zyelleyyez" > 기대값: "zyz" / 출력값 : "zez"` 단계별로 삭제가 되지 않아 문제발생 (1단계에서 `ll` 과 `yy` 가 먼저 삭제된 후 2단계에서 `eee`가 한번에 지워져야 됨), B안은 `join("")`을 반복할 때 마다 써야하고 for문이 2중으로 들어가야함.

* `cryptogramSolver` 함수 : 전체 프로세서를 관리함.
  + `removeDuplicateChar` 함수에 input 받은 문자열을 `split`으로 문자별로 나눠서 보냄.
  + return 값: 함수 `removeDuplicateChar` 반환값.

* `removeDuplicateChar` 함수 : 연속된 중복문자를 제거해주는 함수.
  + 중복 글자가 없을 때까지 단계에 걸쳐서 재귀로 반복
  + 이전 글자를 변수 `beforeChar`에 넣어둠. 
    - `isBeforeDuplicate` 변수 : [이전 단계]에 `beforeChar`와 `nowChar`가 같았다면`true`, 달랐다면 `false`
    - `isDeleteStep` 변수 : `beforeChar`을 통해서 한 번이라도 삭제를 했다면 `true`. (재귀가 시작될 때마다 default 값은 `false`)
  + `nextCryptogramCollection` 배열 : 다음 재귀호출에 입력될 중복값이 아닌 값을 쌓아두는 배열

***
## 📋 [문제 3] 구현할 기능 목록

* `game369App` 함수 : 전체 프로세서를 관리함.

* `createNumberCollection` 함수 : input의 크기만큼의 Array 생성 후, 각 index의 value는 'index+1'를 넣어서 return 함.

* `getCount369` 함수 : 전체 배열을 `join("")`을 통해 한 글자로 합친 후, '3','6','9' 의 각 갯수를 return 함.

***
## 📋 [문제 4] 구현할 기능 목록

* 📮 전체 알고리즘 선택
  + [X] A안: UTF-16 코드를 활용할 수 있는 내장함수 `String.prototype.charCodeAt(index)`과 `String.fromCharCode(number)`을 사용해서 한 번 에 변경할 수 있는 방법
  예) 'E'의 경우 '`(E).charCodeAt(0)` => 69'가 되며, A인 65와의 차이가 4이기 떄문에, Z인 90에 4를 뺀 86의 값을 `String.fromCharCode(86)` 코드로 읽어오게되면, 'V'가 출력됨.

  + [ ] B안: 대소문자 알파벳 배열을 각각 만들어서 입력된 값을 한글자씩 가져와서 대소문자 구분하는 함수를 구현하고, 각 대소문자 순서대로 정렬된 배열에서 위치를 찾아 해당 위치의 역순으로 불러와 나열하는 방법
  예) 'E'의 경우 index 위치가 4이며, 역순으로 `UpperAlphabetArr[-5]`를 불러와서 'V'가 출력됨.

  > ❓선정 이유 : A안이 B안보다 간단한 알고리즘 순서도로 그려지고, 클린 코디로 짜기 좋은 방법일 것 같아 채택.

* `treeFrogApp` 함수 : 전체 프로세서를 관리함.
  + `eachCharCollection` 변수 : 함수 `createStringSplit`에서 받아온다.
  + 해당 배열 길이만큼 반복해서 한글자씩 변경해준다.

* `createStringSplit` 함수 : 입력된 문자열을 배열로 만들어 줌.
  + 입력된 문자열을 `.split("")`로 한글자씩 나눠서 배열을 만든 후, return 한다.

* `convertTreeFrogChar` 함수 : 입력된 UTF16코드를 알파벳인지 확인한 후, 반대로 변경해서 문자로 변경하여 return 함.

* `convertUTF16(char)` 함수 : 입력된 문자를 UTF16코드로 변경해 줌.

* `convertReverseCode(utf16Code)` 함수 : 입력된 숫자에 반대되는 문자로 출력해 줌.

* `convertChar(utf16Code)` 함수 : 입력된 UTF16코드를 문자로 변경해 줌.

* `checkAlphabet(utf16Code)` 함수 : 입력된 UTF-16 코드가 알파벳인지 판단해 줌. 
  + 대문자 A : 65 / 대문자 Z : 90 / 소문자 a : 97/ 소문자 z : 122
  + 알파벳이 아니면, `false`를 return 하게 구현.

* `convertString` 함수 : 배열을 `.join("")`을 통해 한 문자열로 다시 만든 후, return 해 줌.

* `checkLowerCase` 함수 : 받아온 `utf16Code`가 소문자인지 boolean 형으로 return 해 줌.

***

## 📋 [문제 5] 구현할 기능 목록

* `withdrawApp` 함수 : 전체 프로세서를 관리함.
  + `billTypeCollection` 배열 : 각 지폐 종류를 배열로 저장하고 선언.
  + `currBillCount` 배열 : `calcWithdraw`에서 반환해주는 지폐 수를 배열에 순차적으로 저장함.
  + billType의 크기만큼, `calcWithdraw`을 호출함.
  + billType의 크기만큼, `curMoney`를 return 한다.

* `createBillType()` 함수 : 지폐 종류가 담긴 배열을 생성.

* `calcWithdraw` 함수 : `money`(현재 금액)과 `billType`(출금할 지폐 크기)를 입력하면, `currAccount`(남은 금액)과 `billCount`(최대 지폐수)를 출력하는 함수

***

## 📋 [문제 6] 구현할 기능 목록

* 전체 프로세서 관리할 `duplicateCheckApp` 함수 생성.
  + set 객체 `emailOfUsedNickName`에 변수 `crewNickName`이 중복되면 그 크루의 이메일 `crewEmail`을 넣어서 저장해놓음.
  + map 객체 `infoOfUsedTwoLetter`에 key값은 닉네임 `crewNickName`을 2글자씩 끊어 놓은 변수 `twoLetterName`가 보관되며, value값에는 해당 닉네임을 사용한 이메일 `crewEmail`을 보관함.
  + 입력된 배열 `forms` 길이만큼 중복닉네임을 걸러내는 작업 반복.
  + return 값 : set 객체 `emailOfUsedNickName`를 배열타입으로 변경 후 sort하여 정렬.

* **(-제거)** ~~`checkValidation` 함수: input된 값 데이터 유효성 검사~~
  + 이메일 길이가 11자이상 20자 미만이 아니면 제거
  + 이메일 `email.com` 아니면 제거
  + 이메일 중복값 제거
  + 닉네임 길이가 2이상 20자 미만이 아니면 제거
  + 닉네임 한글이 아니면 제거

***
## 📋 [문제 7] 구현할 기능 목록

* 함수 `recommendFriendApp` : 전체 프로세서를 관리함.
  + 객체 Map `friendRelationship`에서 친구 관계를 정리하여, 반환값이 점수를 계산하는데 참조됨.
  + 객체 Map `scoreBoard`에서 전체 점수를 정리해서 관리함.
  + 함수 `calcVisitorScore`에서 방문자 점수를 계산함.
  + 함수 `calcFriendScore`에서 점수를 계산함.
  + 함수 `sortByScore`를 활용하여, `score` 기준으로 정렬된 `userId`값이 있는 배열로 반환 받아 5개까지 배열을 잘라서 반환함.

* 함수 `createRelationship` : 친구 리스트 배열 `friends`을 받아 친구 관계를 정리하여 객체 Map으로 return 함. (예: 'mrko' => [ 'donut', 'shakevan' ])

* 함수 `calcVisitorScore` : 방문자 리스트 배열 `visitors`를 받아 방문 횟수 별로 +1점씩 점수를 채점하여 userId 별로 Score를 저장하여 객체 Map으로 return 함. (예: 'Austyn' => 10)

* 함수 `calcFriendScore` : `friendRelationship`을 참조하여,  `scoreBoard`에서 반환한 객체 Map 을 기반하여 user의 친구의 친구는 +10점을 늘려줌.

+ 함수 `sortByScore` : `calcFriendScore`에서 반환한 객체 Map을 점수별로 정리하며, 만약 점수가 같은 경우에는 내부 함수 `localeCompare`을 사용하여 문자열로 정렬.

***
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
