function greeting(greetingHandler, name){
    greetingHandler(name);
}

// const name = 'Sarful Islam';
// greeting(name);


function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name);
}

function greetNight(name){
    console.log('Good Night', name);
}

greeting(greetingHandler, 'Sarful');
greeting(greetEvening, 'Marful');
greeting(greetNight, 'Zahidul');


