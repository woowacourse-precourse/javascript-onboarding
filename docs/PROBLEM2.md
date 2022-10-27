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

### 기능목록
1. 매개변수를 배열로 만들기 splited
2. 빈 배열 생성 noDup
3. splited의 요소와 noDup의 마지막 요소가 중복되면 제거한다
4. splited의 요소와 noDup의 마지막 요소가 중복되지 않으면 noDup에 추가한다. 
5. 배열 noDup을 문자열로 변환
6. 조건 추가
