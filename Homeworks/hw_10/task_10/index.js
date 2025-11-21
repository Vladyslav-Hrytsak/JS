const items = [];
for (let i = 1; i <= 100; i++) {
    items.push({ id: i, name: `Object ${i}` });
}

let page = 0;

function renderPage() {
    const output = document.getElementById('output');
    output.innerHTML = "";
    let start = page * 10;
    let end = start + 10;

    const slice = items.slice(start, end);
    slice.forEach(item => {
        const div = document.createElement('div');
        div.innerText = `${item.id}: ${item.name}`;
        output.appendChild(div);
    });
}
renderPage();

document.getElementById('next').onclick = () => {
    if (page < 9) {
        page++;
        renderPage();
    }
};

document.getElementById('prev').onclick = () => {
    if (page > 0) {
        page--;
        renderPage();
    }
};
