'use strict';

// TODO: Write the homework code in this file
let fs = require('fs');

//let help= fs.readFileSync('help.txt', 'utf8');

console.log('Your To Do List: ');

let input = process.argv[2];
let item= process.argv[3]+'\n'
let items= [];

switch (input) {
    case 'add':
        fs.appendFile('toDoList.txt', item, (err) => {
            if (err) {
                console.log(err);
            } else {
              items= items.push(item)
                console.log('you have added an item to your list')
            }
        });
        break;
        case 'remove':
        
           items= items.splice(item, 0)
            console.log('you have removed one item from your list');
        break;

    case 'list':
        fs.readFile('toDoList.txt', 'utf8', (err, data)=>{
            if (err){
                console.log('your list is empty');
            } else {
                console.log(data)
            };
        });
        break;

    case 'reset':
        fs.unlink('toDoList.txt', (err)=>{
            if (err){
                console.log(err);
            } else{
                console.log('your list has been reset');
            }
        });
        break;

    case 'help':
    default:
        let help = fs.readFile('help.txt', 'utf8', function (err, data) {
            console.log(data);
        })
};