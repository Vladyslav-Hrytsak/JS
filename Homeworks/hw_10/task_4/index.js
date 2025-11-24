window.addEventListener('load', function(){
    let numbers = document.getElementById('numbers');
    let number = Number(localStorage.getItem('counter')) || 0;

    number++;

    numbers.innerText = number;

    localStorage.setItem('counter', number);
});
