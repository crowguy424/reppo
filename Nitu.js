//Challenge 1 --> your weight in lbs
function WeightinLBS(){
let weight = prompt("Enter your weight in kg...Mate???");
let WeightinLBSS = (2.2)*weight;
let h1 = document.createElement('h1');
let textAnswer = document.createTextNode('You are ' + WeightinLBSS + ' pounds');
h1.setAttribute('id', 'WeightinLBS');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}
//I love Nitu...she was my 3rd fling

function reset() {
    

    document.getElementById('WeightinLBS').remove();
}