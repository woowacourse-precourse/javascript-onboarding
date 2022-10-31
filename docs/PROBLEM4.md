## 🚀 기능 요구 사항

어느 연못에 엄마 말씀을 좀처럼 듣지 않는 청개구리가 살고 있었다. 청개구리는 엄마가 하는 말은 무엇이든 반대로 말하였다.

엄마 말씀 word가 매개변수로 주어질 때, 아래 청개구리 사전을 참고해 반대로 변환하여 return 하도록 solution 메서드를 완성하라.

| A   | B   | C   | D   | E   | F   | G   | H   | I   | J   | K   | L   | M   | N   | O   | P   | Q   | R   | S   | T   | U   | V   | W   | X   | Y   | Z   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Z   | Y   | X   | W   | V   | U   | T   | S   | R   | Q   | P   | O   | N   | M   | L   | K   | J   | I   | H   | G   | F   | E   | D   | C   | B   | A   |

### 제한사항

- word는 길이가 1 이상 1,000 이하인 문자열이다.
- 알파벳 외의 문자는 변환하지 않는다.
- 알파벳 대문자는 알파벳 대문자로, 알파벳 소문자는 알파벳 소문자로 변환한다.

### 실행 결과 예시

| word         | result       |
| ------------ | ------------ |
| "I love you" | "R olev blf" |

<hr>
## 📖 구현 기능 목록

#### 요구 사항 요약

1. 문자열 입력값으로 받음
2. 청개구리 사전 반대로 문자열 변환

#### 1. 문자열을 입력값으로 받음(생략)

#### 2. 청개구리 사전 반대로 문자열 변환

- 청개구리사전 : 알파벳 대문자 갯수(26)에서 해당 알파벳 (인덱스+1) 마이너스

  - ex) `B(1) <=> Y(24)`

- Object 구조로 사전 형식 구현

  ```js
  const UPPER_CASE = "ABCDEFGHI...";
  const BLUE_FROG_DICT = {};
  BLUE_FROG_DICT[UPPER_CASE[index]] = UPPER_CASE[26 - (index + 1)];
  ```

- 대문자, 소문자, 띄어쓰기 따로 처리 필요
  ```js
  const LOWER_CASE = UPPER_CASE.toLowerCase();
  BLUE_FROG_DICT[LOWER_CASE[index]] = LOWER_CASE[26 - (index + 1)];
  BLUE_FROG_DICT[" "] = " ";
  ```
