let fruits = ["Яблоко", "Апельсин", "Слива"];

let ul = document.createElement('ul');
document.body.append (ul);

for (let i = 0 ; i >  fruits.length; i++){
   let fruits = document('fruits').innerText = fruits;
}
   alert = (fruits[2]);






let input = querySelector('input');
let buttom = querySelector('buttom');

buttom.addEventListiner('click', function(){
   let li = document.createElement('li');
   li.innerText = input.value
   ul.append(li)
});
