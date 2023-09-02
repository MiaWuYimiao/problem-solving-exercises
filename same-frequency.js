// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const array1 = [...`${num1}`].map(i => parseInt(i));
    const array2 = [...`${num2}`].map(i => parseInt(i));

    array1Freq = {};
    array2Freq = {};
    for(let char of array1){
        array1Freq[char] = ++array1Freq[char] || 1;
    }
    for(let char of array2){
        array2Freq[char] = ++array2Freq[char] || 1;
    }
    for( let char in array1Freq) {
        if(array1Freq[char] !== array2Freq[char]) return false;
    }
    return true;
}

module.exports = sameFrequency;
