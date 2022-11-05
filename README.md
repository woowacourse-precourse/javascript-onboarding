# 미션 - 온보딩

# 회고

<a href="https://velog.io/@hoon0123/%EC%9A%B0%ED%85%8C%EC%BD%94-5%EA%B8%B0-%ED%94%84%EB%A6%AC%EC%BD%94%EC%8A%A4-1%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0">링크</a>

# 문제 1 기능 목록

1. problem1 : 페이지숫자의 덧셈 곱셈 중 가장 큰 수 반환하는 함수 구하기(완료)
2. problem1 : 왼쪽 오른쪽 페이지 숫자 비교해서 큰 수 반환하는 함수 작성(완료)
3. problem1 : 포비와 크롱의 점수 구하기 (완료)
4. problem1 : 예외 사항 구하기

   → 예외사항 추가(왼쪽페이지가 짝수인경우)

   → 인원이 추가될 경우도 체크 가능하도록 추가

5. problem1 : 결과 구하기(1 : 포비 승 or 2 : 크롱 승 or 0 : 무승부 or -1 : 예외사항)(완료)

# 문제 2 기능 목록

1. problem2 : 문자열 배열로 변환 하는 함수 제작(완료)
2. problem2 : 배열에서 원하는 인덱스만 삭제해주는 함수 제작(완료)
3. problem2 : 배열을 반복하며 이전의 인덱스와 중복되면 indexDeleter 함수를 이용하여 삭제하는 함수 제작(완료)
4. problem2 : 배열을 문자화하여 최종 결과값 반환 (완료)

# 문제 3 기능 목록

1. problem3 : number까지의 숫자 전체를 배열로 바꿔주는 함수 제작
2. problem3 : 원하는 숫자의 개수 얻는 함수 제작
3. problem3 : ‘3’, ‘6’, ‘9’ 개수 더하여 반환

# 문제 4 기능 목록

1. problem4 : 대문자 변환 함수 제작
2. problem4 : 소문자 변환 함수 제작
3. problem4 : 아무 문자 입력 후 대/소문자 판별하여 변환 함수 제작
4. problem4 : 문자열 입력하면 변환하는 함수 제작

# 문제 5 기능 목록

1. problem5 : 1자리 수 입력 시 바로 반환
2. problem5 : 이외 기타 돈 입력 시 반환하는 함수 제작

# 문제 6 기능 목록

1. problem6 : 닉네임 1자인 인원 제거
2. problem6 : 첫번째 form부터 닉네일 배열로 뽑기
3. problem6 : 2글자씩만 추출
4. problem6 : 2글자 추출한 form 이후의 form들에서 해당 글자가 있는지 확인 후 있으면 중복된 닉네임유저 이메일 모으는 배열에 push 및 정렬
5. ~~problem6 : 중복된 닉네임가진 이메일들의 배열을 중복된 님네임과 함께 객체에 담기~~

   → 결과값 형식에 대한 파악 오류, 중복된 닉네임유저 전부 하나의 배열에 담아서 최종 return

# 문제 7 기능 목록

1. problem7 : user와 친구인 사람 목록 뽑기
2. problem7 : user의 친구의 친구 뽑기(중복된 횟수만큼 이름들이 나옴)
3. problem7 : 방문자 배열에서 원래 친구 제거
4. problem7 : 배열과 점수 입력하면 객체에 점수 더해주는 scorer 함수 제작
5. problem7 : 친구의 친구 배열, 친구 제거한 방문자 배열 scorer 함수 통해 점수 가산하여 recommendUserObj에 이름과 점수 기록
6. problem7 : recommendUserObj의 각 user와점수의 객체로 이루어진 recommendUserList 생성 하는 함수 제작
7. problem7 : recommendUserList 점수(이름)를 기준으로 정렬 후 최대 5명만 최종 제출

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
