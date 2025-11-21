let btn = document.createElement('button');
document.body.appendChild(btn);
btn.innerText = 'Delete';

btn.addEventListener('click', () => {
    const deleteDiv = document.getElementById('text');

    if (deleteDiv.style.display === 'none') {
        deleteDiv.style.display = 'block';
    } else {
        deleteDiv.style.display = 'none';
    }
});
