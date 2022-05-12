
// function rollDice() {
// const firstRandomNum = Math.floor(Math.random() * 6) + 1;
// const firstDice = firstRandomNum + 'imag/dice' + firstRandomNum + '.png';
// document.querySelectorAll('.img1')[0].setAttribute('src',firstDice);

// const secondRandomNum = Math.floor(Math.random() * 6) + 1;
// const secondDice = 'imag/dice' + secondRandomNum + '.png';
// document.querySelectorAll('.img1')[1].setAttribute(secondDice);

// if(firstRandomNum > secondRandomNum){
//     document.querySelector('h1').innerHTML = 'The winner is player 1';
// }else if(firstRandomNum < secondRandomNum {
//     document.querySelector('h1').innerHTML = 'The winner is player 2';
// }else {document.querySelector('hi').innerHTML = "It's a Draw!"};
// }
// var youDice = rollDice();
// h1.innerHTML = youDice


var dic1 = document.getElementById("dic1");
var dic2 = document.getElementById("dic2");
function rollDice() {
    var firstRandNum = Math.floor(Math.random() * 6) + 1;
    var secondRandomNum = Math.floor(Math.random() * 6) + 1;
    var output = firstRandNum + secondRandomNum + 'images.dice.png';

    dic1.innerHTML = firstRandNum;
    dic2.innerHTML = secondRandomNum;
    h1.innerHTML += "You rolled " + output + ".";
    if (firstRandNum > secondRandomNum) {
        h1.innerHTML += "The winner is player 1";
    } else if (firstRandomNum < secondRandomNum) {
        h1.innerHTML += 'The winner is player 2';
    } else if(random1 === random2){
        document.querySelector("h1").innerHTML = "It's a Draw!" };
    alert(output);
}
const youRolled = rollDice();
h1.innerHTML = youRolled


