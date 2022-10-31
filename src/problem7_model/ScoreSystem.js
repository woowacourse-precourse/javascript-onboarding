//@ts-check
const Recommendation = require("./Recommendation");
const User = require("./User");

class ScoreSystem {
	constructor() {
		this._userRelations = [];
	}
	mountUserRelation(relation) {
		this._userRelations.push(relation);
	}
	recommend(user) {
		const result = new Map();
		console.log(this._userRelations);
		for (const userRelation of this._userRelations) {
			for (const userScore of userRelation.calculateScore(user)) {
				console.log(userScore);
			}
		}
		// return new Recommendation([]);
	}
}


module.exports = ScoreSystem;