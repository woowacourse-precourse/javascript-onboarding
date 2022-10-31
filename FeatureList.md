# 🍒기능 목록🍒

## [ 문제 1 ]

![문제 1](https://user-images.githubusercontent.com/74524184/198222656-31f13cd2-ddd4-4492-a645-9b6520a7cd72.png)
<strong>- 예외 조건 확인하기 => 아래의 경우 모두를 만족하면 통과</strong>

    1. 주어진 값에 1 혹은 399가 포함되지 않았는가
    2. [a, b]일 때 b-a=1 을 만족하는가
    3. [홀수, 짝수] 순서대로 주어졌는가

<strong>- 주어진 숫자의 각 자리를 더하는 함수 만들기</strong>

<strong>- 주어진 숫자의 각 자리를 곱하는 함수 만들기</strong>

<strong>- 포비와 크롱 각각의 Max값 찾기

<strong>- 포비와 크롱의 Max값 비교하여 값 return하기</strong>

---

## [ 문제 2 ]

![문제 2](https://user-images.githubusercontent.com/74524184/198222776-41816b28-8e45-43d3-b0be-772a4ad1f548.png)

<strong>- 예외 조건 확인하기 => 아래의 경우 모두를 만족하면 통과</strong>

    1. 1 <= 문자열 길이 <= 1000
    2. 소문자로만 구성되어 있는가

<strong>- 문자열 순회하며 새 배열 마지막 글자와 겹치는지 검사</strong>

<strong>- 마지막 글자와 넣어야하는 글자가 겹치면 pop</strong>

<strong>- 새 배열에 남은 글자 result 값으로 저장</strong>

---

## [ 문제 3 ]

![문제 3](https://user-images.githubusercontent.com/74524184/198863620-1e28ae2c-8be6-4d70-83a7-8326897a5b80.png)

<strong>- 예외 조건 확인하기 ⇒ 1 ≤ number ≤ 10000 숫자이면 통과</strong>

<strong>- 숫자 1부터 number까지 실행되는 반복문을 돌며 해당 숫자를 각 자리마다 잘라서 3, 6, 9가 있는지 확인 후, 있으면 clap +1</strong>

<strong>- 최종 clap 수를 retrun</strong>

---

## [ 문제 4 ]

![문제 4](https://user-images.githubusercontent.com/74524184/198872731-8c182835-20cf-4bb0-8d8e-bebe2cf3818a.png)

<strong>- word 각 글자를 '대문자 / 소문자 / 그 외'로 판단하는 if문 생성</strong>

<strong>- 각 if문 속에 newStr += 반대로 변환된 글자 기능 넣기</strong>

<strong>- 1부터 word.length까지 실행되는 반복문을 돌며 앞에서부터 해당되는 if문 실행</strong>

<strong>- 최종 newStr을 return</strong>

---

## [ 문제 5 ]

![문제 5](https://user-images.githubusercontent.com/74524184/198880130-4e6451ca-408f-442e-b14c-70c8eee30175.png)

<strong>- 금액 단위 배열, 0으로 초기화된 지갑 배열 생성</strong>

<strong>- (입력값 -= 금액요소) 실행 후 지갑 배열 요소 +1 하기</strong>

<strong>- '입력값 < 금액요소' 만족할 때까지 (입력값 -= 금액요소) 반복</strong>

<strong>- for문으로 금액 배열 끝까지 순회</strong>

<strong>- 최종 지갑 배열을 return</strong>

---

## [ 문제 6 ]

![문제 6](https://user-images.githubusercontent.com/74524184/199018545-5e1a37c6-4eb3-40f5-b971-b7cb23daee66.png)

<strong>- 입력 배열을 { email: arr[0], nickname: arr[1] } 형식의 새 배열로 형성</strong>

<strong>- index 증가시켜가며 닉네임 2글자씩 잘라 비교 기준 생성</strong>

<strong>- for문으로 새 배열 끝까지 순회하며 닉네임 중복 검사</strong>

<strong>- 닉네임 중복 있는 배열의 email값 새 배열로 옮기기</strong>

<strong>- email 옮긴 새 배열에서의 중복 검사</strong>

<strong>- 최종 email 배열 오름차순으로 정렬해 return</strong>
