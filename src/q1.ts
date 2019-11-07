let calcWord = function (content: string, keyWord: string) {
    let ans = 0;
    for (let i = 0; i < content.length; i++) {
        if (content.charAt(i) === keyWord) {
            ans += 1;
        }
    }
    console.log(ans);
}

calcWord('Abcdaaeafga', 'a')//4
calcWord('Today is a good day', 'o')//3
calcWord('typescript and javascript', 's')//2