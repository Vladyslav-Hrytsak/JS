/*----------Task-7---------*/

class Car {

    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info (){
        for(const key in this){
            console.log(key, this[key]);
        }
    }

    increaseMaxSpeed (newSpeed){
        if(newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    }

    changeYear (newValue){
        if(newValue >= 1815) this.year = newValue;
    }

    addDriver (driverObject){
        if(driverObject){
            this.driver = driverObject;
        }
    }
}

let car2 = new Car('Mazda', 'Japan', 2018, 220,2.0);
console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(20);
console.log(car2);
car2.changeYear(2022);
console.log(car2);
car2.addDriver({name: 'Vasil', age:45});
console.log(car2);

/*----------Task-8---------*/

class Cinderella{

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince{

    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const cinderellas = [
    new Cinderella('Anna', 19, 34),
    new Cinderella('Bella', 21, 36),
    new Cinderella('Clara', 18, 35),
    new Cinderella('Diana', 22, 37),
    new Cinderella('Eva', 20, 33),
    new Cinderella('Fiona', 23, 38),
    new Cinderella('Gabriella', 25, 39),
    new Cinderella('Hanna', 17, 34),
    new Cinderella('Isabella', 24, 36),
    new Cinderella('Julia', 19, 35),
];

const prince = new Prince('Nicolas', 22, 33);

for(const cinderella of cinderellas){
    if(cinderella.footSize === prince.shoe){
        prince.wife = cinderella;
        console.log(prince.wife);
    }
}

let trueCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.shoe );
 prince.wife = trueCinderella;
console.log(prince.wife)


/*----------Task-9---------*/


Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};


Array.prototype.myFilter = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
