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

</br> 

### ✔️ 기능 4. user의 친구들과 친구 관계인 목록 작성 함수
<br>

  - ```user```가 포함되지 않은 배열 ```withoutUserList```에서 순회하며 ```userFriendsList```배열에 포함되지 않은 요소만을 선별

    -   그렇게 되면 ```user```와도 친구가 아니고, ```userFriendsList```에도 포함되지 않은 '친구의 친구' 혹은 '지인'에 해당하기 떄문 ❗️
    ```javascript
      function makeBestRecommendFriend(withoutUserList, userFriendList) {
       return withoutUserList.map((v) => v.filter((x) => !userFriendList.includes(x))).map(i => i.join(''))
      }
    ````

  - 2차원 배열로 이뤄어진 ```withoutUserList```에서 ```map()```으로 1차로 외부적 순회.
  - 그 다음 큰 배열 아이템 안에는 두 명의 친구 관계가 있기 때문에 ```filter()``` 로 2차적 내부 순회.

</br> 

### ✔️ 기능 5. 함께 아는 친구의 수와 방문 횟수로 추천 점수를 카운팅하는 함수
<br>

  - 기능 4번으로 인해 ```const bestRecommendFriend = makeBestRecommendFriend(withoutUserList, userFriendList);```에는 ```user```와 함께 아는 친구의 수가 담기게 된다
  - 그 이후엔 점수를 카운팅함으로써 순위에 우선성을 부여해야함.

  - 점수를 부여할 땐, 함께 아는 친구의 수(+10)인 경우와 방문 횟수(+1)로 구분하여야 한다.

  - 점수를 부여하기 전, ```const scoreBoard = {};```라는 Object를 만들고, 그 안에 ```{name : score}```식으로 저장할 예정.
    ```javascript
        bestRecommendFriend.forEach((el) => {
          if (scoreBoard[el]) scoreBoard[el] += dudeScore
          else scoreBoard[el] = dudeScore
        })
        
        visitors.forEach((el) => {
          if (userFriendList.includes(el)) return
          else if (scoreBoard[el]) scoreBoard[el] += visitScore
          else scoreBoard[el] = visitScore
        })
    ````

  - 첫 forEach문은 함께 아는 친구 수 -> ```scoreBoard```에 해당하는 이름(key)의 값(value)이 존재하면, 해당 값에 +10 / 없으면 `scoreBoard[name] = 10`
  - 두번째 forEach문은 방문 횟수 -> ```scoreBoard```에 해당하는 이름(key)의 값(value)이 존재하면, 해당 값에 +1 / 없으면 `scoreBoard[name] = 1`

</br> 

### ✔️ 기능 6. 객체배열을 만들어 정렬하는 함수.
<br>

  - 기능 5번으로 인해, ```scoreBoard```은 ```{이름 : 스코어}```형식으로 데이터가 저장되어있는 객체가 생성됨.
  - 제출 조건에 따라, 점수 혹은 이름을 정렬해야 하기 때문에 새로운 배열 ```scoreObj```에 ```{key : name , score : score}``` 형식으로 타입을 맞춰줌.
      ```javascript
      const scoreObj = [];
      const keysArr = Object.keys(scoreBoard);
      const valueArr = Object.values(scoreBoard);

      for (let i = 0; i < keysArr.length; i++) {
        scoreObj.push({
          key: keysArr[i],
          score: valueArr[i]
          })
        }
    ```

  - 또한 이렇게 만든 ```scoreObj```에 두 번의 정렬을 시킨다.
    - 1️⃣ 번째 정렬 -> ```name```의 값으로 먼저 정렬을 한다. 
      - 왜 두 번 정렬하고, ```name```로 먼저하나요 ❓ -> ```score```가 동일할 때는 해당하는 아이템들의 ```name```만 따로 정렬해야 하는데<br>
    (제한사항) 점수가 가장 높은 순으로 정렬하고, 나중에 ```name```으로 정렬하면 동일한 값만의 위치가 바뀌는것이 아닌 전체의 값이 다시 정렬되기 떄문 ❗️
      

    - 2️⃣ 번째 정렬 -> ```score```의 값으로 나중에 정렬을 한다. 
      - ```score```, 문자열로 먼저 정렬했으니 숫자끼리의 자리 교환이 이루어져도 이름순으로 정렬되어있기에 ```score```의 값이 변하지는 않는다!❗️

    <해당 함수 코드>


    ```javascript
    function scoreSort(answer) {
      return answer.sort((a, b) => b.score - a.score);
    }

    function keySort(scoreObj) {
      return scoreObj.sort((a, b) => {
        if (a.key > b.key) return 1
        if (a.key === b.key) return 0
        if (a.key < b.key) return -1
      });
    }
    ```

    