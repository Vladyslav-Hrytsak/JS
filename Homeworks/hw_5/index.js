/*-------Task-1---------*/

let s_rectangle = (a,b) => a*b;

console.log(s_rectangle(10,5));

/*-------Task-2---------*/


let s_circle = r => Math.PI*r**2;

console.log(s_circle(10))

/*-------Task-3---------*/

let s_cylinder = (r,h) => 2*Math.PI*r**2 + 2*Math.PI*h;
console.log(s_cylinder(10, 5))

/*-------Task-4---------*/

let printArray = arr => arr.forEach(element => console.log(element));

printArray(['Vlad', 21, 'Ukraine', true, 3.14]);


/*-------Task-5---------*/

let print_p = a => document.write(`<p>${a}</p>`)

print_p('I love js')

/*-------Task-6---------*/

let print_li = text => document.write(`
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)


print_li('My name is Vlad')

/*-------Task-7---------*/

const print_li2 = (text, i) => {document.write(`<ul>`);
let j = 0;
    while(j < i)   {
        document.write(`<li>${text}</li>`);
        j++
    };
    document.write(`</ul>`);}

print_li2('Okten', 4)

/*-------Task-8---------*/

let print_liArr = arr => {document.write(`<ul>`);
    for (let j = 0; j < arr.length; j++)  {
        document.write(`<li>${arr[j]}</li>`);

    };document.write(`</ul>`);}

let arr = [1,2,'Hello','Go', true,false];
print_liArr(arr)

/*-------Task-9---------*/

let print_objectArray = users =>{
    for (const user of users)  {
        document.write(`<div>${user.id} - ${user.name} ${user.age}</div>`);
    }}
print_objectArray(
    [
        {id: 1, name: 'John', age: 18},
        {id: 2, name: 'Vlad', age: 20},
        {id: 3, name: 'Ivan', age: 21},
        {id: 4, name: 'Nick', age: 31},
    ]);


/*-------Task-10---------*/

let min = array => {
    let min = array[0];
    for (let i = 1; i < arr.length; i++) {
        if (array[i]  < min){
            min = array[i];
        }
    }return min;}

console.log(min([-22,1,2,-223,4,0,5]));

/*-------Task-11---------*/

let sum = array => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }return sum;}
console.log(sum([1,3,10]));

/*-------Task-12---------*/

const swap = (arr, x, y) =>{temp = arr[x];arr[x] = arr[y];arr[y] = temp;return arr;
}

console.log(swap([11,22,33,44],0,1));

/*-------Task-13---------*/

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }return 'Такої валюти не знайдено';}

console.log(exchange(10000, [
    {currency: 'USD', value: 42},
    {currency: 'EUR', value: 48}], 'USD'));






















