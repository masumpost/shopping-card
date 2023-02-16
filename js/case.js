document.getElementById('second-plus').addEventListener('click', function(){
    let secondInput = document.getElementById('second-input');
    let secondInputString = secondInput.value;
    let secondInputValue = parseInt(secondInputString);
    let secondInputValues = secondInputValue + 1;
    let finalSecondInput = secondInput.value = secondInputValues;

    let secondPrice = document.getElementById('second-price');
    secondPrice.innerText = finalSecondInput * 59;

    subTotal();
})

document.getElementById('second-minus').addEventListener('click', function(){
    let secondInput = document.getElementById('second-input');
    let secondInputString = secondInput.value;
    let secondInputValue = parseInt(secondInputString);
    let secondInputValues = secondInputValue - 1;
    let finalSecondInput = secondInput.value = secondInputValues;

    let secondPrice = document.getElementById('second-price');
    secondPrice.innerText = finalSecondInput * 59;
    subTotal();
})
