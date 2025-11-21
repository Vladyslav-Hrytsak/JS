let sessionList;

if (localStorage.getItem('sessionsList')) {
    sessionList = JSON.parse(localStorage.getItem('sessionsList'));
} else {
    sessionList = [];
}

sessionList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionList));
