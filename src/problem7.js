function problem7(user, friends, visitors) {
	const friendLists = new Map()
	const scores = new Map()

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

	const userFriends = friendLists.has(user) ? friendLists.get(user) : []
	const mutualFriendLists = []
	userFriends.forEach(friend => {
		const mutualFriends = friendLists.get(friend).filter(name => name !== user)
		mutualFriendLists.push(...mutualFriends)
	})
}

module.exports = problem7
