let sessionsListJSON = localStorage.getItem('sessionsList');

let sessionsList = JSON.parse(sessionsListJSON);

let div = document.createElement('div');
sessionsList.forEach(session => {
    let p = document.createElement('p');
    p.innerText = session;
    div.appendChild(p);
});

document.body.appendChild(div);
