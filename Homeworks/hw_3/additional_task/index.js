/*-------Task_1------*/
// Масиви чисел, рядків та змішаних типів

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['A', 'B', 'C', 'D', 'E'];
let arr3 = [1, 2, 'a', 'b', true];
console.log(arr1);
console.log(arr2);
console.log(arr3);

/*-------Task_2------*/
// Порожній масив та наповнення

let arr = [];
arr[0] = 1;
arr[1] = 'hello';
arr[2] = true;
console.log(arr);

/*-------Task_3------*/
// Масив для циклів

let arr3task = [2,17,13,6,22,31,45,66,100,-18];

// 1. while
let i = 0;
while(i < arr3task.length){
    console.log(arr3task[i]);
    i++;
}

// 2. for
for(let j=0; j<arr3task.length; j++){
    console.log(arr3task[j]);
}

// 3. while непарні індекси
i = 0;
while(i < arr3task.length){
    if(i % 2 !== 0){
        console.log(arr3task[i]);
    }
    i++;
}

// 4. for непарні індекси
for(let j=0; j<arr3task.length; j++){
    if(j % 2 !== 0){
        console.log(arr3task[j]);
    }
}

// 5. while парні значення
i = 0;
while(i < arr3task.length){
    if(arr3task[i] % 2 === 0){
        console.log(arr3task[i]);
    }
    i++;
}

// 6. for парні значення
for(let j=0; j<arr3task.length; j++){
    if(arr3task[j] % 2 === 0){
        console.log(arr3task[j]);
    }
}

// 7. замінити кратні 3 на "okten"
for(let j=0; j<arr3task.length; j++){
    if(arr3task[j] % 3 === 0){
        arr3task[j] = 'okten';
    }
}
console.log(arr3task);

// 8. вивід у зворотньому порядку
for(let j=arr3task.length-1; j>=0; j--){
    console.log(arr3task[j]);
}

// 9. попередні завдання у зворотньому циклі
for(let j=arr3task.length-1; j>=0; j--){
    if(j % 2 !== 0){
        console.log(arr3task[j]);
    }
}
for(let j=arr3task.length-1; j>=0; j--){
    if(arr3task[j] % 2 === 0){
        console.log(arr3task[j]);
    }
}
for(let j=arr3task.length-1; j>=0; j--){
    if(arr3task[j] % 3 === 0){
        console.log(arr3task[j]);
    }
}

/*-------Task_4------*/
let nums10 = [1,2,3,4,5,6,7,8,9,10];
for(let n of nums10){
    console.log(n);
}

let strs10 = ['a','b','c','d','e','f','g','h','i','j'];
for(let s of strs10){
    console.log(s);
}

let mix10 = [1,'a',true,2,'b',false,3,'c',true,4];
for(let m of mix10){
    console.log(m);
}

// булеві елементи
for(let m of mix10){
    if(typeof m === 'boolean'){
        console.log(m);
    }
}

// числові елементи
for(let m of mix10){
    if(typeof m === 'number'){
        console.log(m);
    }
}

// рядкові елементи
for(let m of mix10){
    if(typeof m === 'string'){
        console.log(m);
    }
}

/*-------Task_5------*/
// Порожній масив + 10 елементів

let arr10 = [];
arr10[0] = 1;
arr10[1] = 'a';
arr10[2] = true;
arr10[3] = 4;
arr10[4] = 'b';
arr10[5] = false;
arr10[6] = 7;
arr10[7] = 'c';
arr10[8] = true;
arr10[9] = 10;

for(let e of arr10){
    console.log(e);
}

/*-------Task_6------*/

// Цикли for

for(let i=1;i<=10;i++){
    console.log(i);
    document.write(i);
}
document.write(" ");


for(let i=1;i<=100;i++){
    console.log(i);
    document.write(i);
}
document.write(" ");

for(let i=0;i<100;i+=2){
    console.log(i);
    document.write(i);
}
document.write(" ");

for(let i=0;i<100;i++){
    if(i % 2 === 0){
        console.log(i);
        document.write(i);
    }
}
document.write(" ");

