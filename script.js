function calculateLoan(){
    loanAmountValue = document.getElementById("loan-amount").value;

    interestRateValue = document.getElementById("interest-rate").value;

    loanPeriodValue = document.getElementById("monthsPay").value;

    interest = (loanAmountValue* (interestRateValue *0.01)) / loanPeriodValue

    monthlyPayment = (loanAmountValue / loanPeriodValue + interest).toFixed(2);
    document.getElementById("payment").innerHTML = `Monthly payment: ${monthlyPayment}`

    if(monthlyPayment>=15000){
        document.getElementById("summary").innerHTML = `You Need to Pay Higher amount Of Monthly Payment`
    }
    else if(monthlyPayment>=10000){
        document.getElementById("summary").innerHTML = `You Need to Pay Normal amount Of Monthly Payment`
    }
    else{
        document.getElementById("summary").innerHTML = `You Need to Pay Lower amount Of Monthly Payment`
    }
}
