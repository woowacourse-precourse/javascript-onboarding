mrko - donut shakevan 

donut - mrko andole jun

andole - donut shakevan

jun - donut shakevan

shakevan - mrko andole jun

bedi - ?

일단 userFriend와 아닌 사람을 구분
아닌 사람 = 전체 유저 - (userFriend , user)

전체 유저는 모든 데이터를 탐색해서 중복을 제거한다
userFriend는 friends에서 user가 있는 배열을 찾고 그 옆에 있는 친구를 저장한다

친구 아닌 사람은 전체 유저에서 userFriend의 내용과 user본인을 뺀 값들을 모아 저장한다

아닌 사람만 추천해야 하므로 
아닌 사람만 점수를 매김

점수는 친구의 친구이면 10점+
-userFriend와 아닌사람의 friend를 구해 같은 인자들을 구하여 
그 수만큼 곱한다

visitor이면 1점+
visit한 수만큼 곱한다


마지막은 중복제거, sort
중복제거는 []
sort는 점수 높은 순 - 알파벳 순
sort는 return이 양수면 바꾸고 0이하는 안바꾼다