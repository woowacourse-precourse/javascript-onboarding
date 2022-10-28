function problem7(user, friends, visitors) {
	const friendLists = new Map()

	friends.map(([userA, userB]) => {
		if (friendLists.has(userA)) {
			friendLists.get(userA).push(userB)
		} else {
			friendLists.set(userA, [userB])
		}

		if (friendLists.has(userB)) {
			friendLists.get(userB).push(userA)
		} else {
			friendLists.set(userB, [userA])
		}
	})
}

module.exports = problem7
