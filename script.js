const rates = {
    "USD": 1,
    "EUR": 0.91,
    "INR": 83.1,
    "GBP": 0.78,
    "JPY": 156.5
  };
  
  function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    if (isNaN(amount)) {
      document.getElementById('result').innerHTML = "Please enter a valid amount!";
      return;
    }
  
    const usdAmount = amount / rates[fromCurrency];
    const convertedAmount = usdAmount * rates[toCurrency];
  
    document.getElementById('result').innerHTML =
      `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
  }
  