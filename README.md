# 미션 - 온보딩

## 🔍 기능 구현 목록

1. [문제 1](src/problem1.js)

- 주어진 배열이 유효한 케이스인지 확인하기

  - 두 페이지가 연속되지 않은 경우
  - 왼쪽 페이지가 홀수가 아닌 경우
  - 오른쪽 페이지가 짝수가 아닌 경우

- 한 페이지 번호의 각 자리값을 더하거나 곱한 값 중 최대값을 반환하기

  - 각 페이지 번호를 한자리씩 쪼갠 숫자로 이루어진 배열을 만들기
  - 해당 배열의 각 요소를 모두 더한 값과 곱한 값 중 최대값을 반환하기

- pobi와 crong의 점수 구하기

  - 한 사람이 왼쪽 페이지와 오른쪽 페이지에서 가질 수 있는 점수를 구하기
  - 그중에서 최댓값을 본인의 점수로 하기

- 둘의 점수를 비교하여 결과를 반환하기

  - 포비 점수가 더 높으면 1을 반환하기
  - 크롱 점수가 더 높으면 2를 반환하기
  - 둘의 점수가 같으면 0을 반환하기
  - 위의 3가지 경우에 해당하지 않는 예외사항은 -1을 반환하기

2. [문제 2](src/problem2.js)

- 문자열 cryptogram의 첫번째 문자를 포함하는 stack 만들기
- cryptogram의 두번째 문자부터 마지막 문자까지 해당 문자가 앞 문자와 동일한지 확인하기

  - 이전 문자와 동일하면 해당 문자를 stack에서 제외하기
  - 이전 문자와 동일하지 않으면 해당 문자를 stack에 추가하기

- stack에 있는 문자를 공백없이 모두 합친 새로운 문자열 반환하기

3. [문제 3](src/problem3.js)

- 한 숫자 속 3, 6, 9의 개수 세기

  - 숫자를 한자리씩 쪼갠 문자열 배열을 만들기
  - 배열 속 3, 6, 9의 개수를 세기

- 1부터 number까지 각각의 3, 6, 9의 개수의 총합을 반환하기

4. [문제 4](src/problem4.js)

- 청개구리 사전처럼 알파벳 문자를 바꿔주는 함수

  - 모든 알파벳 문자를 순서대로 요소로 하는 Array 만들기
  - Object를 생성하여 알파벳 순서대로 key를 저장하고 알파벳 역순으로 value를 저장하여 문자를 대응시키기
  - 입력한 알파벳 문자에 대응하는 문자를 반환하기

- word의 각 문자를 청개구리 사전에 따라 변환하기

  - word의 각 문자를 요소로 하는 Array 만들기
  - 각 문자를 조건에 따라 모두 변환하고 합치기
    - 알파벳 소문자인 경우
    - 알파벳 대문자인 경우
    - 알파벳 외의 문자인 경우

5. [문제 5](src/problem5.js)

- 지폐 액수를 담은 Array 만들기
- 지폐 액수 별 개수를 담을 Array 만들기
- 주어진 금액에 대해 큰 액수부터 마지막 액수까지 나누기를 반복하기

  - 각 액수로 나눈 몫을 해당 지폐 개수로 저장하기
  - 각 액수로 나눈 나머지를 다음 액수를 나누기 위한 금액으로 저장하기
  - 마지막 액수까지 해당 과정을 반복하기

- 각 지폐 별 개수를 담은 Array 반환하기

6. [문제 6](src/problem6.js)

- 중복된 단어가 닉네임에 있는 크루의 이메일을 담을 Array 만들기
- 다른 크루 닉네임 속 단어와의 중복 여부를 판단하기 위한 Object 만들기
- 한 크루의 닉네임을 연속적인 두 글자로 나눈 모든 단어를 담은 Array 만들기
- 각 단어를 해당 크루의 이메일과 매칭하여 Object에 추가하기

  - Object에 해당 단어가 없는 경우 Object에 추가하기
  - Object에 해당 단어가 있는 경우 이전에 저장해둔 크루의 email과 이번 크루의 email을 Array에 추가하기

- 추가된 이메일 중 중복을 제거하고, 오름차순으로 정렬하여 반환하기

7. [문제 7](src/problem7.js)

- 친구 관계를 확인하는 함수 만들기
- 사용자와 함께 아는 친구가 있는 사람에게 함께 아는 친구 수에 따라 점수 부여하기

  - 사용자와의 친구 관계를 확인하여 사용자의 친구를 담은 배열 만들기
  - 사용자를 제외한 친구 관계 배열 만들기
  - 사용자를 제외한 친구 관계 배열에서 사용자의 친구 별로 친구 관계를 확인하기
  - 사용자의 친구와 친구인 사람에게 함께 아는 친구 수마다 10점씩 추가하기
  - 그 사람이 이미 사용자의 친구인 경우 제외하기

- 사용자의 타임 라인에 방문한 횟수에 따라 점수 부여하기

  - 방문한 횟수마다 1점씩 추가하기
  - 방문자가 이미 사용자의 친구인 경우 제외하기

- 추천 점수에 따라 주어진 조건에 따라 최대 5명의 이름을 반환하기

  - 방문 점수와 친구 점수를 합산한 추천 점수 계산하기
  - 주어진 조건에 맞게 정렬하기
    - 추천 점수가 높은 순으로 정렬하기
    - 추천 점수가 동일한 경우 이름순으로 정렬하기
  - 추천 대상 최대 5명의 이름을 반환하기
