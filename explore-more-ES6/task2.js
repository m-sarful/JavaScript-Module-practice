// task - 2 : console log the output : petersburg, Herry

let students = {
    2222: {
        name: 'Jack',
        section: 'C',
        class: 'IX', 
        address: {
            'buildingNo' : '12',
            'street' : 'St. Jonson',
            'city' : 'Petersburg',
            'country': 'UK'
        }
    },
    3333: {
        name: 'Herry',
        section: 'D',
        class: 'X',
        address: {
            'buildingNo' : 85,
            'street' : 'Dc road',
            'city' : 'Khilkhet',
            'country': 'Bangladesh'
        }
    }
}

const output = students['2222'].address.city;
console.log(output);

const output2 = students['3333'].name;
console.log(output2)