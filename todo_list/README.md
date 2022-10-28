# 구현할 기능 목록

7개의 문제를 각각 해결한다.

1. 문제 1

   1. 입력 값 예외 처리 구현

   - 시작 면, 마지막 면 금지
   - [nbr(홀), nbr + 1(짝)] 포맷만 가능

   2. 각 자리 수 '더하기, 곱하기' 기능 구현
   3. 더한 값, 곱한 값 중 큰 값 중 점수 선택
   4. 포비 vs 크롱 대결, 결과 값 반환

2. 문제 2

   1. 반복 돌면서 연속되는 문자열 제거
      1. browoanoommnaon
      2. browoannaon
      3. browoaaon
      4. browoon
      5. brown

3. 문제 3

   1. 1부터 number까지 순회
      - 3을 포함하는 자리수가 있으면 카운트 증가
   2. 카운트 반환

4. 문제 4

   1. 변환 규칙(대문자): {65(ascii A) + 90(ascii Z) - asciiCode}
   2. 변환 규칙(소문자): {97(ascii a) + 122(ascii z) - asciiCode}
   3. 규칙 기반으로 word를 변환
   4. 변환한 문자열 반환

5. 문제 5

   1. money를 50000으로 나눈 몫 배열에 저장, 나머지 money에 저장
   2. money를 10000으로 나눈 몫 배열에 저장, 나머지 money에 저장
   3. ...

6. 문제 6

   1. forms 배열 순회
      1. 각 요소의 이름을 두 글자 단위로 케이스를 나눈다. ('제이엠' -> '제이', '이엠')
      2. 케이스 반복
         1. forms 배열 순회
            1. 케이스를 포함하는 이름이 있는지 찾는다.
            2. 중복되는 경우
               1. 해당 이메일을 배열에 저장한다.
               2. 체크해서, 다음에 또 검사하지 않도록 방지한다.

7. 문제 7
   1. friends, visitors를 통해 목록을 만든다. ( {id, score, isFriend} )
      ```jsx
      // 기대 결과
      [
        { id: "donut", score: 0, isFriend: true },
        { id: "andole", score: 0, isFriend: false },
        { id: "jun", score: 0, isFriend: false },
        { id: "shakevan", score: 0, isFriend: true },
        { id: "bedi", score: 0, isFriend: false },
      ];
      ```
   2. 현재 친구가 아닌 사용자 중, 함께아는 친구의 수에 따라 score(+10)을 부여한다.
      ```jsx
      // 기대 결과
      [
        { id: "donut", score: 0, isFriend: true },
        { id: "andole", score: 20, isFriend: false },
        { id: "jun", score: 20, isFriend: false },
        { id: "shakevan", score: 0, isFriend: true },
        { id: "bedi", score: 0, isFriend: false },
      ];
      ```
   3. 현재 친구가 아닌 사용자 중, 방문 횟수에 따라 score(+1)를 부여한다.
      ```jsx
      // 기대 결과
      [
        { id: "donut", score: 0, isFriend: true },
        { id: "andole", score: 20, isFriend: false },
        { id: "jun", score: 20, isFriend: false },
        { id: "shakevan", score: 0, isFriend: true },
        { id: "bedi", score: 3, isFriend: false },
      ];
      ```
   4. score가 높은 최대 5명을 추출 (0점 제외)
      ```jsx
      // 기대 결과
      [
        { id: "andole", score: 20, isFriend: false },
        { id: "jun", score: 20, isFriend: false },
        { id: "bedi", score: 3, isFriend: false },
      ];
      ```
   5. score 높은 순+이름 순으로 id 정렬, 반환
      ```jsx
      // 기대 결과
      ["andole", "jun", "bedi"];
      ```
