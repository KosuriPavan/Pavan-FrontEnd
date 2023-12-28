
let current_value = '';
let input_holder = document.querySelector('#input-holder');
let numbers_button1 = document.querySelector('#numbers_button1');
let numbers_button2 = document.querySelector('#numbers_button2');
let numbers_buttonPlus = document.querySelector('#numbers_buttonPlus');
let numbers_button3 = document.querySelector('#numbers_button3');
let numbers_button4 = document.querySelector('#numbers_button4');
let numbers_buttonMinus = document.querySelector('#numbers_buttonMinus');
let numbers_button5 = document.querySelector('#numbers_button5');
let numbers_button6 = document.querySelector('#numbers_button6');
let numbers_buttonMultiply = document.querySelector('#numbers_buttonMultiply');
let numbers_button7 = document.querySelector('#numbers_button7');
let numbers_button8 = document.querySelector('#numbers_button8');
let numbers_buttonDivide = document.querySelector('#numbers_buttonDivide');
let numbers_button9 = document.querySelector('#numbers_button9');
let numbers_button0 = document.querySelector('#numbers_button0');
let numbers_buttonDot = document.querySelector('#numbers_buttonDot');
let numbers_buttonClear = document.querySelector('#numbers_buttonClear');
let numbers_buttonEquals = document.querySelector('#numbers_buttonEquals');

numbers_button1.addEventListener('click', () => {
    current_value += numbers_button1.value;
    input_holder.value = current_value;
});
numbers_button2.addEventListener('click', () => {
    current_value += numbers_button2.value;
    input_holder.value = current_value;
});
numbers_buttonPlus.addEventListener('click', () => {
    current_value += numbers_buttonPlus.value;
    input_holder.value = current_value;
});
numbers_button3.addEventListener('click', () => {
    current_value += numbers_button3.value;
    input_holder.value = current_value;
});
numbers_button4.addEventListener('click', () => {
    current_value += numbers_button4.value;
    input_holder.value = current_value;
});
numbers_buttonMinus.addEventListener('click', () => {
    current_value += numbers_buttonMinus.value;
    input_holder.value = current_value;
});
numbers_button5.addEventListener('click', () => {
    current_value += numbers_button5.value;
    input_holder.value = current_value;
});
numbers_button6.addEventListener('click', () => {
    current_value += numbers_button6.value;
    input_holder.value = current_value;
});
numbers_buttonMultiply.addEventListener('click', () => {
    current_value += numbers_buttonMultiply.value;
    input_holder.value = current_value;
});
numbers_button7.addEventListener('click', () => {
    current_value += numbers_button7.value;
    input_holder.value = current_value;
});
numbers_button8.addEventListener('click', () => {
    current_value += numbers_button8.value;
    input_holder.value = current_value;
});
numbers_buttonDivide.addEventListener('click', () => {
    current_value += numbers_buttonDivide.value;
    input_holder.value = current_value;
});
numbers_button9.addEventListener('click', () => {
    current_value += numbers_button9.value;
    input_holder.value = current_value;
});
numbers_button0.addEventListener('click', () => {
    current_value += numbers_button0.value;
    input_holder.value = current_value;
});
numbers_buttonDot.addEventListener('click', () => {
    current_value += numbers_buttonDot.value;
    input_holder.value = current_value;
});
numbers_buttonClear.addEventListener('click', () => {
    current_value = '';
    input_holder.value = current_value;
});
numbers_buttonEquals.addEventListener('click', () => {
    current_value = eval(current_value);
    input_holder.value = current_value;
});
// history.createElement('p').textContent("hello guys");
