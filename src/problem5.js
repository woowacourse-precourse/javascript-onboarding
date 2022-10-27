function problem5(money) {
	const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]

	const result = moneyType.map(type => {
		const moneyLeft = money % type
		const moneyCount = Math.floor(money / type)
		money = moneyLeft

		return moneyCount
	})

	return result
}

module.exports = problem5
