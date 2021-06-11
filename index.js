const saturdayFun = (activity = 'roller-skate') => {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair = '*'){
    const innerFunction = function(adjective = 'special'){
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
    return innerFunction
}

wrapAdjective('~')('a goddamn genius')