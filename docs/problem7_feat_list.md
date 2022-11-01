# 기능 목록

1. 새로운 변수를 만들어 입력받은 friends를 양쪽 순서로 key, value로 넣어준다. (예를들어 ["donut", "andole"]를 입력받으면 array["donut"] = "andole", array["andole"] = "donut")

2. 새로운 변수를 입력받을 때 이미 해당 key값의 value가 존재하는 경우 push를 통해 배열을 추가해준다

3. 또 다른 변수를 만들어 이름별 점수를 0점으로 초기화

4. array[user] 의 목록에 있는 친구를 friend라고 하면 array[friend]의 친구들의 점수를 10점 올려주는 기능

5. visitors 인원들의 점수를 1 올려주는 기능 (단, array[user]의 친구들의 점수는 올려주지 않음)

6. 점수가 가장 높은 최대 5명을 반환하는 기능(동점자는 이름순으로 정렬)