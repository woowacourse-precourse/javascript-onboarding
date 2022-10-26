## 기능 목록

- [x] feat1. 들어온 페이지가 올바른지 확인
  - [x] 왼쪽이 홀수, 오른쪽이 짝수
  - [x] 페이지가 이어지는 숫자여야 한다.
  - [x] 시작 면이나 마지막 면이면 안 됨.
  - [x] 올바르지 않으면 false 반환 => false 면 -1 반환하기
- [x] feat2. 포비와 크롱이 선택한 페이지에서 가장 큰 값 반환
  - [x] 각 자리의 숫자 모두 더한 값 반환
  - [x] 각 자리의 숫자 모두 곱한 값 반환
  - [x] 4개의 결과값 비교해서 가장 큰 값 반환
- [x] feat3. 포비와 크롱 숫자 비교하여 승자 반환
  - [x] return (포비 > 크롱) ? 1 : if (포비 < 크롱) ? 2 : 0;

## 학습

### 코딩 컨벤션

| [Naver JavaScript Style Guide](https://github.com/naver/eslint-config-naver/blob/master/STYLE_GUIDE.md#functions)

- 3.7 hasOwnProperty, propertyIsEnumerable, isPrototypeOf 와 같은 Object.prototype 메서드를 직접적으로 사용하지 않는다.

```javascript
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
console.log(has.call(object, key));
```

- 7.7 함수의 파라미터를 재정의하지 않는다. 대신 default 파라미터를 이용한다.

```javascript
function handleThings(opts = {}) {
  // ...
}
```

- 7.9 항상 default 파라미터는 뒤쪽에 둔다.
- 8.5 arrow function 문법(=>)과 비교 연산자 (<=, >=)를 함께 사용할 경우, 소괄호(())를 이용하여 혼란스럽지 않도록 표현한다.

```javascript
// good
const itemHeight = (item) =>
  item.height > 256 ? item.largeSize : item.smallSize;

// good
const itemHeight = (item) => {
  const { height, largeSize, smallSize } = item;
  return height > 256 ? largeSize : smallSize;
};
```

## 🚀 기능 요구 사항

포비와 크롱이 페이지 번호가 1부터 시작되는 400 페이지의 책을 주웠다. 책을 살펴보니 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수 번호이고 모든 페이지에는 번호가 적혀있었다. 책이 마음에 든 포비와 크롱은 페이지 번호 게임을 통해 게임에서 이긴 사람이 책을 갖기로 한다. 페이지 번호 게임의 규칙은 아래와 같다.

1. 책을 임의로 펼친다.
2. 왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
3. 오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
4. 2~3 과정에서 가장 큰 수를 본인의 점수로 한다.
5. 점수를 비교해 가장 높은 사람이 게임의 승자가 된다.
6. 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다.

포비와 크롱이 펼친 페이지가 들어있는 배열 pobi와 crong이 주어질 때, 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1로 return 하도록 solution 메서드를 완성하라.

### 제한사항

- pobi와 crong의 길이는 2이다.
- pobi와 crong에는 [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 순서대로 들어있다.

### 실행 결과 예시

| pobi       | crong      | result |
| ---------- | ---------- | ------ |
| [97, 98]   | [197, 198] | 0      |
| [131, 132] | [211, 212] | 1      |
| [99, 102]  | [211, 212] | -1     |
