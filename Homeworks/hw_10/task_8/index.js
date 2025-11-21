document.getElementById('tableForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('columns').value);
    const content = document.getElementById('content').value;

    if (!rows || !cols) {
        alert("Enter number of rows and columns!");
        return;
    }

    const table = document.getElementById('resultTable');

    table.innerHTML = "";

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.innerText = content;
            td.style.padding = "6px";
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
});