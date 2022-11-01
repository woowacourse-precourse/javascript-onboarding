function problem7(user, friends, visitors) {
    var answer;
    let availableFriendsArray = friends.filter((el) => el.indexOf(user) !== -1);
    let bridgeUsers = availableFriendsArray.map((el) =>
        el.find((el) => el !== user)
    );
    let recommended = [];
    for (let i = 0; i < bridgeUsers.length; i++) {
        relationFromBridges = friends.filter((el) =>
            el.includes(bridgeUsers[i])
        );
        for (let j = 0; j < relationFromBridges.length; j++) {
            recommended.push(
                relationFromBridges[j].find(
                    (el) => el.indexOf(bridgeUsers[i]) == -1 && el !== user
                )
            );
        }
    }

    let filterUndefined = recommended.filter((el) => el !== undefined);

    const deduplicate = (arr) => arr.filter((el, i) => arr.indexOf(el) === i);
    const countNum = (arr, text) => arr.filter((el) => el === text);

    const uniqueArr = deduplicate(filterUndefined);
    const recommendedList = uniqueArr.map((item) => ({
        id: item,
        score: countNum(filterUndefined, item) * 10,
    }));

    const uniqueVisitors = deduplicate(visitors);
    const visitorsScoreList = uniqueVisitors.map((item) => ({
        id: item,
        score: countNum(visitors, item),
    }));

    for (let i = 0; i < visitorsScoreList.length; i++) {
        if (bridgeUsers.includes(visitorsScoreList[i].id)) continue;
        recommendedList.push(visitorsScoreList[i]);
    }

    recommendedList.sort(function (a, b) {
        if (a.score === b.score) {
            return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
        } else {
            return b.score - a.score;
        }
    });

    answer = recommendedList.map((el) => el.id).slice(0, 5);

    return answer;
}
module.exports = problem7;
