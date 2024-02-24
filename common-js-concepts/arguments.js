function add(a, b, c){
        const args = [...arguments];
        console.log(args);

    const result = a + b + c;
    return result;
}


const total = add(34, 12, 13);
console.log(total);
console.log(add.length);