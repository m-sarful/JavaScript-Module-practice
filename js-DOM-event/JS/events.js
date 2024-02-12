  // Option 1 --- directly set on the HTML elements 
// {/* <button title="This is a tooltip" onclick="console.log(7)">Click Me!</button> */}



// Option 2  add onclick function on the HTML elements
// IMPORTANT WE WILL USE THJS 
function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

//Option - 3

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
  document.body.style.backgroundColor = 'blue';
}

// Option 3.5

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


// Option 4
 
const pinkButton = document.getElementById('make-pink');
     pinkButton.addEventListener('click', makePink);

      function makePink(){
        document.body.style.backgroundColor = 'pink';
      }

      // Option 4.5 

      const makeYellow =  document.getElementById('make-yellow');
      makeYellow.addEventListener('click', function(){
       document.body.style.backgroundColor = 'yellow';
      })


      // Option 4 FINAL

      document.getElementById('make-orange').addEventListener('click', function(){
        document.body.style.backgroundColor = 'orange';
     })