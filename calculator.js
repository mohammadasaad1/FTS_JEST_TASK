const calc = (num1, operator, num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        throw new Error('Invalid input...'); 
    }
    switch(operator){
        case '+' : return num1 + num2 ;
        case '-' : return num1 - num2;
        break;
        default: throw new Error('Invalid operator');
    }
};

module.exports = calc;