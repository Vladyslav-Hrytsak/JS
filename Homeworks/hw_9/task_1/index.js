
let div = document.createElement('div');
div.classList.add('wrap','collapse','alpha','beta');

document.body.appendChild(div);

let divCopy = div.cloneNode(true);

document.body.appendChild(divCopy);

