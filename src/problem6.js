function problem6(forms) {
    let nicknameSet = new Set([]);
    // 1단계) 모든 연속되는 패턴을 찾아 집합으로 만들기
    for (let i = 0; i < forms.length; i++) {
        let nickname = forms[i][1];
        for (let j = 0; j < nickname.length - 1; j++) {
            nicknameSet.add(nickname[j] + nickname[j + 1]);
        }
    }

    // 2단계) 패턴이 몇 번 나타나는지 count 하기위해 [pattern, 0] 배열을 생성
    const patternArray = [...nicknameSet];
    for (let i = 0; i < patternArray.length; i++) {
        patternArray[i] = [patternArray[i], 0];
    }

    const includedPatternArray = [];
    // 3단계) count를 하기 위해 모든 닉네임에 대해 포함된 패턴을 확인
    for (let i = 0; i < forms.length; i++) {
        for (let k = 0; k < patternArray.length; k++) {
            let pattern = patternArray[k][0];
            if (forms[i][1].includes(pattern)) {
                includedPatternArray.push([forms[i][0], pattern]);
            }
        }
    }

    // 4단계) 패턴이 포함된 횟수를 각각 카운트
    for (let i = 0; i < patternArray.length; i++) {
        for (let k = 0; k < includedPatternArray.length; k++) {
            if (patternArray[i][0].includes(includedPatternArray[k][1])) {
                patternArray[i][1] += 1;
            }
        }
    }

    // 5단계) 중복패턴만을 담은 배열 생성
    const repetitionArray = patternArray.filter((el) => el[1] >= 2);

    // 6단계) 중복패턴을 포함하는 아이디만을 담은 배열 생성
    const resultIdArray = [];
    for (let i = 0; i < includedPatternArray.length; i++) {
        for (let j = 0; j < repetitionArray.length; j++) {
            if (includedPatternArray[i][1].includes(repetitionArray[j][0])) {
                resultIdArray.push(includedPatternArray[i][0]);
            }
        }
    }

    // 7단계) 중복을 제거하고 오름차순으로 정렬한 배열을 반환합니다.
    const result = new Set([...resultIdArray]);
    return [...result].sort();
}

module.exports = problem6;
