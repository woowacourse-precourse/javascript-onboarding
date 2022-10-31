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


### 기능 목록
(solution 메소드)
- count 변수를 통해 주어진 문자열의 인덱스 표시
- answer의 마지막 문자와 현재 count가 가리키는 인덱스의 문자 비교 
: 같으면 -> answer의 마지막 문자 삭제 및 count를 다음칸으로 이동
: 다르면 -> count가 가리키는 인덱스의 문자를 answer 맨 뒤에 추가 

### 추가 사항
- answer 변수에 타입이 선언되어 있지 않으므로 undefined 상태이다. 따라서 null을 할당하여 문자를 추가할 때 문제가 없도록 함

