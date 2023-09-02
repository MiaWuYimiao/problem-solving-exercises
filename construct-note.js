// add whatever parameters you deem necessary
function constructNote(message, letter) {
    const messageFreq = {};
    const letterFreq = {};

    for(let char of message) {
        messageFreq[char] = ++messageFreq[char] || 1;
    }

    for(let char of letter) {
        letterFreq[char] = ++letterFreq[char] || 1;
    }

    for(let char in messageFreq) {
        if(!letterFreq[char]) return false;
        if(letterFreq[char] < messageFreq[char]) return false;
    }
    return true;
}

module.exports = constructNote;