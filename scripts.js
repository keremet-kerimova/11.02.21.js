
// let fruits = ["apple","corret " , "current",  "banana", "potato"];
// let ul = document.createElement('ul')
// document.body.append(ul);
// for  ( let  i = 0; i<fruits.length; i++ ){
//    let button = document.createElement("button");
//    button.innerText = "remove";
//     let li = document.createElement('li');
//     li.innerText=fruits[i]
//     ul.append(li);
//     ul.append(button);
// };
// document.body.append(ul)
// let input  = document.querySelector("input");
// let button = document.querySelector("button");
// button.addEventListener('click',  function () {
//     let li = document.createElement('li');
//     let button2 = document.createElement("button");
//     button2.innerText = "remove";
//     li.innerText= input.value
//     ul.append(li);
//     ul.append(button2);
//     input.value= "";
// });

// button.addEventListener('click', function(){
// button.remove();
// });

let fruits = ['Apple', 'Banana', 'Orange', 'Lemon'];
let ul = document.createElement('ul');
let input = document.querySelector("input");
let btn = document.querySelector("button");

document.body.append(ul);

btn.addEventListener('click', addElement);
function addElement(){
    let li = document.createElement("li");
    let btn = document.createElement("button");
   //  let span = document.createElement('span');
    btn.innerText = "Remove";
    btn.addEventListener('click', function(){
        li.remove();
    });
    
    li.innerText = input.value;
    li.append(btn);
    ul.append(li);
    input.value = "";
   //  li.append(span);
}


for (let i in fruits) {
    let li = document.createElement("li");
    li.innerText = fruits[i];
    let btn = document.createElement("button");
    let span = document.createElement('span');
    btn.innerText = "Remove";
    btn.addEventListener('click', function(){
        li.remove();
    });
    li.append(btn);
    ul.append(li);
    li.append(span);
}


