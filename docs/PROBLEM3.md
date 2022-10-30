## 🚀 기능 요구 사항

배달이가 좋아하는 369게임을 하고자 한다. 놀이법은 1부터 숫자를 하나씩 대면서, 3, 6, 9가 들어가는 숫자는 숫자를 말하는 대신 3, 6, 9의 개수만큼 손뼉을 쳐야 한다.

숫자 number가 매개변수로 주어질 때, 1부터 number까지 손뼉을 몇 번 쳐야 하는지 횟수를 return 하도록 solution 메서드를 완성하라.

### 제한사항

- number는 1 이상 10,000 이하인 자연수이다.

### 실행 결과 예시

| number | result |
| --- | --- |
| 13 | 4 |
| 33 | 14 |

### 기능 구현

- isValid(number)
	- 입력값이 "number" 타입이 아니면 false를 반환합니다
	- 입력값이 1 미만이거나 10000 초과이면 false를 반환합니다.

- strToArr(strIter)
	- 입력받은 string 타입의 인자를 배열로 반환합니다.

- findThreeSixNineElement(element, index, array)
  - 배열에 각 요소를 "3", "6", "9"가 포함되어있다면 1로 고치고 포함되지 않았다면 0으로 고쳐줍니다.

- getSumArrIter(arrIter)
  - 수치형 배열로 변환한 arrIter 배열의 합을 반환합니다.

- threeSixNine(strIter)
  - string타입인 strIter를 strToArr함수를 통해 배열인 arrIter로 선언합니다.
  - forEach함수를 통해 배열의 각 요소별로 findThreeSixNineElement 함수를 실행합니다.
  - findThreeSixNineElement 함수를 통해 변환된 arrIter 배열로 getSumArrIter 함수를 실행시킨 뒤, 그 값을 반환합니다.

- playGame(number)
  - 함수 ploblem3의 반환값인 clapCount 변수를 선언합니다.
  - 1부터 입력받은 number까지 반복문을 통해 각 숫자 별 박수를 쳐야하는 횟수를 구해줍니다.
  - 반복문의 i는 String 타입을 통해 배열로 만들기 위해 string으로 변환해줍니다.
  - threeSixNine 함수를 실행시켜 반환된 값을 clapCount에 계속 더해줍니다.

- problem3(number)
  - 입력값인 number의 유효성을 파악하기 위해 isValid 함수를 실행합니다.
  - playGame 함수를 실행시킨 후, 반환받은 값을 반환합니다.