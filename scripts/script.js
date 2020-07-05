async function convert() {
    let conversionBase = document.getElementById('currency-select').value;
    let conversionAmount = + document.getElementById('convert-amount').value;
    console.log(typeof conversionAmount);
    let response = await fetch(
        'https://api.exchangeratesapi.io/latest'
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }else if (isNaN(conversionAmount)){
        alert("you can not convert type of string to number")
    }else if (!conversionBase || !conversionAmount) {
        alert("you need to input values to convert")
    }else {
        let json = await response.json();
        let rate = await json.rates[conversionBase];
        document.getElementById('converted-amount').innerHTML = conversionAmount * rate;
    }

}

