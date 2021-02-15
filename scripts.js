let fruits = ['Apple', 'Banana', 'Orange', 'Lemon'];

let ul = document.createElement('ul');
let input = document.querySelector("input");
let btn = document.querySelector("button");

document.body.prepend(ul);

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
    span.addEventListener('click', function(){
        li.append(span)
    })
    let span2 = document.createElement('.selected');
    span2.addEventListener('click', function(){
        li.remove(span2)
    });
    btn.innerText = "Remove";
    btn.addEventListener('click', function(){
        li.remove();
    });
    li.append(btn);
    ul.append(li);
    li.append(span);
}


