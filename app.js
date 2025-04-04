function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
  return parseFloat(num1) / parseFloat(num2);
}

function operate(num1, operator, num2) {
  console.log(num1, operator, num2);
  if (operator === '+') {
    return add(num1, num2);
  } else if (operator === '-') {
    return subtract(num1, num2);
  } else if (operator === 'x') {
    return multiply(num1, num2);
  } else if (operator === '÷') {
    return divide(num1, num2);
  } else {
    console.error('Something went wrong in operate');
  }
}

const buttons = document.querySelectorAll('button');
const currNum = document.querySelector('.currNum');

let operator = '';
let num1 = '';
let opBool = false;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (parseInt(e.target.innerText) || e.target.innerText === '0') {
      if (opBool === true) {
        currNum.innerText = e.target.innerText;
        opBool = false;
      } else {
        if (currNum.innerText === '0') {
          currNum.innerText = e.target.innerText;
        } else {
          currNum.innerText = currNum.innerText + e.target.innerText;
        }
      }
    } else if (e.target.innerText == 'DEL' || e.target.innerText == 'AC') {
      if (e.target.innerText === 'DEL') {
        if (currNum.innerText.length == 1) {
          currNum.innerText = 0;
        } else {
          currNum.innerText = currNum.innerText.slice(0, -1);
        }
      } else if (e.target.innerText === 'AC') {
        currNum.innerText = '0';
        num1 = '';
        opBool = false;
        operator = '';
      }
    } else if (e.target.innerText === '.') {
      if (!(currNum.innerText.indexOf('.') == 1)) {
        currNum.innerText = currNum.innerText + e.target.innerText;
      }
    } else {
      if (operator != '') {
        num1 = operate(num1, operator, currNum.innerText);
        currNum.innerText = num1.toFixed(3);
        operator = '';
      }
      if (e.target.innerText === '+') {
        operator = '+';
        num1 = currNum.innerText;
        opBool = true;
      } else if (e.target.innerText === '-') {
        operator = '-';
        num1 = currNum.innerText;
        opBool = true;
      } else if (e.target.innerText === 'x') {
        operator = 'x';
        num1 = currNum.innerText;
        opBool = true;
      } else if (e.target.innerText === '÷') {
        operator = '÷';
        num1 = currNum.innerText;
        opBool = true;
      } else if (e.target.innerText === '=') {
        if (operator == '') {
          console.error('Has to have a operator!!');
        } else {
          num1 = operate(num1, operator, currNum.innerText);
          currNum.innerText = num1.toFixed(3);
          operator = '';
        }
      }
    }
  });
});
