let form = document.forms.f1;
const info = document.getElementById('user-info');

f1.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = form.name.value;
    let surname = form.surname.value;
    let age = form.age.value;
    let objUser = {name, surname, age};
    info.innerText = `${objUser.name}  ${objUser.surname} ${objUser.age}`;
});
