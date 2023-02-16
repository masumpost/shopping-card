document.getElementById('first-plus').addEventListener('click', function(){
    let getFirstInput = document.getElementById('first-input');
    let firstInputString = getFirstInput.value;
    let firstInputValue = parseInt(firstInputString);
    let firstInput = firstInputValue + 1;
    let finalFirstInput = getFirstInput.value = firstInput;


    let firstPrice = document.getElementById('first-price');
    firstPrice.innerText = finalFirstInput * 1219;

    subTotal();
})

document.getElementById('first-minus').addEventListener('click', function(){
    let getFirstInput = document.getElementById('first-input');
    let firstInputString = getFirstInput.value;
    let firstInputValue = parseInt(firstInputString);
    let firstInput = firstInputValue - 1;
    let finalFirstInput = getFirstInput.value = firstInput;

    let firstPrice = document.getElementById('first-price');
    firstPrice.innerText = finalFirstInput * 1219

    subTotal();
})