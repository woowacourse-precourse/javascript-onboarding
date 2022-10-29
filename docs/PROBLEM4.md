## 🚀 기능 요구 사항

어느 연못에 엄마 말씀을 좀처럼 듣지 않는 청개구리가 살고 있었다. 청개구리는 엄마가 하는 말은 무엇이든 반대로 말하였다.

엄마 말씀 word가 매개변수로 주어질 때, 아래 청개구리 사전을 참고해 반대로 변환하여 return 하도록 solution 메서드를 완성하라.

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Z | Y | X | W | V | U | T | S | R | Q | P | O | N | M | L | K | J | I | H | G | F | E | D | C | B | A |

### 제한사항

- word는 길이가 1 이상 1,000 이하인 문자열이다.
- 알파벳 외의 문자는 변환하지 않는다.
- 알파벳 대문자는 알파벳 대문자로, 알파벳 소문자는 알파벳 소문자로 변환한다.

### 실행 결과 예시

| word | result |
| --- | --- |
| "I love you" | "R olev blf" |


------------------------------
<br>

## [작성자] : 김동우(DongWooKim97)
</br> 

## 📝 구현할 기능 목록
</br> 

### ✔️ 기능 1. 입력값에 대한 유효성 및 에러(예외처리) 검사
<br>

  - 입력값에 에러가 없는지, 입력 양식이 유효한지 검사한지 검사  

    - 주어진 범위인 1이상 1000이하의 문자열인지 확인

      ```javascript 
        if(word.length < 1 || word.length > 1000) return false;
      ```
  
    
</br>


### ✔️ 기능 2. 소문자와 대문자의 경우를 구분하기 위한 함수 작성.
<br>

  - 입력값인 ```word```는 영어 대문자 + 소문자 조합으로 들어온다.

  - 제한사항 中
    ```
    알파벳 "대문자는 대문자"로 "소문자는 소문자"로, "이 외의 문자는 변환 X"
    ```
    라는 특성을 이용하여, 대문자와 소문자의 경우를 분리하여 작성.

<br>

  - 대문자와 소문자를 구분하기 위해서 정규식 사용
    - 소문자일 경우는 a-z사이의 값만 ```true``` 로 리턴하고 그 외는 ```false```
    - 소문자일 경우는 a-z사이의 값만 ```true``` 로 리턴하고 그 외는 ```false```
    

```javascript
function lowerCaseTest(value) {
  const lowerCaseRegExp = /^[a-z]+$/;
  if (lowerCaseRegExp.test(value)) {
    return true
  }
  return false;
}

function upperCaseTest(value) {
  const upperCaseRegEx = /^[A-Z]+$/;
  if (upperCaseRegEx.test(value)) {
    return true
  }
  return false;
}
```

-

  

