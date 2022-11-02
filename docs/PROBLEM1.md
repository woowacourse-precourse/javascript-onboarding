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

### 요구사항 분석(기능 목록)

- 주어진 기능 요구사항을 정리하면, 다음의 과정을 거쳐 구할수 있다.

1. 입력받기 (외부에서 주어진다)
2. 유저의 최댓값 구하기
3. 승자 구하기
4. 예외 처리

#### 1. 입력받기(생략)

#### 2. 유저의 최댓값 구하기

- 유저의 입력값을 받아 각각의 자리수를 배열로 만든다.
  - `numberToDigits(pages :Number[])`
  - ex)`[12, 34] => [[1,2], [3,4]]`

- 주어진 쪽수를 각각 더하기 거나 곱하는 계산을 수행한다.
- 계산이나, 값을 결정하는 기준은 변경될 수도 있을테니, 함수외부에서 주입받는다.
  - 함수의 시그니처는 아래와 같다.

- 이 문제에서는 각각의 자리수를 더하거나 곱하는 계산을 수행하고, 최댓값을 구하므로
  decide와 calculates 인자는 아래와 같다.
  - `decide` : `Math.max`
  - `calcurates` : [`(a,b)=>a+b`, `(a,b)=>a*b`]

```ts
  getPoints(
    userPages:[number, number], 
    decide:(...)=>number, 
    calcurates:((a:number,b:number)=>number)[]
  )
```  

#### 3. 승자 구하기

- 이 함수의 **가장 추상적인 레벨**이 되어야 한다고 생각한다. 이 로직을 함수로 감싸진 않되 이 부분이 다른 함수들를 다루는 형태로 값을 반환하도록 한다.
- 예상되는 핵심 이 함수의 메인 코드는 아래와 같다.

```js
  if(pobiPoints === crongPoints) return RESULT.DRAW;
  if(pobiPoints> crongPoints) return RESULT.POBI;
  else return RESULT.CRONG;
```

#### 3. 예외 케이스

- `isValid`함수를 만들어 예외 케이스를 먼저 거르는 방향으로 구현해보려고한다.
함수의 시그니처는 아래와 같다.
- `errorCases`에 들어갈 함수배열은 인자를 받아 자신의 유효범위를 만들어 해당 로직을 확인할 수 있도록, `(a:number,b:number):boolean` 형태의 두 인자를 받아 `boolean`을 반환하는 함수로 구성한다.

```ts
// ts snippet 

type numbers = [number, number];
type errorCases = ((a,b)=>boolean)[]

isValid( numbers:numbers, errorCases:errorCases):Boolean
```

1. 입력받은 페이지가 [홀수, 짝수] 순으로 주어지지 않은 경우
2. 오른쪽 페이지 - 왼쪽 페이지가 1이 아닌 경우
3. 첫번째 페이지가 짝수인 경우(1번과 같이 처리가능)
4. 두번째 페이지가 홀수인 경우(2번과 같이 처리가능)
5. 왼쪽 페이지가 1보다 작은 경우
6. 오른쪽 페이지가 400보다 큰 경우

- 위의 6가지 에러케이스는 아래 3가지 함수를 통해 처리할수 있다.

- `isOddEven`
  - a, b를 받아 a, b가 각각 홀수, 짝수인 튜플인지 확인하는 함수
- `isDiff(diff)`
  - n을 받아 `(a,b):boolean` 형태로 a,b페이지의 차이가 n인지 확인하는 함수
- `isArea(min,max)`
  - min, max를 받아 `(a,b):boolean` 형태로 a,b페이지가 min, max 범위에 있는지 확인하는 함수

#### 4. 정리

- 로직을 정리하면 핵심적인 부분은 아래와 같은 코드가 되야한다

```js
//입력받기
function(pobi, crong){
  //예외 케이스 처리
  if(!isValid([pobi,crong], [isOddEven, isDiff(1), isArea(1,400)])) return -1;

  let pobiPoints = getPoints(pobi, Math.max, [add, multiply]);
  let crongPoints = getPoints(crong, Math.max, [add, multiply]);

  if (pobiPoints === crongPoints) return RESULT.DRAW;
  if (pobiPoints > crongPoints) return RESULT.POBI;
  else return RESULT.CRONG;

  //... function
}
```
