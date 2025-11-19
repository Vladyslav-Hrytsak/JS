let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


for (const item of  coursesArray) {
    let mainDiv = document.createElement("div");
    document.body.appendChild(mainDiv);
    mainDiv.classList.add('content');

    let divTitle = document.createElement("div");
    divTitle.classList.add('title');
    divTitle.innerText = item.title;
    mainDiv.appendChild(divTitle);

    let numbersDiv = document.createElement("div");
    numbersDiv.classList.add('numbers-content');
    mainDiv.appendChild(numbersDiv);

    let monthDurationDiv = document.createElement("div");
    monthDurationDiv.classList.add('number');
    monthDurationDiv.innerText = item.monthDuration;
    numbersDiv.appendChild(monthDurationDiv);


    let hourDurationDiv = document.createElement("div");
    hourDurationDiv.classList.add('number');
    hourDurationDiv.innerText = item.hourDuration;
    numbersDiv.appendChild(hourDurationDiv);

    let ul = document.createElement("ul");
    mainDiv.appendChild(ul);

    for (const module of item.modules) {
        let li = document.createElement("li");
        li.innerText = module;
        ul.appendChild(li);
    }
}