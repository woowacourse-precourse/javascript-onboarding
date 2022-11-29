
# 📋 [Problem1 Solving]
📝[ 문제 1](https://github.com/woowacourse-precourse/javascript-onboarding/blob/main/docs/PROBLEM1.md)  <br><br>
💁‍♂️[ 문제 1 풀이 ](https://github.com/soohyun-dev/javascript-onboarding/blob/soohyun-dev/src/problem1.js)

## 📌 요구사항

1 ~ 400 페이지  
왼쪽은 홀수, 오른쪽은 짝수  
한 사람당 왼쪽, 오른쪽 페이지가 각각 주어짐.  

다음 규칙의 게임을 이긴 사람이 책을 갖는다.
|---|
```
1. 각 페이지 번호의 각 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구함.
2. 각 사람은 두 페이지의 점수 중, 가장 큰 점수를 자신의 점수라 하고 비교한다.
3. 첫번째, 마지막 페이지는 펼치지 않음. 즉, 1, 400 페이지는 입력 되지 않는다.
4. 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1 로 return
 ```

## ❗예외사항


1. 왼쪽 오른쪽 페이지 번호가 같은 경우.
2. 왼쪽 페이지 번호가 오른쪽 페이지 번호보다 높은 경우.
3. 두 번호의 차이가 1을 넘어가는 경우.  


왼쪽페이지에서 오른쪽페이지를 뺏을 때 -1이 나오지 않는 경우들은 모두 예외상황이다.
|---|

## 📲 기능 목록
> #### 1. 페이지 번호의 각 숫자들을 더한 값을 구해준다. => ```pageNumEachPlus```
>
> - 숫자 리스트를 파라미터로 받는다. (parameter: numList)
> - 총합을 return 한다.
>
> #### 2. 페이지 번호의 각 숫자들을 곱한 값을 구해준다. => ```pageNumEachMultiply```
> - 숫자 리스트를 파라미터로 받는다. (parameter: numList)
> - 총곱을 return 한다.
> #### 3. 예외사항에 해당하는 것이 있는지 확인해준다. => ```except```


---

<br>

# 📋 [Problem2 Solving]

📝[ 문제 2](https://github.com/woowacourse-precourse/javascript-onboarding/blob/main/docs/PROBLEM2.md)  <br><br>
💁‍♂️[ 문제 2 풀이 ](https://github.com/soohyun-dev/javascript-onboarding/blob/soohyun-dev/src/problem2.js)

## 📌 요구사항

문자열이 주어진다.  
문자열에서 2개 이상 중복되는 문자가 이어져있다면 삭제 시킨다.  
삭제된 빈자리를 다시 양쪽의 문자를 땡겨서 채운다.

위 과정을 반복해서 더 이상 중복되는 문자가 연이어 나오지 않는다면 그 문자를 return.


## 📝 해결전략

```
연속되는 문자가 짝수개 단위라면 스택에 넣었다가 pop 하는 방법을 쓰면 되지만,  
이 방법을 쓰면 연속되는 문자 개수가 홀수일경우가 예외사항 발생한다.
```

따라서, 이 문제는 문자를 빈배열에 저장해가면서 이전에 담은 문자가 넣을 문자랑 같다면 배열에 저장하지 않는다.  
이때, 변수 하나를 boolean 값으로 설정하여 같은 단어가 연속으로 나오는 중인지를 체크하게 해준다.  
연속으로 삭제가 되다가 이제 값이 달라지면, boolean 값을 다시 바꿔주고 배열에 저장되어있는 연속되던 값을 pop 시키자.

최종적으로 남은 문자를 return

## 📲 기능 목록

> #### 1. 연속되는 중복 된 문자를 제거해준다. => ``` deleteWords ```
>
> - 단어를 newWords 라는 스택에 담아준다.
> - 이전에 담은 단어랑 현재 담을 단어가 같다면, 현재 단어는 스택에 담지 않는다.
> - 이때, 연속되는 단어가 나왔다는 알림으로 check 변수를 true 로 바꿔준다.
> - 또한, 연속되는 단어가 나와 단어의 변화가 생긴다는 알림으로 newtRepeat도 true로 바꿔준다.
> - nextRepeat가 true로 리턴될 경우, deleteWords 함수가 다시 호출 된다.
> - 연속되는 단어가 중단된 경우, 스택에 저장된 연속된 단어를 pop 시킨다.
> - 또한, 해당 단어가 연속되는 것이 끝났다는 것을 알리기 위해 check 를 false로 바꿔준다.
> - 순회를 다 끝난 뒤에 check 가 true로 남아있다면,
> - 스택에 지워야 할 단어가 하나 남아있는 것이므로 pop 시켜준다.
> - 만들어진 단어를 이어, nextRepeat 값과 함께 return 한다.
>
> #### 2. while 문
>
> - ```deleteWords``` 가 return 하는 nextRepeat 값을 repeat 라는 변수에 할당 받는다.
> - repeat 변수가 true 라면 ```deleteWords```를 통해 연속되는 문자 삭제 작업이 수행되었다는 뜻이므로, return 받은 문자를 재차 ```deleteWords```에 담아 호출한다.
> - repeat 변수가 false 라면, 더이상 연속하는 문자가 존재하지 않는 것이므로 while문을 종료한다.

---

<br>

# 📋 [Problem3 Solving]

📝[ 문제 3](https://github.com/woowacourse-precourse/javascript-onboarding/blob/main/docs/PROBLEM3.md)  <br><br>
💁‍♂️[ 문제 3 풀이 ](https://github.com/soohyun-dev/javascript-onboarding/blob/soohyun-dev/src/problem3.js)

## 📌 요구사항

1번 부터 주어진 숫자까지 369 게임을 실행.  
총 몇번의 박수를 쳤는지 구하여라.  
참고로, 각 숫자에서 3,6,9 숫자에 각각 한번씩 박수를 친다.

## 📝 해결전략

1번부터 숫자를 증가시키면서,  
각 문자의 369개수를 체크해주는 함수를 호출해 결과값을 더해나아가자.

## 📲 기능목록

> #### 1. 문자의 369 개수를 세어준다. => ```cntNum```
>
> - 파라미터로 확인할 숫자를 전달 받는다. (parameter: num)
> - restNum 이라는 변수에 3 or 6 or 9 인 숫자만 filter로 정리하여 저장한다.
> - restNum 변수의 길이가 곧, 3 or 6 or 9 인 숫자들의 개수이므로 이 값을 return 한다.
>
> #### 2. return 받은 값을 cnt 변수에 더해준다.
>
> - ```cntNum```를 통해 return 받은 값을 cnt 변수에 합산해준다.
> - 최종적으로 cnt 변수에 담긴 값이 총 몇번의 박수를 쳐야하는 지에 대한 해답이다.

---

<br>

# 📋 [Problem4 Solving]

📝[ 문제 4](https://github.com/woowacourse-precourse/javascript-onboarding/blob/main/docs/PROBLEM4.md)  <br><br>
💁‍♂️[ 문제 4 풀이 ](https://github.com/soohyun-dev/javascript-onboarding/blob/soohyun-dev/src/problem4.js)

## 📌 요구사항

입력되는 문자를 청개구리 사전을 참고하여 해당하는 문자로 바꾸어라.  
바꾼 결과값을 출력.

## 📝 해결전략

A-Z 는 65번부터 90번, a-z 는 97번부터 122번  
|---|

아스키코드를 이용해야겠다.  
우선, 대문자인지 소문자인지를 나눠주자.  
대문자일경우,  
주어지는 각 문자의 아스키코드값에서 65를 빼고 남은 숫자만큼을 90에서 빼어서  
그 결과값을 아스키코드로 변환하여 저장시켜주면 되겠다.  
소문자일 경우,
비슷하게 한다. 대신 65=>97, 90=>122으로 생각해서 풀면 되겠다.

## 📲 기능목록

> #### 1. 입력된 번호에 맞는 청개구리사전 문자를 return 시켜준다. => ```frogDict```
>
> - 파라미터로 확인할 문자를 받는다. (parameter: word)
> - 문자가 대문자라면 해당 값의 아스키코드값에서 65를 빼고 남은 숫자만큼을 90에서 뺀 값을 frogDictKey 변수에 저장한다.
> - 문자가 소문자라면 해당 값의 아스키코드값에서 97을 빼고 남은 숫자만큼을 122에서 뺀 값을 frogDictKey 변수에 저장한다.
> - 저장된 frogDictKey 값의 아스키코드 문자에 맞는 값을 return 한다.
>
> #### 2. 문자를 쪼개고 ```frogDict```에 하나씩 넣어 호출하고 그 return 값을 새 문자로 만든다.
>
> - 이때, 바꿀값이 공백일 경우, 공백을 그대로 더해준다.

---

<br>

# 📋 [Problem5 Solving]

📝[ 문제 5](https://github.com/woowacourse-precourse/javascript-onboarding/blob/main/docs/PROBLEM5.md)  <br><br>
💁‍♂️[ 문제 5 풀이 ](https://github.com/soohyun-dev/javascript-onboarding/blob/soohyun-dev/src/problem5.js)

## 📌 요구사항

돈의 액수를 줄 수 있는 화폐로 나눈다.  
이때, 화폐 개수의 총합이 최소가 되게 하여라.

1<= money <=1000000
|---|

## 📝 해결전략

50000부터 1원까지 차례로 나눠가면서 몫을 더해주고 나머지만 게속 남아가게 하자.  
중간에 나머지가 0이 되면 종료.

## 📲 기능목록

> #### 1. 각 화페에 맞게 금액을 나눠서 나머지를 도출해 나아간다. => ```divideCurrency```
>
> - moneyType에는 총 9가지의 화폐단위가 저장되어 있다.
> - while 문을 통해, 큰값부터 차례대로 나누어가면서 몫을 구해 cntMoneyTyep 배열에 할당한다.
> - 이때, 각 화폐로 나눈 나머지가 0이 나온다면, 더 이상 나누어줄 필요가 없으므로 while문을 종료한다.
> - cntMoneyType 배열을 return 한다.

---

<br>

# 📋 [Problem6 Solving]

📝[ 문제 6](https://github.com/woowacourse-precourse/javascript-onboarding/blob/main/docs/PROBLEM6.md)  <br><br>
💁‍♂️[ 문제 6 풀이 ](https://github.com/soohyun-dev/javascript-onboarding/blob/soohyun-dev/src/problem6.js)

## 📌 요구사항

닉네임 중 같은 글자가 연속적으로 포함 될 경우 두 계정 모두 사용 제한.  
사용제한이 걸린 계정의 이메일을 문자열 오름차순 정렬하여 return  
이때, 중복은 제거하라.

## 📝 해결전략

dict 를 활용하자.  
|---|

닉네임의 연속된 조합 단어를 dict에 키값으로 저장하고 카운트 1씩해줌.  
이때, 같은 글자가 연속적으로 포함된다면 같은 키값을 가질 것이고, 카운트는 1이 넘어가게됨.  
이 값들을 찾아내어. 해당 키값을 가지고 있는 계정들의 이메일을 따로 저장.  
문자열 중복제거하고 정렬하여 출력.

## ⚠️ 주의!

###### ```refuseEmail```에서 map 을 사용하면 email 을 두번 이상 중복되게 추가할 수도 있으므로 for loop 를 사용했다.

## 📲 기능목록

> #### 1. 닉네임으로 만들어질 수 있는 연속된 문자열 생성시켜 return 해준다. => ```makeKeys```
>
> - 파라미터 값으로 닉네임 값을 전달 받는다. (parameter : words)
> - 닉네임 문자를 순차적으로 연결하여 만들어질 수 있는 두개 이상의 문자들의 경우의 수를 모두 확인한다.
> - 모든 경우의 수는 madeKeys 배열에 저장한다.
> - 만들어진 madeKeys 배열을 return 한다.
>
> #### 2. 입력된 닉네임을 키값에 넣어준다. => ```enterDict```
>
> - 파라미터 값으로 입력 모든 유저의 이메일 정보와 닉네임을 전달받는다. (parameter : accountInfo)
> - 각 유저의 닉네임 값을 ```makeKeys```에 전달하여 호출한다.
> - ```makeKeys```의 결과값을 makeResult 변수에 할당한다.
> - 모든 경우의 수들이 담긴 makeResult 을 순회하여 nickNameDict 라는 dictionary에 key 값으로 할당한다.
> - nickNameDict 에 처음 담기는 key 값이라면, value 값 1을 저장.
> - nickNameDict 에 이미 담겨있는 key 값이라면, 해당 value 값을 1 증가 시켜준다.
>
> #### 3. 키값의 value 값이 2개 이상인 값들을 return 해준다. => ```checkValue```
>
> - 파라미터 값으로 닉네임의 중복된 단어의 갯수가 담긴 dictonary를 전달 받는다. (parameter: checkDict)
> - value 값이 1이 넘어가는 키값들만으로 이루어진 값을 keys 라는 변수에 저장한다.
> - value 값이 1이 넘어간다는 것은 중복되는 단어가 있다는 것을 뜻한다.
> - keys 변수를 return 한다.
>
> #### 4. value 값이 2개 이상인 key값들을 dictionary에 저장한다.
>
> - refuseList 라는 dictionary 에 ```checkValue```를 통해 return 받은 중복되는 키값들을 value 가 true 인 값으로 저장한다.
> - 이후, ```refuseEmail```에서 이 refuseList 를 이용하여 사용하지 못할 닉네임이라는 것을 알려줄 것이다.
>
> #### 5. 사용 제한 할 이메일을 return 해준다. => ```refuseEmail```
>
> - 파라미터 값으로 입력 모든 유저의 이메일 정보와 닉네임을 전달받는다. (parameter : accountInfo)
> - 각 유저의 이메일 값과 닉네임 값을 email과 nickName 변수에 저장한다.
> - ```makeKeys```를 통해 해당 유저의 닉네임이 만들어낼 수 있는 경우의 수들으 makeResult 변수에 할당한다.
> - makeResult 값들을 순회하면서 refuseList에 담겨있는 값이 있는지를 확인한다.
> - 만약 한 단어라도 refuseList에 담겨있다면, 그 닉네임은 사용할 수 없으므로 해당 유저의 email을 result 에 저장한다.

---

<br>

# 📋 [Problem7 Solving]

📝[ 문제 7](https://github.com/woowacourse-precourse/javascript-onboarding/blob/main/docs/PROBLEM7.md)  <br><br>
💁‍♂️[ 문제 7 풀이 ](https://github.com/soohyun-dev/javascript-onboarding/blob/soohyun-dev/src/problem7.js)

## 📌 요구사항

서로의 친구관계가 담긴 배열이 주어짐. 두명은 서로 친구라는 뜻.  
user 의 타임라인 방문자 리스트도 주어짐.

user 와 함께 아는 친구의 수 +=10  
|---|
<b>user 타임라인 방문 횟수 +=1</b>


최종적으로 0점과 현재 이미 친구인 사람들을 제외한 사람들을 점수대로 내림차순, 점수가 같을 시 이름순으로 오름차순 정렬하여 최대 5명까지 출력하라.  

## 📝 해결전략

서로 친구에 대한 정보를 양방향으로 저장.  
dict에 각 아이디의 배열 index 번호 정보를 담아주자.  
해당 아이디의 index 번호에 해당 아이디의 친구 정보가 담겨있다.  
user 정보는 배열 0번째 인덱스에 저장.

## 📲 기능목록

> #### 1. friends 를 순회하면서 dict에 각 아이디 인덱스 정보와 배열을 생성해준다. => ```createInfo```
>
> - 파라미터 값으로 친구 관계와 index 정보를 전달받는다. (parameter : eachFriend, idx)
> - 전달받은 친구 관계 eachFriend를 순회한다.
> - 각 이름을 name1, name2 에 할당한다.
> - 전역 dictionary로 idIndexInfo가 선언 되어 있는데, 이 값에 친구 관계에 담겨있는 이름들을 idx 를 value 값으로 설정한다.
> - 이 값을 저장하는 이유는 dictionary에 이름과 키값을 저장함으로써 해당 이름이 몇번 인덱스를 소유하고 있는지 알 수 있고 추후에 이 값으로 점수계산에 활용하기 위함이다.
> - 참고로 user 는 무조건 1번 인덱스를 부여한다.
> - 중복되는 이름은 없다.
> - friendsInfo 라는 전역 배열이 있다. 이 배열의 각 인덱스에 해당하는 값은 idIndexInfo 에 저장되어있는 이름의 index와 동일하다.
> - friendsInfo 는 친구관계인 사람들을 양방향 트리 형태로 저장한다.
> - 간선하나 사이로 이어져있는 이름들은 현재 이미 친구 상태임을 나타낸다.
>
> #### 2. 각 아이디의 점수를 카운트해준다. => ```cntScore```
>
> - 파라미터 값으로 방문자들과 인덱스를 전달받는다. (parameter : visitersInfo, idx)
> - 앞서 ```createInfo``` 의 파라미터로 전달된 eachFriend에 모든 이용자의 이름이 담겨있는 것이 아니다.
> - 따라서 ```cntScore``` 내에서도 idIndexInfo dictionary를 채워주는 작업과 friendsInfo배열, friendsScore 배열에 값을 추가해주는 작업을 동일하게 진행한다.
> - visitor의 인덱스 정보를 알아야 하므로 idIndexInfo 에 이름을 키값으로 넣어 value 값을 num 변수에 할당한다.
> - num 변수는 방문자의 index 정보를 담고 있으므로 friendScore에 해당 인덱스 위치 값을 +1 해준다.
>   요구사항의 "user 타임라인 방문횟수 +=1" 을 실현하는 것이다.
>
> #### 3. 함께아는 친구의 수에 대한 정보를 점수화 시켜 카운트해준다. => ```cntKnowScore```
>
> - 파라미터 값으로 user 를 전달받는다. (parameter : USER)
> - 요구사항의 "user 와 함께 아는 친구의 수 +=10" 을 실현하는 함수이다.
> - 이전 ```createInfo``` 에서 friendsInfo 배열을 채워줬었다.
> - 파라미터 값으로 전달받은 user 의 친구들을 순회한다.
> - 간선 하나로 이어져 있는 이 친구들은 이미 친구들이므로 점수를 추가해주지 않는다.
> - 이 친구들의 친구들이 target 이다.
> - 간선 두개로 이어져있는 친구들을 순회하면서 friendsScore에 해당 이름의 idx에 맞게 +10점을 해준다.
>
> #### 4. 결과로 나온 값을 두가지 우선순위에 맞게 정렬한다. => ```sortList```
>
> - (1) 점수 내림차순
>   - curScore가 크다면 우선순위이다.
> - (2) 이름 내림차순 (점수가 같은 경우)
>   - curName의 아스키코드값이 낮다면 우선순위이다.
>
> #### 5. 점수 정보 중에서 이미 친구인 사람들을 제외해주고 ```sortList```를 통해 정렬한다. 이후, 결과값을 생성한다. => ```makeResult```
>
> - 파라미터 값으로 여태까지의 점수 정보와 현재 친구들의 정보를 전달 받는다. (parameter : Score, Friends)
> - tmpList 는 이미 친구인 사람들을 제외한 정보들을 저장해줄 곳이다.
> - alreadyFriendIdx 는 이미 친구인 사람들의 index 정보를 저장할 곳이다.
> - result 는 makeResult 내에서 모든 과정을 거쳐 만들어진 정보를 저장하는 곳이다.
> - 전달 받은 현재 친구들의 정보 Friends를 순회하여 해당 이름의 인덱스를 alreadyFriendIdx 배열에 저장한다.
> - 이후 Score를 순회하면서 이미 친구가 아닌 사람들의 점수와 인덱스 정보만을 tmpList에 저장한다.
> - 이때, 2번 인덱스부터 for loop 를 도는 이유
>   - 0번 인덱스는 1번 부터의 인덱스 정보를 맞추기위해 넣어주는 garbage 값이다.
>   - 1번 인덱스는 User의 정보가 담겨있기때문에 순회할 필요가 없다.
> - 또한, 점수가 0인 값들도 저장할 필요가 없기때문에 if 문 조건으로 0이 아닌 값들만 받는다.
> - 만들어진 tmpList를 ```sortList``` 에 담아 호출하여 정렬한 뒤, sortedList 변수에 할당한다.
> - 모든 유저 정보가 담겨있는 idIndexInfo dictionary의 키값들을 memberList 변수에 할당한다. 이제, result에 이름을 저장하기 위한 준비과정이다.
> - 만들어진 sortedList 값들을 순회하면서 해당 index값-1의 memberList index 있는 이름을 결과값에 저장한다.
> - -1을 해주는 이유는 memberList에는 0번인덱스 garbage 값이 아니고 user 이름이 저장되어있기 때문에 index정보를 맞춰주기 위함이다.
> - 만들어진 결과값 result 를 return 한다.
>
> #### 6. 추천할 친구가 최대 5명이므로 잘라주는 작업을 한다.
>
> - answer 에는 ```makeResult``` 를 통해 만들어진 결과값이 저장되어있다.
> - 하지만, 5명을 초과할 값이 담겨져 있을 수 있으므로 해당 값을 앞에서 부터 5명 잘라준다.
> - 이 값을 최종 값으로 return 한다.
