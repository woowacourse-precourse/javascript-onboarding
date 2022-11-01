/*- 두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함되어 있는 경우 중복으로 간주한다.
- 크루는 1명 이상 10,000명 이하이다.
- 이메일은 이메일 형식에 부합하며, 전체 길이는 11자 이상 20자 미만이다.
- 신청할 수 있는 이메일은 `email.com` 도메인으로만 제한한다.
- 닉네임은 한글만 가능하고 전체 길이는 1자 이상 20자 미만이다.
- result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거한다. */
const checkIsValid = (forms) => {
    let valid = true;
    if (forms.length < 1 || 10000 < forms.length) valid = false;
    let regex = new RegExp("[a-z0-9]+@email.com");
    forms.forEach((el) => {
        if (!regex.test(el[0])) valid = false;
        if (el[1] < 1 || 19 < el[1] || !/^[ㄱ-ㅎ|가-힣]+$/.test(el[1]))
            valid = false;
    });
    return valid;
};

function problem6(forms) {
    if (!checkIsValid(forms)) return -1;
    let answer = [];
    let length = forms.length;
    for (let i = 0; i < length; i++) {
        let name = forms[i][1];
        for (let j = 0; j < name.length - 1; j++) {
            let twoChar = name[j] + name[j + 1];
            for (let k = i + 1; k < length; k++) {
                if (forms[k][1].includes(twoChar))
                    answer.push(forms[i][0], forms[k][0]);
            }
        }
    }
    answer = [...new Set(answer)].sort();
    console.log(answer);
    return answer;
}
problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
]);
module.exports = problem6;
