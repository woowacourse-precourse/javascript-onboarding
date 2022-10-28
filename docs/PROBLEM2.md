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

### 요구사항 분석

- 연속된 문자열을 제거하는 함수가 있어야한다. 이는 암호문을 복호호하는 것이므로 decrypto 라는 함수를 만들어서 구현한다.
- 문자열에 연속된 문자가 없을때까지 반복해야한다. 이는 while문을 사용한다.
  - 문자열에 연속된 문자, 즉 암호문이 있는지 판별하는 함수가 필요하다. 이는 isCryptoGram 라는 함수를 만들어서 구현한다.
- 암호문인지 확인하는 정규식은 바뀔 수 있을 것 같아서 정규식을 매개변수로 받는다.
- 암호문을 처리하는방법이 바뀔 수 있을 것 같아 repalcer 함수를 매개변수로 받는다.

#### 연속된 문자열 제거 : decrypto(string, regex, replacer)

- replacer는 유니온 타입으로 string 또는 함수를 받을 수 있도록한다.
- 문자열과 정규식, 그리고 매치된 문자열을 어떻게 대체할지 함수를 받아 처리한다

#### 연속된 문자열이 존재하는지 확인: isCryptoGram(string, regex)

- string이 regex에 매치되는지 확인한다.
- `boolean`반환

#### 메인 로직 슈도코드

```js
function solution(cryptogram) {
  let decryptoGram = cryptogram;
  while (isCryptoGram(decryptoGram, REGEX)) {
    decryptoGram = decrypto(decryptoGram, REGEX, '');
  }
  return decryptoGram;
}
```
