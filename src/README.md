# 우아한 테크 코스 프리코스 1주차
## problem1
> 문제를 풀면서 Vanilla js를 쓰면서 새롭게 알게된 내용과 구현 과정을 작성합니다.

js 문법
> MDN 문서를 참고하였음
* forEach(): Array 클래스에 포함된 메서드로 파이썬의 for elements in list: 와 같이 사용가능함
  다음 예시와 같이 파이썬의 enumerate()를 안 써도 value와 index에 동시에 접근이 가능하고 최대 array까지에 접근이 가능함
  무조건 index와 array는 생략해도 되지만 그러기 위해서는 index를 사용하려면 value를, array를 사용하려면 index를 작성해야 함
```
fruits.forEach(function (value, index, array) {
  console.log(item, index)
})
// for문으로 작성할 경우
for (let i=0; i<fruits.length; i++) {
  console.log(fruits[i])
}
```
* 나누기 할당(/=): 파이썬과 같이 나누기해서 할당하지만 몫 할당(//=)은 없음
* Math: 수학 계산을 위한 상수나 함수를 갖고 있는 내장 객체, 파이썬에서 기본으로 제공하는 함수들 대부분이 존재함
* floor(): Math 객체에 포함된 메서드로 이름 그대로 버림 함수이며 인자는 버림하고자 하는 숫자 1개만 받음, 몫 할당이 되지 않아서 사용하였음
* push(): Array 클래스에 포함된 메서드로 파이썬 List의 append()와 같음, 해당 array의 오른쪽에 인자를 원소로 추가함
* unshift(): push()와 같으나 맨 앞에 추가, 반대로 shift는 맨 앞의 원소를 제거하며 반환
* max(): Math 객체에 포함된 메서드로 인자들을 비교하여 높은 값을 가진 인자를 반환
* else if: 파이썬 elif 대신 else if를 사용

js 코드 스타일
> 구글의 자바스크립트 스타일 가이드를 참고 하였음
* if문의 조건과 중괄호는 모두 띄어 작성한다
```
if (conditions) {
  // ...
}
```
* 함수를 camelCase, 변수명을 snake_case로 작성하는 파이썬과 달리 자바스크립트는 전부 `camelCase`로 작성함