const moneyDiv = document.getElementById('money');
let currentValue = parseInt(moneyDiv.innerText); // 100

let lastUpdate = localStorage.getItem('lastUpdateTime');
let lastValue = localStorage.getItem('moneyValue');
if (lastValue) {
    currentValue = parseInt(lastValue);
}

let now = Date.now();

if (!lastUpdate || now - lastUpdate > 10000) {
    currentValue += 10;
    localStorage.setItem('moneyValue', currentValue);
    localStorage.setItem('lastUpdateTime', now);
}
moneyDiv.innerText = currentValue + ' грн';
