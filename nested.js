const college = {
    name : 'TSC',
    class : ['11', '12'],
    events : ['science fair', 'bijoy dibos', '21st february'],
    unique : {
        color : 'blue',
        result : {
            gpa : 5,
            merit : 'top'
        }
    }
}

console.log(college.unique.result.merit);
// console.log(college);
 college.events[1] = '16th Dec';
 console.log(college.events[1]);
  delete college.class;
  console.log(college);