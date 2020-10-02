var number = document.getElementById('number');
var increment = document.getElementById('increment');
var decrement = document.getElementById('decrement');
var num = 0;

increment.addEventListener('click', Increment);
decrement.addEventListener('click', Decrement);

function Increment() {
    num = num + 1;
    number.innerHTML = num;
    CheckNum(num);

}

function Decrement() {
    num = num - 1;
    number.innerHTML = num;
    CheckNum(num);
}


function CheckNum(sum) {
    if (sum > 0) {
        number.style.color = "green";
    } else if (sum < 0) {
        number.style.color = "red";
    }else{
       number.style.color = "black"; 
    }
}
