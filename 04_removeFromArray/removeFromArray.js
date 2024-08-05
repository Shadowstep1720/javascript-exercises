const removeFromArray = function(array, ...removedValues) {
   let newArray = [];
    array.forEach(item => {
        if (!removedValues.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
