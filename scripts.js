// let fruits = ["Яблоко", "Апельсин", "Слива"];

// let ul = document.createElement('ul');
// document.body.append (ul);

// for (let i = 0 ; i < fruits.length; i++){
//    let  li = document.createElement('li').innerText = fruits[i];
//    ul.append(li);
// }
// document.body.append(ul);
// let input = querySelector("input");
// let buttom = querySelector("buttom");

// buttom.addEventListiner('click', function(){
//    let li = document.createElement('li');
//    li.innerText = input.value
//    ul.append(li);
//    input.value = ""
// });

let fruits = ["apple" + " " +  "corret " + " " + "current" + " " + "banana" + " " + "potato",];
let ul = document.createElement('ul')
document.body.append(ul);
for  ( let  i = 0; i<fruits.length; i++ ){
    let li = document.createElement('li').innerText = fruits[i]
    ul.append(li);
};
document.body.append(ul)
let input  =document.querySelector("input");
let button = document.querySelector("button");
button.addEventListener('click',  function () {
    let li = document.createElement('li');
    li.innerText= input.value
    ul.append(li);
    input.value= "";
});
