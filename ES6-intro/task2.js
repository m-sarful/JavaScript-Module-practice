/**
 * Write an arrow function where it will do the following
 * 
 * a. It will take an array where the array elements will be the name your friends
 * 
 * b. Check the length of each elements is even, push elements with even length to a new array and return the result
 */


const friends = ['Bayzid', 'Rabbi', 'Arnob', 'Monir', 'Shiblo', 'Saidul', 'Akash'];
const evenFriend = [];
const evenFriends = (friends) => {
    for(const frnd of friends){
        if(frnd.length % 2 === 0){
            evenFriend.push(frnd);
            
        }
    }
    return evenFriend;
}

const output = evenFriends(friends);
console.log(output);