function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}

function Animal(name, age) {
    this.name = name;
    this.age = age;
    this.eat = function () {
        console.log(`${this.name} is eating.`);
    };
    this.sleep = function () {
        console.log(`${this.name} is sleeping.`);
    };
}

function Cat(name, age, color, ownerId) {
    Object.setPrototypeOf(this, new Animal(name, age))
    this.name = name;
    this.age = age;
    this.color = color;
    this.ownerId = ownerId;
    this.meow = function () {
        console.log(`The cat ${this.name} says Meow.`);
    };
    this.getOwnerDetails = function (people) {
    let owner = people.filter(person => person.id === this.ownerId).map(person => person.getFullName());
    return owner.length > 0 ? owner[0] : "The cat does not have an owner";
};
}

function PersianCat(name, age, color, ownerId, eyeColor) {
   Object.setPrototypeOf(this, new Cat(name, age, color, ownerId)); 
    this.eyeColor = eyeColor;
    this.furDescription = function () {
        console.log(`The Persian cat ${this.name} has full fur!`);
    };
}

function RagDollCat(name, age, color, ownerId, weight, isFriendly) {
    Object.setPrototypeOf(this, new Cat(name, age, color, ownerId));  
    this.weight = weight;
    this.isFriendly = isFriendly;
    this.printPersonality = function () {
        console.log(`The cat is ${this.isFriendly ? "friendly" : "not friendly"}.`);
    };
}

const people = [
    new Person(1, "Jovan", "Petrovski", 30),
    new Person(2, "Ana", "Mitrova", 25),
    new Person(3, "Elena", "Stojanova", 28),
    new Person(4, "Bojan", "Risteski", 35),
    new Person(5, "Katerina", "Ivanova", 40)
];

let cat1 = new Cat("Garfield", 12, "orange", 3);  
let cat2 = new PersianCat("Snowball", 2, "White", 5, "blue");  
let cat3 = new RagDollCat("Johny", 1, "black and white", 1, 5.6, true);  

console.log(`${cat1.name} is owned by: ${cat1.getOwnerDetails(people)}`);
cat1.meow(); 

console.log(`${cat2.name} is owned by: ${cat2.getOwnerDetails(people)}`);
cat2.furDescription(); 

console.log(`${cat3.name} is owned by: ${cat3.getOwnerDetails(people)}`);
cat3.printPersonality(); 
