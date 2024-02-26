const products = [
    {id: 1, name: 'acer', price: 12000},
    {id: 2, name: 'samsung', price: 15000},
    {id: 3, name: 'lg', price: 14400},
    {id: 4, name: 'hp', price: 14800}
];

class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

// const lenovo = new Product('Dhaka');
// console.log(lenovo);
// lenovo.speak('Singapore')



class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math');
    }
}

const sir1 = new Teacher('Rafiq', 'Physics');
console.log(sir1);

const sir2 = new Teacher('Mahmud', 'English');
console.log(sir2);