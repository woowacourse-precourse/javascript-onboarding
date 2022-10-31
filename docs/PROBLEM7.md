## 🚀 기능 요구 사항

레벨 2의 팀 프로젝트 미션으로 SNS(Social Networking Service)를 만들고자 하는 팀이 있다. 팀에 속한 크루 중 평소 알고리즘에 관심이 많은 미스터코는 친구 추천 알고리즘을 구현하고자 아래와 같은 규칙을 세웠다.
- 사용자와 함께 아는 친구의 수 = 10점 
- 사용자의 타임 라인에 방문한 횟수 = 1점

사용자 아이디 user와 친구 관계를 담은 이차원 배열 friends, 사용자 타임 라인 방문 기록 visitors가 매개변수로 주어질 때, 미스터코의 친구 추천 규칙에 따라 점수가 가장 높은 순으로 정렬하여 최대 5명을 return 하도록 solution 메서드를 완성하라. 이때 추천 점수가 0점인 경우 추천하지 않으며, 추천 점수가 같은 경우는 이름순으로 정렬한다.

### 제한사항

- user는 길이가 1 이상 30 이하인 문자열이다.
- friends는 길이가 1 이상 10,000 이하인 배열이다.
- friends의 각 원소는 길이가 2인 배열로 [아이디 A, 아이디 B] 순으로 들어있다.
  - A와 B는 친구라는 의미이다.
  - 아이디는 길이가 1 이상 30 이하인 문자열이다.
- visitors는 길이가 0 이상 10,000 이하인 배열이다.
- 사용자 아이디는 알파벳 소문자로만 이루어져 있다.
- 동일한 친구 관계가 중복해서 주어지지 않는다.
- 추천할 친구가 없는 경우는 주어지지 않는다.

### 실행 결과 예시

| user   | friends                                                                                                                         | visitors                                      | result                    |
| ------ | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------- |
| "mrko" | [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ] | ["bedi", "bedi", "donut", "bedi", "shakevan"] | ["andole", "jun", "bedi"] |


------------------------------
<br>

## [작성자] : 김동우(DongWooKim97)  
</br> 

## 📝 구현할 기능 목록
</br> 

### ✔️ 기능 1. 입력값에 대한 유효성 및 에러(예외처리) 검사
<br>

  - 입력값에 에러가 없는지, 입력 양식이 유효한지 검사한지 검사  

    - user의 길이가 1 이상 30 이하의 문자열인지 확인 -> ```userLengthInRange()```

    - 배열 friends의 길이가 1 이상 10,000 이하인지 확인 -> ```friendsLengthInRange()```

    - 아이디의 길이가 1 이상 30 이하인지 확인 -> ```idLengthInRange()```
    
    - 배열 visitors의 길이가 0 이상 10,000 이하인지 확인 -> ```visitorsLengthInRange()``` 

    - 사용자의 아이디가 알파벳 소문자로만 이루어져 있는지 확인 -> ```userIdValueCase()```

    - 동일한 친구 관계가 중복되어 있는지 확인 -> ```duplicateFriendship()```
  
</br> 

### ✔️ 기능 2. 입력받은 user / friends 를 활용하여 유저의 친구 목록을 만드는 함수
<br>

  - 입력받은 user는 사용자의 이름이고, friends는 유저의 친구목록을 포함해 유저 친구의 친구 목록이 포함된 배열이다.

  - 친구 추천 알고리즘을 구현하고자 하는 문제이기에, 유저의 친구는 점수를 카운팅하면 안됨 ❗️
    - 친구 추천❓ -> 새로운 친구를 추천해주는 시스템으로, 이미 친구인 사람을 추천해주면 ❌

  - 따라서, user와 친구 목록 배열인 friends을 용해 유저의 친구들을 1차적으로 선별한다.
    ```javascript
      function makeUserFriendList(user, friends) {
        const userFriend = []
        friends.forEach((v) => {
          if (v.includes(user)) {
            userFriend.push(v.filter(i => i !== user).join(''));
          }
        })
        return userFriend
        }
    ````

  - 함수 안에는 ```userFriend```라는 새로운 배열을 만들고, ```friends```목록을 순회하며 ```user```라는 이름이 포함되어 있지 않는 요소만 ```userFriend```배열에 추가하는 함수 ❗️

</br> 

### ✔️ 기능 3. 입력받은 user 를 활용하여 유저가 포함되지 않은 배열 선별하는 함수
<br>

  - 문제 자체가 친구 추천 알고리즘이기에, 입력값 ```friends```에서 ```user```값을 제외해야 한다.

  - ```user```를 제외하고 남은 배열이 친구의 친구이거나 지인일 가능성이 높아지기에 2차적으로 선별.
    ```javascript
      function makeWithoutUserList(user, friends) {
        const withoutUser = [];
        friends.forEach((v) => {
          if (v.includes(user)) {
            withoutUser.push(v)
          }
        })
        return withoutUser
        }
    ````

  - 함수 안에는 ```withoutUser```라는 새로운 배열을 만들고, ```friends```목록을 순회하며 ````user````라는 이름이 포함되어 있지 않는 요소만 ```withoutUser```배열에 추가하는 함수 ❗️