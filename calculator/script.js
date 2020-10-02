(function () {

    var buttons = document.querySelectorAll('.btn');
    var screen = document.querySelector('.screen');
    var equal = document.querySelector('.btn-equal');
    var clear = document.querySelector('.btn-clear');
    var del = document.querySelector('.btn-delete');
    
    

    
    //Button Click
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;

        })
    });

    //Show Result 
    equal.addEventListener('click',function(e){
        if(screen.value===''){
            screen.value= 'Please enter Value';
        }
        else {
      let answer = eval(screen.value);
      screen.value = answer.toFixed(2);
    }
    });
    

    clear.addEventListener('click',function(){
       screen.value = ''; 
    });
    
    
    del.addEventListener('click' , function(){
        screen.value = screen.value.substr(0,(screen.value.length -1));
    });

})();
