
function calc(...args) {
  
  for (let i = 0; i < args.length; i += 2) {
    const num = args[i];
    if (typeof num !== 'number') {
      throw new Error('Invalid input type');
    }
  }

  
  for (let i = 1; i < args.length; i += 2) {
    const operator = args[i];
    if (typeof operator !== 'string' || !['+', '-', '*', '/'].includes(operator)) {
      throw new Error('Invalid operator');
    }
  }

  // no numbers > 1000
   args = args.map((val, i) => (i % 2 === 0 && val > 1000 ? 0 : val));

  // [/][*]
  let result = [args[0]];
  let i = 1;

  while (i < args.length) {
    const operator = args[i];
    const num2 = args[i + 1];
    const lastNum = result[result.length - 1];

    if (operator === '*') {
      result[result.length - 1] = lastNum * num2;
    } else if (operator === '/') {
      if (num2 === 0) throw new Error('Division by zero');
      result[result.length - 1] = lastNum / num2;
    } else {
      result.push(operator, num2);
    }

    i += 2;
  }

  //  [+][-]
  let finalResult = result[0];
  for (let j = 1; j < result.length; j += 2) {
    const operator = result[j];
    const num2 = result[j + 1];

    if (operator === '+') {
      finalResult += num2;
    } else if (operator === '-') {
      finalResult -= num2;
    }
  }

  return finalResult;
}

module.exports = calc;
