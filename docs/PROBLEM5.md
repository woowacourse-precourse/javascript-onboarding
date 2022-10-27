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

---
## 🛒 구현 기능 목록
- 입력으로 money 받기 ⭕
  - money는 1 이상 1,000,000 이하의 자연수 ⭕
- money를 특정 단위에 따라 분리하기 ⭕
  - 오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전 순으로 분리해야 함
- 출력하기 ⭕
  - money가 각 단위마다 몇 개씩 변환되었는지 금액이 큰 순서대로 배열에 담아 반환하기 ⭕

---
## ✅ 테스트 결과
- case1 (2 ms)
- case2 (1 ms)

👉 통과!

---

## 💎 새로 알게 된 점
- 변수 이름을 지으려다가 갑자기 생각나서 <a href='https://velog.io/@cada/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%83%80%EC%9D%BC-%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%84%A4%EC%9D%B4%EB%B0%8D-%EC%BB%A8%EB%B2%A4%EC%85%98-%ED%8E%B8'>자바스크립트 스타일 가이드 - 네이밍 컨벤션 편</a>를 보고왔다. 여기에 따르면 이름에 복수형을 표기하지 않는다고 한다. 그래서 `moneyTypes`라고 쓰려다가 `moneyTypeList`로 수정하였다.
  ```javascript
  //bad
  let delivery_notes = ["one", "two"];

  // good
  let delivery_note_list = ["one", "two"];
  ```
- for (let coin in moneyTypeList)에서 console.log(coin)를 하면 당연히 50000부터 1까지 나올 줄 알았다. 그런데...!!! coin은 인덱스였던 것이다. 실제로 출력해보면 0부터 8까지가 나온다. 이 문법을 지금껏 모르고 있었구나! 내가 의도했던 건 for of였던 것 같다. 모두 정리해서 아래 예제에 기록해뒀다. 
  ```javascript
  const array = [50000, 5000, 500, 50, 5];

  // 0 1 2 3 4
  for (let i in array) {
    console.log(i);
  };

  // 50000 5000 500 50 5
  for (let i in array) {
    console.log(array[i]);
  };

  // 50000 5000 500 50 5
  for (let i of array) {
    console.log(i);
  };
  ```


---

## ❓ 아쉬운 점 & 궁금한 점
- 아래의 for문이 마음에 들지 않는다. 보면 parseInt(coin)을 이 짧은 코드에서 5번이나 쓰고 있다. 근데 for문에서 coin을 선언할 때 아예 parseInt(coin)으로 하고, 이를 coin으로 정해서 가져오면 될 것 같은데..?

  ```javascript
  for (let coin in moneyTypeList) {
    arr[parseInt(coin)] = parseInt(money / moneyTypeList[parseInt(coin)]);
    moneyTypeList[parseInt(coin)]
    count += parseInt(money / moneyTypeList[parseInt(coin)]);
    money %= moneyTypeList[parseInt(coin)]
  }
  ```
  오 이렇게 하면 코드 양을 조금 더 줄일 수 있다..! 근데 이렇게 하는게 좋은 건지 모르겠다. 줄이지 않고 parseInt()라는 것을 명시하기 위해 그대로 써주는 게 좋을까? 나중에 커뮤니티에 질문을 해봐야겠다.

  ```javascript
  for (let coin in moneyTypeList) {
    coin = parseInt(coin)
    arr[coin] = parseInt(money / moneyTypeList[coin]);
    moneyTypeList[coin]
    count += parseInt(money / moneyTypeList[coin]);
    money %= moneyTypeList[coin]
  }
  ```