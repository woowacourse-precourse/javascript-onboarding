## 🚀 기능 요구 사항

계좌에 들어있는 돈 일부를 은행에서 출금하고자 한다. 돈 담을 지갑이 최대한 가볍도록 큰 금액의 화폐 위주로 받는다.

돈의 액수 money가 매개변수로 주어질 때, 오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전 각 몇 개로 변환되는지 금액이 큰 순서대로 배열에 담아 return 하도록 solution 메서드를 완성하라.

### 제한사항

- money는 1 이상 1,000,000 이하인 자연수이다.

### 실행 결과 예시

| money | result |
| --- | --- |
| 50237	| [1, 0, 0, 0, 0, 2, 0, 3, 7] |
| 15000	| [0, 1, 1, 0, 0, 0, 0, 0, 0] |

### 기능 구현
- isValid(money)
  - 주어지는 인자인 money가 number 타입이 아닐 경우 false를 반환합니다.
  - money의 범위가 1 미만 1,000,000 초과인 수일 경우 false를 반환합니다.
  - money가 자연수가 아닐경우 false를 반환합니다.

- getMoneyArr(money)
  - 주어진 화폐의 단위로 배열 unitMoney를 만들어줍니다.
  - 이 배열과 money 인자를 fillMoneyArr 함수에 전달해주고, 그 반환값을 problem5 함수로 반환합니다.

- fillMoneyArr(money, unitMoney)
  - problem5 함수를 통해 반환될 배열 moneyArr을 선언해줍니다.
  - unitMoney 배열을 인덱스를 통해 순환하면서 money에 대한 몫과 나머지를 구해줍니다. 몫은 반환될 배열에 저장되고, 나머지는 money에 저장됩니다.
  - 반복문 실행이 완료되었다면 moneyArr를 반환해줍니다.

- problem5(money)
  - 입력값이 유효한지 확인하기 위해 isValid를 실행해줍니다.
  - getMoneyArr함수의 반환값을 반환합니다.
