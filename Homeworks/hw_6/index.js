/*----------Task-1---------*/

let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool';

console.log(a.length)
console.log(b.length)
console.log(c.length)

/*----------Task-2---------*/

console.log(a.toUpperCase())
console.log(b.toUpperCase())
console.log(c.toUpperCase())

/*----------Task-3---------*/

let a1 = 'HELLO WORLD';
let b1 = 'LOREM IPSUM';
let c1 = 'JAVASCRIPT IS COOL';

console.log(a1.toLowerCase())
console.log(b1.toLowerCase())
console.log(c1.toLowerCase())

/*----------Task-4---------*/

let dirty =  ' dirty string   ';
let clean = dirty.trim();
console.log(clean)

/*----------Task-5---------*/


let strToArr = str => {if(str) {return str.split(' ');}return ['']};

let str = 'Ревуть воли як ясла повні';
let arr = strToArr(str)
console.log(arr);

/*----------Task-6---------*/

let arr1 = [10,8,-7,55,987,-1011,0,1050,0];
let newArr = arr1.map(value => {return value.toString();});
console.log(newArr)

/*----------Task-7---------*/

let sortNums = (array, direction) => {
    if (direction === 'ascending') {return array = array.sort((a,b) => a - b);}
    if (direction === 'descending') {return array = array.sort((a,b) => b - a);}
}

console.log(sortNums([1,5,2,55,3], 'descending'))

/*----------Task-8---------*/

let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}
];

let newcoursesAndDurationArray =  coursesAndDurationArray
    .sort((a,b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
        value.id =  index+1;
        return value;});
console.log(newcoursesAndDurationArray);

/*----------Task-9---------*/


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
        modules: ['html', 'css', 'js', 'mysql',  'mongodb',  'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
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
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(value => {return value.modules.includes('sass')}));
console.log(coursesArray.filter(value => {return value.modules.includes('docker')}));

/*----------Task-9---------*/

const cards = [];
const suits = [
    { name: 'spade', color: 'black' },
    { name: 'club', color: 'black' },
    { name: 'diamond', color: 'red' },
    { name: 'heart', color: 'red' }
];

const values = [6,7,8,9,10,'jack','queen','king','ace'];

for (const suit of suits) {
    for (const value of values) {
        cards.push({
            value: value,
            suit: suit.name,
            color: suit.color
        });
    }
}




let aceSpade = cards.filter(value => {
    if(value.value === 'ace' && value.suit === 'spade'){
        return value;
    }});
console.log(aceSpade);


let six = cards.filter(value => {
    if(value.value === 6){
        return value;
    }});
console.log(six);

let red = cards.filter(value => {
    if(value.color === 'red'){
        return value;
    }});
console.log(red);

let diamond = cards.filter(value => {
    if(value.suit === 'diamond'){
        return value;
    }});
console.log(diamond);

let club = cards.filter(value => {
    if(value.suit === 'diamond' && (value.value >= 9 || typeof value.value === 'string')){
        return value;
    }});
console.log(club);


/*----------Task-10---------*/

let newSuits = cards.reduce((acc, card) => {

    if (card.suit === 'spade') acc.spades.push(card);
    if (card.suit === 'diamond') acc.diamonds.push(card);
    if (card.suit === 'heart') acc.hearts.push(card);
    if (card.suit === 'club') acc.clubs.push(card);

    return acc;

}, { spades: [], diamonds: [], hearts: [], clubs: [] });

console.log(newSuits);





