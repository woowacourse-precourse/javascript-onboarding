function problem6(forms) {
    let nicknameSet = new Set([]);
    // 1단계) 모든 연속되는 패턴을 찾아 집합으로 만들기
    for (let i = 0; i < forms.length; i++) {
        let nickname = forms[i][1];
        for (let j = 0; j < nickname.length - 1; j++) {
            nicknameSet.add(nickname[j] + nickname[j + 1]);
        }
    }
}

module.exports = problem6;
