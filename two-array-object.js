// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    let valInd = 0;
    const result = {};
    for(let key of keys) {
        if(values[valInd]){
            result[key] = values[valInd++];
        } else {
            result[key] = null;
        }
    }
    return result;
}

module.exports = twoArrayObject;
