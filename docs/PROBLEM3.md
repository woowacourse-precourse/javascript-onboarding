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

### 요구사항 분석

- 3, 6, 9가 포함 된 숫자에 3,6,9가 포함될 때, 포함된 갯수 만큼 손뼉을 치므로 주어지는 매개변수 number 만큼 루프를 돌면서 1부터 number까지 3,6,9가 몇개나 들어있는지 확인한다. 이를 위해 다음과 같은 기능들이 필요하다.

- 필요한 기능은 다음과 같다.
- 1부터 n까지의 뽑는 함수 `incrementalSequence(n, m)`
- 조건으로 필터링 하는 함수 `filter(condition, iter)`
- 필터링 된 수의 3의 개수를 구하는 함수 `map(mapper, iter)`
- 구해진 갯수를 합하는 함수 `reduce(reducer, iter)`

#### 1부터 n까지의 루프문 (이터레이터를 통해서 한개씩 값을 뽑도록 한다.)

- 1부터 n까지 루프를 돌면서 한개씩 값을 순차적으로 넘겨준다.

```js
function* range(n, m){
  let acc = n;
  while(n<=m){
    yield acc;
    acc++;
  }
}
```

#### 조건으로 필터링

- 필터 함수를 구현한다. 함수와 이터레이블한 객체를 인자로 받는다.
- 필터링에 필요한 함수는 solution 함수의 내부함수 구현한다.

```js
function* filter(f, iter){
    let acc = 0;
    for (const item of iter){
        if(f(item)) yield item; 
    }
}

```

#### 조건으로 필터링 된 3,6,9를 가진 숫자를 3,6,9의 갯수로 맵핑

- map 함수를 구현한다.
- 조건에 들어갈 함수는 solution내부에서 정의해주도록한다.

```js
function* map(f, iter){
  let acc= 0;
  for (const item of iter){
    yield f(item);
  }
}

```

### 값을 리듀스 합쳐야 한다

- 3,6,9의 개수로 맵핑된 배열을 배열의 내장 reduce문법으로 합쳐도 된다.
- 하지만 스타일을 유지하기 위해 reduce함수를 만들어준다.
- reduce는 generator function으로 구현하지 않는다.

```js
function reduce(f, iter, acc){
  if(!initialValue){
    iter = iter[Symbol.iterator]();
    acc = iter.next().value;
  }
  for(const item of iter){
    acc = f(acc, item);
  }
  return acc; 
}
```

#### 슈도 코드

- add 함수와 count, condition은 solution함수 안에서 구현하거나 인라인으로 넣어준다.
- 나머지 filter, map, reduce함수들은 solution외부에서 구현한다. 나중에 필요에 따라 lib/으로 분리시킨다.

```js
function solution(number){
  // 아래부터 쭉 읽어 오면, 
  // 1, number까지 뽑고 
  // 조건으로 필터링하고 
  // 카운트함수로 맵핑하고 
  // add 로 리듀스한다. 
  return reduce(add,
          Lazy.map(count, 
            Lazy.filter(condition,
              Lazy.range(1, number))))

  function add(a,b){
  }

  function count(item){
  }
  function condition(item){
  }
}
```
