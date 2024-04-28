let displayValue = '';
let history = [];

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function undoDisplay() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function clearHistory() {
    history = [];
    document.getElementById('historyBox').innerHTML = '';
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        const result = eval(displayValue).toString();
        document.getElementById('display').value = result;
        if (!history.includes(displayValue)) {
            history.push(displayValue);
            const historyBox = document.getElementById('historyBox');
            const historyItem = document.createElement('div');
            historyItem.classList.add('historyItem');
            historyItem.textContent = `${displayValue} = ${result}`;
            historyBox.appendChild(historyItem);
        }
        displayValue = '';
    } catch (error) {
        document.getElementById('display').value = 'error';
    }
}
