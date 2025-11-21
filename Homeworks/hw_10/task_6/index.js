let kg = document.getElementById('kg');
let result = document.getElementById('result');

kg.addEventListener('input', () => {
    let kgValue = parseFloat(kg.value);

    if (isNaN(kgValue)) {
        result.innerText = '';
        return;
    }

    let pounds = kgValue / 0.45359237;
    result.innerText = pounds.toFixed(2) + ' lb';
});
