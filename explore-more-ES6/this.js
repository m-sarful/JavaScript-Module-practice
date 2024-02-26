class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    message(){
        console.log(`${this.name} everyday wake up in the morning`);
    }
}

const man = new Person('Sarful', 23);
console.log(man);
man.message();