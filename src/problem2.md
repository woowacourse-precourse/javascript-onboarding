# 기능 목록

[x] array method 를 사용하기 위해 주어진 string 을 arr 로 변환한다.
[x] arr 를 순환하며 현재 문자가 다음 문자와 같지 않을 경우 i++ 를 통해 계속 순환한다.
[x] 현재 문자가 다음 문자와 같을 경우 해당 문자와 다음 문자를 제거한다.
[x] 그 후 i=0 으로 설정하여 다시 처음부터 arr 를 재순환한다.

# 문제

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
