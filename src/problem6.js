//기능 목록 작성(실행용)
//1. 문자들을 닉네임 단위로 모두 비교해서 같은 값이 있으면 이메일을 반환한다.
//2. 이메일들을 전부 배열로 저장한 다음 중복값을 제거한다.
//3. 중복값이 제거된 배열을 오름차순으로 정렬한다.
//4. 중복값을 제거한 배열을 반환한다.

function problem6(forms) {
    var answer;
    let tmpForms = forms;
    let length = tmpForms.length;
    let savaData = [];

    if (length < 1 || length > 10000) {
        answer = "크루는 1명 이상 만 명 이하여야 합니다";
    }

    for (let i = 1; i < length; i++) {
        let tmp = tmpForms[i][1];
        let tmp2 = tmpForms[i + 1][1];

        let max = (tmp.length > tmp2.length) ? tmp.length : tmp2.length;

        for (let j = 0; j < max; j++) {
            for (let k = 0; k < max; k++) {
                if (tmp[j] == tmp2[k] && tmp[j + 1] == tmp2[k + 1]) {
                    saveData.push(tmpForms[i][0], tmpForms[i + 1][0]);
                }
            }
        }
    }

    return answer;
}

module.exports = problem6;