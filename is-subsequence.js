// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let str1Ind = 0;
    let str2Ind = 0;
    if(!str1) return true;
    while(str2Ind < str2.length) {
        if(str2[str2Ind] === str1[str1Ind]) {
            str1Ind++;
        } 
            str2Ind++;
    }
    return str1Ind === str1.length;
}

module.exports = isSubsequence;
