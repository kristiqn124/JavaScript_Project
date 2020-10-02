(function () {
    var DomName = {
        bill: 'bill',
        peolpe: 'people',
        browser: 'browser',
        btn: 'total'
    }



    var bill = document.getElementById(DomName.bill);
    var people = document.getElementById(DomName.people);
    var browser = document.getElementById(DomName.browser);
    var btnTotal = document.getElementById(DomName.btn);

console.log('What');
   
var smt,nz;
    btnTotal.addEventListener('click', function(){
    tip();
    total();
        
    });
    
var total =function(){
    nz = bill.value + smt;
    console.log(nz);
}
    
var tip = function(){
     if (browser.value === 'Bad-2%') {
            smt = bill.value * 0.02 ;
        } else if (browser.value === 'Good-10%') {
            smt = bill.value * 0.10 ;
        } else if (browser.value === 'Great-20%') {
            smt = bill.value * 0.20;
        }
        
    
        
        console.log(smt);
}


})();
