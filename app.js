function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, operator, num2) {
  if (operator === '+') {
    add(num1, num2);
  } else if (operator === '-') {
    subtract(num1, num2);
  } else if (operator === 'x') {
    multiply(num1, num2);
  } else if (operator === '÷') {
    divide(num1, num2);
  } else {
    console.error('Something went wrong in operate');
  }
}

const buttons = document.querySelectorAll('button');
const currNum = document.querySelector('.currNum');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (parseInt(e.target.innerText) || e.target.innerText === '0') {
      currNum.innerText = currNum.innerText + e.target.innerText;
    } else if (e.target.innerText == 'DEL' || e.target.innerText == 'AC') {
      if (e.target.innerText === 'DEL') {
        currNum.innerText = currNum.innerText.slice(0, -1);
      } else if (e.target.innerText === 'AC') {
        currNum.innerText = '';
      }
    }
  });
});
