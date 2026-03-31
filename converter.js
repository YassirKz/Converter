// Update labels based on conversion direction
        function updateConversionLabels() {
            let direction = document.getElementById('conversionDirection');
            let label = document.getElementById('conversionLabel');
            label.textContent = direction.checked ? "MAD → USD" : "USD → MAD";
        }

        // Main conversion function
        function convertCurrency() {
            let amount = parseFloat(document.getElementById('amount').value);
            let exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
            let direction = document.getElementById('conversionDirection').checked;
            let resultBox = document.getElementById('resultBox');
            let resultTextElement = document.getElementById('resultText');
            
            if (isNaN(amount) || isNaN(exchangeRate)) {
                alert("Please enter valid values");
                return;
            }
            
            let convertedAmount = direction ? amount / exchangeRate : amount * exchangeRate;
            let currencies = direction ? ["MAD", "USD"] : ["USD", "MAD"];
            
            resultTextElement.textContent = `${amount.toFixed(2)} ${currencies[0]} = ${convertedAmount.toFixed(2)} ${currencies[1]}`;
            resultBox.style.display = "block";
        }

        // Add Enter key support
        ['amount', 'exchangeRate'].forEach(id => {
            document.getElementById(id).addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    convertCurrency();
                }
            });
        });