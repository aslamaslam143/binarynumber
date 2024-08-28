function convertToBinary() {
    let decimal = document.getElementById('decimal').value;
    if (decimal === '') {
        alert('Please enter a decimal number');
        return;
    }
    let binary = parseInt(decimal, 10).toString(2);
    document.getElementById('binary').value = binary;
}

function convertToDecimal() {
    let binary = document.getElementById('binary').value;
    if (binary === '') {
        alert('Please enter a binary number');
        return;
    }
    if (!/^[01]+$/.test(binary)) {
        alert('Please enter a valid binary number');
        return;
    }
    let decimal = parseInt(binary, 2);
    document.getElementById('decimal').value = decimal;
}
