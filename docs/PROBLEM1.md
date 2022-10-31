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

# problem1 구현 코드

## 메인 함수

```javascript
function problem1(pobi, crong) {
  if (!handleExcept(pobi, crong)) {
    return -1;
  }
  var answer;
  let pobiMaxNum, crongMaxNum;
  pobiMaxNum = getMaxNum(pobi);
  crongMaxNum = getMaxNum(crong);
  answer = getResult(pobiMaxNum, crongMaxNum);
  return answer;
}
```

## 입력 예외처리 함수

- 왼쪽 페이지가 짝수 or 오른쪽 페이지가 홀수일 경우
- 두 페이지의 차이가 1이 아닐 경우
- 입력된 페이지가 정수가 아닐 경우
- 입력된 페이지가 책의 페이지 범위가 아닐 경우(1~400)

```
function handleExcept(pobi, crong){
  if((pobi[0] % 2 == 0) || (crong[0] % 2 == 0) || (pobi[1] % 2 == 1) || (crong[1] % 2 == 1)){
    return false;
  }
  if(((pobi[0] + 1 != pobi[1])) || ((crong[0] + 1) != crong[1])){
    return false;
  }
  if(!((Number.isInteger(pobi[0])) && (Number.isInteger(pobi[1])) && (Number.isInteger(crong[0])) && (Number.isInteger(crong[1])))){
    return false;
  }
  if((pobi[0] < 1 || pobi[0] > 399) || (pobi[1] < 2 || pobi[1] > 400) || (crong[0] < 1 || crong[1] > 399) || (crong[1] < 2 || crong[1] > 400)){
    return false;
  }
  return true;
}
```

## 플레이어의 가장 큰 수를 구하는 함수

```
function getMaxNum(player){
  let sum, mul;
  sum = getMaxSum(player[0], player[1]);
  mul = getMaxMul(player[0], player[1]);
  if(sum < mul){
    return mul;
  }
  return sum;
}
```

## 왼쪽/오른쪽 페이지의 숫자합을 비교해 더 큰 합을 반환하는 함수

```
function getMaxSum(left, right){
  let leftSum = 0, rightSum = 0;
  leftSum = getSum(left);
  rightSum = getSum(right);
  if(leftSum > rightSum){
    return leftSum;
  }
  else{
    return rightSum;
  }
}
```

## 왼쪽/오른쪽 페이지의 숫자곱을 비교해 구해 더 큰 곱을 반환하는 함수

```
function getMaxMul(left, right){
  let leftMul = 1, rightMul = 1;
  leftMul = getMul(left);
  rightMul = getMul(right);
  if(leftMul > rightMul){
    return leftMul;
  }
  else{
    return rightMul;
  }
}
```

## 페이지의 각 자리수 숫자를 더해 숫자합을 리턴하는 함수

```
function getSum(num){
  let number = num, divider = 100, sum = 0;
  for(let i = 0; i < 3; i++){
    sum += parseInt(number / divider);
    number %= divider;
    divider /= 10;
  }
  return sum;
}
```

## 페이지의 각 자리수 숫자를 곱해 숫자곱을 리턴하는 함수

```
function getMul(num){
  let number = num, divider = 100, mul = 1;
  for(let i = 0; i < 3; i++){
    if(parseInt(number / divider) == 0){
      mul *= 1;
    }
    else{
      mul *= parseInt(number / divider);
    }
    number %= divider;
    divider /= 10;
  }
  return mul;
}
```

## 승패 결과를 리턴하는 함수

```
function getResult(pobiNum, crongNum){
  if(pobiNum > crongNum){
    return(1);
  }
  else if(pobiNum < crongNum){
    return(2);
  }
  else{
    return(0);
  }
}
```