for(let i=0;i<100;i++){
    if(i % 2 !== 0){
        console.log(i);
        document.write(i);
    }
}

/*-------Task_7------*/
// Книжки

let books = [
    {title: 'Book1', pages: 100, authors:['Author1'], genres:['Fantasy']},
    {title: 'Book_Book_Book_Book', pages: 250, authors:['Author1','Author2'], genres:['Fantasy','Adventure']},
    {title: 'Book Three', pages: 300, authors:['Author3'], genres:['Fantasy','Adventure','Drama']},
];

// найбільша книжка

let maxPages = books[0];
for(let b of books){
    if(b.pages > maxPages.pages){
        maxPages = b;
    }
}
console.log(maxPages);

// найбільше жанрів

let maxGenres = books[0];
for(let b of books){
    if(b.genres.length > maxGenres.genres.length){
        maxGenres = b;
    }
}
console.log(maxGenres);

// найдовша назва

let longestTitle = books[0];
for(let b of books){
    if(b.title.length > longestTitle.title.length){
        longestTitle = b;
    }
}
console.log(longestTitle);

// книги з 2 авторами
for(let b of books){
    if(b.authors.length === 2){
        console.log(b);
    }
}

// книги з 1 автором

for(let b of books){
    if(b.authors.length === 1){
        console.log(b);
    }
}

/*-------Task_8------*/

// Генерація чисел
let even50 = [];
for(let i=0;i<50;i++){
    even50.push(i*2);
}
console.log(even50);


let odd50 = [];
for(let i=0;i<50;i++){
    odd50.push(i*2+1);
}
console.log(odd50);



let rand20 = [];
for(let i=0;i<20;i++){
    rand20.push(Math.floor(Math.random()*100));
}
console.log(rand20);


let rand20_8_732 = [];
for(let i=0;i<20;i++){
    rand20_8_732.push(Math.floor(Math.random()*(732-8+1))+8);
}
console.log(rand20_8_732);



// кожен третій елемент

for(let i=2;i<rand20_8_732.length;i+=3){
    console.log(rand20_8_732[i]);
}


// кожен третій елемент парний + новий масив

let newArr = [];
for(let i=2;i<rand20_8_732.length;i+=3){
    if(rand20_8_732[i] % 2 === 0){
        newArr.push(rand20_8_732[i]);
    }
}
console.log(newArr);



// сусід справа парний

let example = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for(let i=0;i<example.length-1;i++){
    if(example[i+1] % 2 === 0){
        console.log(example[i]);
    }
}

// середній чек

let prices = [100,250,50,168,120,345,188];
let sum = 0;
for(let p of prices){
    sum += p;
}
console.log(sum / prices.length);



// рандомні числа *5 в новий масив

let randArr = [];
let newArr5 = [];
for(let i=0;i<10;i++){
    randArr[i] = Math.floor(Math.random()*20);
    newArr5.push(randArr[i]*5);
}
console.log(newArr5);


// числа в інший масив

let mixedArr = [1,'a',2,true,3,'b',false,4];
let numsOnly = [];
for(let e of mixedArr){
    if(typeof e === 'number'){
        numsOnly.push(e);
    }
}
console.log(numsOnly);



/*-------Task_9------*/
// usersWithCities

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];
for(let user of usersWithId){
    for(let city of citiesWithId){
        if(user.id === city.user_id){
            user.address = city;
            usersWithCities.push(user);
        }
    }
}
console.log(usersWithCities);

/*-------Task_10------*/
// Парні елементи

let tenNums = [1,2,3,4,5,6,7,8,9,10];
for(let n of tenNums){
    if(n % 2 === 0){
        console.log(n);
    }
}

// копіювання масиву

let copyArr = [];
for(let n of tenNums){
    copyArr.push(n);
}
console.log(copyArr);


/*-------Task_11------*/
// Збір букв у слово

let letters = ['a','b','c'];
let word = '';
for(let i=0;i<letters.length;i++){
    word += letters[i];
}
console.log(word);

word = '';
let k=0;
while(k<letters.length){
    word += letters[k];
    k++;
}
console.log(word);

word = '';
for(let l of letters) word += l;
console.log(word);
