## 함수 설명

### <ErrorCase클래스>

설명 : 제한 사항 처리를 담당하는 클래스입니다.

- checkLowerCase() : 입력받은 암호문이 소문자인지 확인
- checkLength() : 입력받은 암호문이 1이상 1000이하인지 확인
- checkAllError() : 모든 에러 사항을 확인하는 함수

### <Password클래스>

설명 : 메인로직을 구현하는 클래스입니다.

- getUseCharList() : 암호문에 사용된 알파벳을 하나씩 나타내는 배열을 리턴
- decryptForOverlap() : 사용된 문자들이 2개 이상 중복되어있는지 확인하고 이를 없애는 로직, 없앤 문자열을 리턴
- getNoOverlapDecryption() : 중복이 더 이상 존재하지 않을 때까지 계속해서 중복을 제거, 최종 암호해독문을 리턴(최종 결과값)

## 🚀 기능 요구 사항

암호문을 좋아하는 괴짜 개발자 브라운이 이번에는 중복 문자를 이용한 새로운 암호를 만들었다. 예를 들어 "browoanoommnaon"이라는 암호문은 다음과 같은 순서로 해독할 수 있다.

1. "browoanoommnaon"
2. "browoannaon"
3. "browoaaon"
4. "browoon"
5. "brown"

임의의 문자열 cryptogram이 매개변수로 주어질 때, 연속하는 중복 문자들을 삭제한 결과를 return 하도록 solution 메서드를 완성하라.

### 제한사항

- cryptogram은 길이가 1 이상 1000 이하인 문자열이다.
- cryptogram은 알파벳 소문자로만 이루어져 있다.

### 실행 결과 예시

| cryptogram        | result  |
| ----------------- | ------- |
| "browoanoommnaon" | "brown" |
| "zyelleyz"        | ""      |
