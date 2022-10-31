## 기능 목록
1. 닉네임별 연속 글자를 찾는다.
```
   function duplicateTest()
```
2. 닉네임별 연속 글자 중 중복되면 1씩 더한다.
```
 let checkObj
```
3. 중복이 있으면 이메일을 `mailArr`에 추가한다.

4. 문자열을 오름차순으로 정렬한다.
```
 mailArr.sort()
```

## 예외 처리
1. 이메일에 중복이 있을 경우
```
new Set(mailArr);
[...mailArr];
```