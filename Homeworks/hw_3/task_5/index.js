
document.write('<ul>')

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

for (let item of listOfItems) {
    document.write(`<li>${item}</li>`);
}

document.write('</ul>')