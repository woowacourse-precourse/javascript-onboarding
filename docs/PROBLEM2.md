## 🚀 기능 요구 사항

암호문을 좋아하는 괴짜 개발자 브라운이 이번에는 중복 문자를 이용한 새로운 암호를 만들었다. 예를 들어 "browoanoommnaon"이라는 암호문은 다음과 같은 순서로 해독할 수 있다.

1. "browoanoommnaon"
2. "browoannaon"
3. "browoaaon"
4. "browoon"
5. "brown"

임의의 문자열 cryptogram이 매개변수로 주어질 때, 연속하는 중복 문자들을 삭제한 결과를 return 하도록 solution 메서드를 완성하라.

### 제한사항

-   cryptogram은 길이가 1 이상 1000 이하인 문자열이다.
-   cryptogram은 알파벳 소문자로만 이루어져 있다.

### 실행 결과 예시

| cryptogram        | result  |
| ----------------- | ------- |
| "browoanoommnaon" | "brown" |
| "zyelleyz"        | ""      |

## ✔구현 기능 목록 리스트

-   1단계) 배열을 이용해 연속되는 문자열을 찾는 함수를 구현합니다.
    -   findRepetition() : a[i] === a[i+1] 인 문자열을 찾습니다.
-   2단계) a[i]문자열과 a[i+1] 문자열을 배열에서 제외합니다.
-   3단계) 정규식을 이용해 연속된 문자가 존재하는 경우 findRepetition함수를 실행합니다.
    -   /(.)\1+/ 2개의 연속된 문자열 탐색
-   4단계) 배열을 문자열로 합친 결과를 반환합니다.
