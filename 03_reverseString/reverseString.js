const reverseString = function(message) {
    let string = '';
    for (let i = message.length - 1; i >= 0; i--) {
        string += message[i];
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
