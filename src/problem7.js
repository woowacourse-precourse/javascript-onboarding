function problem7(user, friends, visitors) {
	const users = {};
	const userList = setUserAndUserList(users, friends);
	const recommendList = {};

	countCommonFriends(users, user, userList, recommendList);
	countVisitors(users, user, visitors, recommendList);

	return getRecommendOrder(recommendList);
}

function setUserAndUserList(users, friends) {
	const userSet = new Set();

	for (let [friendA, friendB] of friends) {
		userSet.add(friendA);
		userSet.add(friendB);
		if (!users[friendA]) users[friendA] = [];
		users[friendA].push(friendB);

		if (!users[friendB]) users[friendB] = [];
		users[friendB].push(friendA);
	}

	return Array.from(userSet);
}

function countCommonFriends(users, user, userList, recommendList) {
	for (let anotherUser of userList) {
		if (user === anotherUser || users[user].includes(anotherUser)) continue;

		recommendList[anotherUser] = 0;
		for (let friend of users[anotherUser]) {
			if (users[friend].includes(user)) recommendList[anotherUser] += 10;
		}
	}
}

function countVisitors(users, user, visitors, recommendList) {
	for (let visitor of visitors) {
		if (users[user].includes(visitor)) continue;
		if (!recommendList[visitor]) recommendList[visitor] = 0;
		recommendList[visitor] += 1;
	}
}

function getRecommendOrder(recommendList) {
	return Object.keys(recommendList)
		.sort((a, b) => {
			if (recommendList[a] > recommendList[b]) return -1;
			else if (recommendList[a] < recommendList[b]) return 1;
			else {
				if (a < b) return -1;
				return 1;
			}
		})
		.slice(0, 5);
}

module.exports = problem7;
