/*
 #기능 요구 사항
사용자 아이디 user와 친구 관계를 담은 이차원 배열 friends, 
사용자 타임 라인 방문 기록 visitors가 매개변수로 주어질 때, 
미스터코의 친구 추천 규칙에 따라 점수가 가장 높은 순으로 정렬하여 
최대 5명을 return 하도록 solution 메서드를 완성. 
이때 추천 점수가 0점인 경우 추천하지 않으며, 추천 점수가 같은 경우는 이름순으로 정렬.

1. user와 친구관계인 사람을 구한다.
2.친구가 아닌 방문자를 구한다.
3.함께아는 친구를 구한다.
4.방문자와 함께아는 친구를 통해서 점수를 계산한다.
5.추천 목록 정렬한다.

*/

function problem7(user, friends, visitors) {
    let answer;
    answer = solution(user, friends, visitors);
    return answer;
}

function solution(user, friends, visitors) {
    let answer = [];
    let friendsWithUser = [];
    let recommendedFriends = [];
    let newVisitors = [];

    friendsWithUser = findFriends(user, friends);
    newVisitors = findNewVisitors(visitors, friendsWithUser);
    const recommendMap = calculateScore(newVisitors, recommendedFriends, friendsWithUser, friends, user);
    answer = OrderRecommendFriends(recommendMap);

    return answer;
}

/*추천 목록 정렬한다. */
function OrderRecommendFriends(recommendMap) {
    
    const recommendMapToArray = [...recommendMap];
    const result = [];

    let resultOrderByValue = recommendMapToArray.sort((a, b) => b[1] - a[1]);
    let resultOrderByKey = resultOrderByValue.sort((a, b) => b[0] - a[0]);


    resultOrderByKey.forEach(element => result.push(element[0]));

    return result;
}

/*방문자와 함께아는 친구를 통해서 점수를 계산한다.*/
function calculateScore(newVisitors, recommendedFriends, friendsWithUser, friends, user) {
    const recommendMap = new Map();

    newVisitors.forEach(element => {
        if (recommendMap.get(element) === undefined) {
            recommendMap.set(element, 3);
        } else {
            recommendMap.set(element, recommendMap.get(element) + 3);
        }
    })


    /*함께아는 친구를 구한다.*/
    while (friendsWithUser && friendsWithUser.length !== 0) {
        let friend = friendsWithUser.pop();

        friends.forEach(element => {
            if (element[0] !== user && element[1] !== user) {
                if (element[0] === friend) {
                    recommendedFriends.push(element[1]);
                }

                if (element[1] === friend) {
                    recommendedFriends.push(element[0]);
                }
            }

        })
    }


    const friendSet = new Set(recommendedFriends);
    recommendedFriends = [...friendSet];


    recommendedFriends.forEach(element => {
        if (recommendMap.get(element) === undefined) {
            recommendMap.set(element, 10);
        } else {
            recommendMap.set(element, recommendMap.get(element) + 10);
        }
    })

    return recommendMap;
}

/*친구가 아닌 방문자를 구한다.*/
function findNewVisitors(visitors, friendsWithUser) {
    let newVisitors = visitors.filter(x => !friendsWithUser.includes(x));
    return newVisitors;
}

/*user와 친구관계인 사람을 구한다.*/
function findFriends(user, friends) {
    let friendsWithUser = [];
    friends.forEach(element => {
        if (element[0] === user) {
            friendsWithUser.push(element[1]);
        }

        if (element[1] === user) {
            friendsWithUser.push(element[0]);
        }
    })

    return friendsWithUser;
}

module.exports = problem7;



