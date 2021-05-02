function saturdayFun(saturdayActivity = "roller-skate"){
    return `This Saturday, I want to ${saturdayActivity}!`
} 

function mondayWork(mondayActivity = "go to the office"){
    return `This Monday, I will ${mondayActivity}.`
}

function wrapAdjective(flairString = "*"){
    const innerFunction = function(someAdjective = "special"){
        return `You are ${flairString}${someAdjective}${flairString}!`
    }
    return innerFunction
}