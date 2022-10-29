function problem6(forms) {
    var answer = [];
    let nicknames = [];

    // 1. 연속된 중복 글자가 있는지 확인
    for (let i = 0; i < forms.length; i++) {
        nicknames.push(forms[i][1]);
    }
    function checkNickname(nickname, nicknames) {
        let isUnique;
        for (let i = 0; i < nickname.length; i++) {
            let letter = nickname.charAt(i) + nickname.charAt(i + 1);
            if (letter.length < 2) return;
            for (let j = 0; j < nicknames.length; j++) {
                isUnique = nicknames[j].includes(letter) ? false : true;
                if (isUnique === false && j !== nicknames.indexOf(nickname))
                    return true;
            }
        }
        return !isUnique;
    }

    return answer;
}

module.exports = problem6;
