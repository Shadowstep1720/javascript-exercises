const repeatString = function(message, repetitions) {
    if (repetitions < 0) {
        return "ERROR";
    } 
    let newMessage = "";
    for (let i = 0; i < repetitions; i++) {
        newMessage += message;
    }
    return newMessage;
};

// Do not edit below this line
module.exports = repeatString;
