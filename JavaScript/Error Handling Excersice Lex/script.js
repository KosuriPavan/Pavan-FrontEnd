let operand1 = Number(document.querySelector('#operand1').value);
let operand2 = Number(document.querySelector('#operand2').value);
let o_plus = document.querySelector('#operator-plus');
let o_minus = document.querySelector('#operator-minus');
let o_multiply = document.querySelector('#operator-multiply');
let o_divide = document.querySelector('#operator-divide');
let validate = document.querySelector('#validate');
let result = document.querySelector('#result').value;

validate.addEventListener('click', () => {
    if (document.querySelector('#operand1').value === '' ||
        document.querySelector('#operand2').value === '') {
        alert('Both operands should be given');
        return; // Exit the function early if inputs are empty
    }
    else if (isNaN(operand1) || isNaN(operand2) || /[^0-9.-]/.test(operand1) ||
        /[^0-9.-]/.test(operand2)) {
        alert('both operands should only be number');
    }
    else if (o_plus.checked) {
        result = operand1 + operand2;
    }
    else if (o_minus.checked) {
        result = operand1 - operand2;
    }
    else if (o_multiply.checked) {
        result = operand1 * operand2;
    }
    else if (o_divide.checked) {
        if (operand2 === 0) {
            alert('cant divide by 0');
        }
        else {
            result = operand1 / operand2;
        }
    }
})
