/*----------Task-1---------*/

function User (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(2,'Vlad','Hrytsak','vlad.123jj@gmail.com','+380958991590'),
    new User(55,'Kolya','Verstak','vlad.123jj@gmail.com','+3809955221434'),
    new User(12,'Kseniya','Popova','vlad.123jj@gmail.com','+38099544352352'),
    new User(1,'Vadym','Kozakov','vlad.123jj@gmail.com','+380995444351'),
    new User(53,'Viktoria','Vlasenko','vlad.123jj@gmail.com','+3809954438'),
    new User(16,'Vasil','Hrytsak','vlad.123jj@gmail.com','+38099544395'),
    new User(27,'Nanci','Slipchenko','vlad.123jj@gmail.com','+38095894432'),
    new User(342,'Alex','Petrov','vlad.123jj@gmail.com','+3809909482'),
    new User(119,'Dima','Pyatak','vlad.123jj@gmail.com','+38099544000'),
    new User(10,'Ira','Hrubich','vlad.123jj@gmail.com','+38099341413')
];

console.log(users);

/*----------Task-2---------*/

const filterUsers = users.filter(user => user.id % 2 === 0)
console.log(filterUsers);

/*----------Task-3---------*/

const sortedUsers = users.sort((a, b) => a.id - b.id);
console.log(sortedUsers);

/*----------Task-4---------*/

function Client (id, name, surname , email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

const clients = [
    new Client(12,'Vlad','Hrytsak','vlad.h21@gmail.com','+380931112233',[
        {title: 'MacBook Pro', price: 72000},
        {title: 'EcoFlow River', price: 38000}
    ]),

    new Client(27,'Ivan','Shevchenko','ivan.shev92@gmail.com','+380671234567',[
        {title: 'iPhone 14', price: 42000}
    ]),

    new Client(34,'Dmytro','Melnyk','dima.melnyk@gmail.com','+380662221199',[
        {title: 'Dell XPS 13', price: 56000},
        {title: 'GoPro 11', price: 17000},
        {title: 'AirPods Pro', price: 9000}
    ]),

    new Client(88,'Oleg','Bondar','bondar.oleg87@gmail.com','+380503334455',[
        {title: 'Samsung S23', price: 35000}
    ]),

    new Client(41,'Nazar','Tkachenko','nazar.tk@gmail.com','+380964567890',[
        {title: 'Xbox Series X', price: 24000},
        {title: 'PowerBank 30k', price: 2300}
    ]),

    new Client(15,'Artem','Koval','artem.kov@gmail.com','+380951112244',[
        {title: 'EcoFlow Max', price: 45000},
        {title: 'Sony WH-1000XM5', price: 16000}
    ]),

    new Client(63,'Maksym','Antonov','maks.antonov@gmail.com','+380672223344',[
        {title: 'MacBook Air M2', price: 58000}
    ]),

    new Client(94,'Roman','Petrov','petrov.roma@gmail.com','+380931234555',[
        {title: 'iPad Pro 11', price: 35000},
        {title: 'Apple Pencil 2', price: 4200}
    ]),

    new Client(77,'Andriy','Marchenko','andriy.march@gmail.com','+380956667788',[
        {title: 'GoPro Hero 12', price: 19000}
    ]),

    new Client(52,'Kolya','Verstak','kolya.verstak@gmail.com','+380669998877',[
        {title: 'Samsung S24', price: 44000},
        {title: 'Dell Monitor 27"', price: 12000},
        {title: 'Keyboard Logitech MX', price: 4900}
    ])
];

console.log(clients);

/*----------Task-5---------*/


const sortedClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);

/*----------Task-6---------*/

function  Car(model, manufacturer, year, maxSpeed, engineCapacity){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function (){
        for(const key in this){
            console.log(key, this[key]);
        }
    }

    this.increaseMaxSpeed = function  (newSpeed){
        if(newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    }

    this.changeYear = function (newValue){
        if(newValue >= 1815) this.year = newValue;
    }

    this.addDriver = function (driverObject){
        if(driverObject){
            this.driver = driverObject;
        }
    }
}

let car = new Car('Reno', 'Franche', 2011, 180,1.4);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(20);
console.log(car);
car.changeYear(2022);
console.log(car);
car.addDriver({name: 'vlad', age:22});
console.log(car);

