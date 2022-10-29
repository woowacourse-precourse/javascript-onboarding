function problem6(forms) {
    let checkObj = {};
    forms.forEach(v=> {
        const [, name] = v;
        for(let i=0; i<name.length-1; i++) {
            const checkName = name.substr(i, 2);
            if(checkObj[checkName]) checkObj[checkName] +=1;
            else checkObj[checkName] = 1;
        }
    })
}

module.exports = problem6;
