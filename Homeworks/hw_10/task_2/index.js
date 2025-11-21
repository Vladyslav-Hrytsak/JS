const input = document.getElementById('ageInput');
const button = document.getElementById('checkBtn');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    const age = Number(input.value);

    if (!age) {
        result.innerText = 'Enter correct age';
        return;
    }
    if (age < 18) {
        result.innerText = 'You are not 18, access denied.';
    } else {
        result.innerText = 'Access allowed';
    }
});
