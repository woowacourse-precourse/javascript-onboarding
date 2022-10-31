## :memo: 기능 구현 리스트 
[문제 1]
1. 예외사항 처리 :white_check_mark:
  - 입력되는 페이지의 번호 연속된 숫자가 아닌 경우
  - 입력되는 왼쪽 페이지, 오른쪽 페이지가 홀수, 짝수가 아닌 짝수, 홀수인 경우
2. pobi 페이지 번호 중 규칙 2~3을 진행했을 때 각 숫자 4가지를 구한다.
3. 2.에서 구한 4가지 숫자 중 가장 큰 값을 구한다.
4. crong 페이지 번호 중 규칙 2~3을 진행했을 때 각 숫자 4가지를 구한다.
5. 4.에서 구한 4가지 숫자 중 가장 큰 값을 구한다.
6. 3.과 5.값을 비교해서 큰 값의 조건대로 return한다.

[문제 2]
1. 암호를 배열로 바꾼다.
2. 배열에서 중복을 제거하는 함수를 만든다.
3. 중복된 문자가 없을 때 까지 2.번을 반복한다.
4. 결과값을 return한다. 

[문제 3]
1. 1부터 시작해 number에 입력되는 숫자까지를 배열로 나열한다.
2. 자리수를 쪼갠다. ex)12 => 1,2
3. 3,6,9 각각을 찾아서 개수를 구한다.

[문제 4]
기존에 생각한 알고리즘
1. word를 쪼개서 띄어쓰기까지 포함한 배열로 만든다.
2. A~Z 배열을 만들어준다.
3. a~z 배열을 만들어준다.
4. 인덱스 번호로 몇 번째에 있는지 찾고, -idx로 변환할 알파벳을 찾는다.
5. 대문자-> 소문자, 소문자->대문자로 바꾸어 return한다. 

수정한 알고리즘
1. 대문자 함수를 만든다.
  - A~Z 배열을 만든다
  - 26-(입력된 word에서 A~Z 배열과 일치하는 문자의 인덱스 번호)로 반대 문자를 찾는다. => for문으로 돌려 배열을 구함
  - 일치하지 않을 경우 그대로 내보낸다.
2. 소문자 함수를 만든다.
  - a~z 배열을 만든다.
  - 26-(1.번에서 출력된 배열에서 a~z 배열과 일치하는 문자의 인덱스 번호)로 반대 문자를 찾는다. => for문으로 돌려 배열을 구함
  - 일치하지 않을 경우 그대로 내보낸다.
3. 2.에서 출력된 배열을 합쳐서 return 한다.

[문제 5]
1. 돈의 액수를 배열로 설정해준다. 
  - [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
2. 배열의 길이만큼 parseInt(money/moneyUnitArray[i]) 반복한다.
  - 한번 돌고 나면 money = money - moneyUnitArray[i]*parseInt(money/moneyUnitArray[i])
3. 나온 각각의 값을 초기값을 0으로 하는 9의 길이의 배열에 넣는다. 


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
