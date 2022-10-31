function problem6(forms) {
    let answer = new Set()
    let nameMap = new Map();

    for (let i = 0; i < forms.length; i++) {
        let [email, name] = forms[i] ;
        for (let j = 0; j < name.length - 1; j++) {
            let sliceName = name[j] + name[j + 1];
            if (nameMap.has(sliceName)) {
                answer.add(nameMap.get(sliceName));
                answer.add(email);
            } else nameMap.set(sliceName, email);
        }
    }
    let answerArr = [...answer];
    return answerArr.sort();
}

module.exports = problem6;
