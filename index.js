function saturdayFun(defaultActivity = 'roller-skate') { 
   return `This Saturday, I want to ${defaultActivity}!`; 
}
saturdayFun('bathe my dog');

function mondayWork(defaultActivity = 'go to the office') {
   return `This Monday, I will ${defaultActivity}.`; 
}

function wrapAdjective(defaultParameter = '*a hard worker*') {
    return function(adjective = 'special') {
        return `You are ${defaultParameter}${adjective}${defaultParameter}!`;
    }
}