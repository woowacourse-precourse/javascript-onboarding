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
- problem2(cryptogram)
	- 입력된 인자의 유효성을 검증하기위해 isValidCripto 함수를 실행합니다. 유효성이 검증되지 않았다면 입력 인자가 그대로 반환됩니다.
	- 받아오는 string 인자를 배열로 만들어주기 위해 strToArr함수를 실행해주어 cryptoArray 배열을 만들어줍니다.
	- 암호를 해독하기 위해 연속하는 중복 문자를 삭제해주는 함수 solveCripto를 실행합니다.

- isValidCripto(cryptogram)
	- 인자의 타입이 string인지 확인합니다.
	- 문자열의 길이를 확인하고 1 미만 혹은 1000 초과일 경우 false를 반환합니다.
	- 모두 소문자로 이루어져 있는지 확인하는 함수 isLower를 실행합니다

- isLower(cryptogram)
	- 한 문자씩 소문자인지 검증해줍니다. 검증 방법은 한 문자씩 대문자로 변환한 문자와 비교했을 때 같다면, 기존 문자도 대문자이므로 false를 반환해주는 형식입니다.

- strToArr(cryptogram)
	- 문자열을 배열로 변환해줍니다.

- arrToStr(cryptoArray)
	- 배열을 문자열로 변환해줍니다.

- solveCripto(criptoArray)
	- 연속하는 중복 문자들을 모두 삭제하기 위해 무한 반복문을 넣어줍니다.
		- 무한 반복문 안에는 연속하는 중복 문자의 첫 인덱스를 반환하는 findIndex 함수가 존재합니다.
		- 연속되는 문자열이 더 이상 없다면 무한 반복문을 탈출합니다.
		- 연속되는 문자열이 존재한다면 연속하는 중복 문자의 마지막 인덱스를 반환하는 findEndIndex 함수를 실행합니다.
    - splice를 통해 반환받은 두 인덱스 findStartIndex부터 findEndIndex까지 삭제해줍니다.
	- 반복문 탈출 후, arrToStr을 통해 문자열로 만들어준 뒤 반환합니다.
	
- findStartIndex(cryptoArray)
	- 배열을 입력받아 연속되는 문자를 찾기 위해 [문자열의 길이 - 1]만큼의 반목문을 실행해줍니다. (i와 i+1 인덱스를 비교하기 위함입니다.)
	- 연속되는 문자가 발견되면, 그 인덱스를 반환합니다.
	- 마지막까지 발견되지 않았다면 -1을 반환합니다.

- findEndIndex(cryptoArray, findStartIndex)
  - 연속하는 중복문자의 끝 인덱스를 알기 위해 cryptoArray의 startIndex부터 인덱스를 1씩 증가시키면서 다른 문자가 나올 때 까지 반복문을 실행해줍니다.
  - 다른 문자가 나왔다면 반복문을 탈출합니다.
  - endIndex를 반환합니다.