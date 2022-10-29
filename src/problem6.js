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

    // 2. 중복된 글자가 있는 닉네임의 이메일을 배열에 추가
    for (let i = 0; i < nicknames.length; i++) {
        if (checkNickname(nicknames[i], nicknames)) {
            answer.push(forms[i][0]);
        }
    }

    return answer;
}

module.exports = problem6;
