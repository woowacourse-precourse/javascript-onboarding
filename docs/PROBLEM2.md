## 기능 목록

1. 스택을 사용해 문자열에 포함된 중복을 확인

   - 문자열을 하나씩 읽어가며 스택에 넣는다.
   - 스택의 최상단의 문자와 다음 문자가 일치하면 해당 문자를 스택에서 pop한다.
   - pop했다면 pop한 문자를 미리 저장해두고 다음 문자와 일치할경우 해당 문자도 넘어가기(3글자 이상의 중복일 경우를 위해)

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
