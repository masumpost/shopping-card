function totalPhonePrice(element){
    let phoneTotal = document.getElementById(element);
    let phoneTotalString = phoneTotal.innerText;
    let phoneTotalValue = parseInt(phoneTotalString);
    return phoneTotalValue;
}

function setToValue(element, value){
    let subTotal = document.getElementById(element);
    subTotal.innerText = value;
}

function subTotal(){
    
    let phoneTotal = totalPhonePrice("first-price");
    let caseTotal = totalPhonePrice("second-price");
    let currentSubTotal = phoneTotal + caseTotal;
    setToValue('sub-total', currentSubTotal)

    let taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    let taxAmount = parseFloat(taxAmountString);
    setToValue('tax', taxAmount);
    
    let totalFinalAmount = currentSubTotal + taxAmount;
    setToValue('final-slip-total', totalFinalAmount);

}