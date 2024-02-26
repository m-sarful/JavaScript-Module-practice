// task-1 :  Console log the secondary school location of Sophia

let data = {
    sophia: {
        id: 33,
        study:[
            {
                primary:
                [
                    {school_name: 'ABC primary school'},
                    {location: 'Peter burg'}
                ]
            },
           { secondary:
            [
                {school_name: 'ABC secondary school'},
                {location: 'St Lorence'},
            ]
        },
        ]
    }
}
console.log(data.sophia.study[1].secondary[1]);