
let array = ['Main','Products','About us','Contacts'];

let menu =  document.createElement('ul');
document.body.appendChild(menu);

for (const item of array) {
    let li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);

}