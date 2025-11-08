
/*------TASK 1----*/

let arr = [1, NaN, undefined, [], {name: 'vlad'}, 6, 'vlad', 'okten', true, false];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);



/*------TASK 2----*/

let book1 = {
    title: 'Kobzar',
    pageCount: 300,
    genre:'poetry'
}

let book2 = {
    title: 'The Witcher',
    pageCount: 250,
    genre:'fentezi'
}

let book3 = {
    title: 'Metro 2033',
    pageCount: 353,
    genre:'fentezi'
}


/*------TASK 3----*/

let book4 = {
    title: 'Kobzar',
    pageCount: 300,
    genre:'poetry',
    authors: [{name: 'Taras', age: 26}]
}

let book5 = {
    title: 'The Witcher',
    pageCount: 250,
    genre:'fentezi',
    authors: [
        {name: 'Andjay', age: 32},
        {name: 'Geralt', age: 56}
    ]
}

let book6 = {
    title: 'Metro 2033',
    pageCount: 353,
    genre:'fentezi',
    authors: [
        {name: 'Dmytro', age: 33},
        {name: 'Artem', age: 22}]
}


/*------TASK 4----*/

let users = [
    user1 = {
        name: 'Taras',
        username: 'taras1510',
        password: '123456',
    },
    user2 = {
        name: 'Vlad',
        username: 'vlad52-3',
        password: '95522233',
    },
    user3 = {
        name: 'Dmytro',
        username: 'dog34314',
        password: '85043232',
    },
    user4 = {
        name: 'Vadym',
        username: 'vadym',
        password: '845u09235u',
    },
    user5 = {
        name: 'Vika',
        username: 'vika1810',
        password: '5820u30',
    },
    user6 = {
        name: 'Taras',
        username: 'taras1510',
        password: '123456',
    },
    user7 = {
        name: 'Vlad',
        username: 'vlad52-3',
        password: '95522233',
    },
    user8 = {
        name: 'Dmytro',
        username: 'dog34314',
        password: '85043232',
    },
    user9 = {
        name: 'Vadym',
        username: 'vadym',
        password: '845u09235u',
    },
    user10 = {
        name: 'Vika',
        username: 'vika1810',
        password: '5820u30',
    }
]

console.log(user1.password);
console.log(user2.password);
console.log(user3.password);
console.log(user4.password);
console.log(user5.password);
console.log(user6.password);
console.log(user7.password);
console.log(user8.password);
console.log(user9.password);
console.log(user10.password);



/*------TASK 5----*/

let temperatures = [
    {day: 'monday',morningTemp: 10, noonTemp: 15, nightTemp: 9},
    {day: '',morningTemp: 11, noonTemp: 19, nightTemp: 8},
    {day: '',morningTemp: 11, noonTemp: 19, nightTemp: 8},
    {day: '',morningTemp: 11, noonTemp: 19, nightTemp: 8},
    {day: '',morningTemp: 11, noonTemp: 19, nightTemp: 8},
    {day: '',morningTemp: 11, noonTemp: 19, nightTemp: 8},
    {day: '',morningTemp: 11, noonTemp: 19, nightTemp: 8},
]

/*------TASK 6----*/

let x = 0;

if (x !== 0){
    console.log('Вірно');
}
else {
    console.log('Невірно');
}

/*------TASK 7----*/

let time = 0;

if (time > 0 && time <= 15){
    console.log('First chvert');
}
else if (time > 15 && time <= 30){
    console.log('Second chvert');
}

else if (time > 30 && time <= 45){
    console.log('Third chvert');
}
else if (time > 45 && time <= 59){
    console.log('Last chvert');
}

/*------TASK 8----*/

let day = 0;

if (time > 0 && time <= 10){
    console.log('First decade');
}
else if (time > 10 && time <= 20){
    console.log('Second decade');
}

else if (time > 20 && time <= 31){
    console.log('Third decade');
}

/*------TASK 9----*/

let key = '';

switch (key) {
    case '1':
        console.log('monday');
        break;

    case '2':
        console.log('tuesday');
        break;

    case '3':
        console.log('wednesday');
        break;

    case '4':
        console.log('thursday');
        break;

    case '5':
        console.log('friday');
        break;

    case '6':
        console.log('saturday');
        break;

    case '7':
        console.log('sunday');
        break;

        default:
            console.log('???');
}

/*------TASK 10----*/

let a = +prompt('Enter first number');
let b = +prompt('Enter second number');


if(a>b){
    console.log(a);
}
else if (a<b){
    console.log(b);
}
else if (a===b){
    console.log("a=b");
}

/*------TASK 11----*/

let x = 0;

if (!x){
    x = 'default'
}

/*------TASK 12----*/


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


if (coursesAndDurationArray[0].monthDuration > 5) console.log("Супер");
if (coursesAndDurationArray[1].monthDuration > 5) console.log("Супер");
if (coursesAndDurationArray[2].monthDuration > 5) console.log("Супер");
if (coursesAndDurationArray[3].monthDuration > 5) console.log("Супер");
if (coursesAndDurationArray[4].monthDuration > 5) console.log("Супер");
if (coursesAndDurationArray[5].monthDuration > 5) console.log("Супер");

/*-----Забігаючи наперед я можу виконати це завдання за допомогою циклу ----*/

for (let course of coursesAndDurationArray) {
    if (course.monthDuration > 5) {
        console.log(`${course.title} — Супер`);
    }
}
