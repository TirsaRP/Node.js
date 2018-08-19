'use strict';

// TODO: Write the homework code in this file
let fs = require('fs');

//let help= fs.readFileSync('help.txt', 'utf8');

console.log('Your To Do List: ');

let input = process.argv[2];
let item = process.argv[3];
let items=[];

const fileName = 'toDoList.json'



  fs.readFile(fileName, 'utf8', (err, data)=>{
    items = JSON.parse(data);
    console.log(JSON.stringify(items));
  });
 

switch (input) {
  case 'add':
    items.push(item);
    console.log('you have added an item to your list')
    break;

  case 'remove':
    items.splice(item, 1)
    console.log('you have removed one item from your list');
    break;

  case 'list':
    console.log(JSON.stringify(items));
    break;

  case 'reset':
    items = [];
    console.log('your list has been reset');
    break;

  case 'help':
  default:
    let help = fs.readFile('help.txt', 'utf8', function (err, data) {
      console.log(data);
    })
    return;
};

fs.writeFile(fileName, JSON.stringify(items), (err, data) => {
  if (err) throw error;
});