function problem4(word) {
	const CODE = {
		A_CODE: "A".charCodeAt(0),
		Z_CODE: "Z".charCodeAt(0),
		a_CODE: "a".charCodeAt(0),
		z_CODE: "z".charCodeAt(0),
	};
	let answer;

	answer = Array.from(word).reduce((prev, curr) => {
		console.log(prev, curr);
		return prev + curr;
	});
	return answer;
}

module.exports = problem4;
