function problem6(forms) {
    let checkObj = {};
    let checkArr = [];
    let mailArr = [];
    forms.forEach(v=> {
        const [, name] = v;
        checkArr.push(duplicateTest(name));
        for(let i=0; i<name.length-1; i++) {
            const checkName = name.substr(i, 2);
            if(checkObj[checkName]) checkObj[checkName] += 1;
            else checkObj[checkName] = 1;
        }
    })
    checkArr.forEach((v,i)=> {
        v.forEach(d=> {
            if(checkObj[d]>1) {
                const [mail] = forms[i].slice(0,1);
                mailArr.push(mail);
            }
        })
    })
    mailArr = new Set(mailArr);
    mailArr = [...mailArr];
    return mailArr.sort();
}

function duplicateTest(name) {
    let testArr = [];
    for(let i=0; i<name.length-1; i++) {
        const text = name.substr(i, 2);
        testArr.push(text);
    };
    return testArr;
}

module.exports = problem6;
