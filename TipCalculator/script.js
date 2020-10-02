(function () {
    var DomName = {
        bill: 'bill',
        peolpe: '.people',
        browser: 'browser',
        btn: 'totalbtn',
        tip1: 'tip1',
        personOutput: 'person',
        totalOutput: 'total'
    }



    var bill = document.getElementById(DomName.bill);
    var people = document.querySelector(DomName.peolpe);
    var browser = document.getElementById(DomName.browser);
    var btnTotal = document.getElementById(DomName.btn);
    var tip1 = document.getElementById(DomName.tip1);
    var person = document.getElementById(DomName.personOutput);
    var totalOutput = document.getElementById(DomName.totalOutput);


    var tipVar, totalVar, peopleVar, myVar;

    //Button submit
    btnTotal.addEventListener('click', function () {

        if (bill.value !== '' &&  people.value !== '' && browser.value !== '') {
            try {
                document.getElementById("OutputContainer").style.display = "none";
                document.querySelector(".loader").style.display = "block";
                 document.querySelector(".warning").style.display = "none";
                tip();
                total();
                myFunction();


            } catch (err) {
                console.log(err);
            }
        } else {
            document.querySelector(".warning").style.display = "block";
        }

    });

    var total = function () {
        totalVar = parseInt(bill.value) + tipVar;
        peopleVar = totalVar / parseInt(people.value)
        infoOutput(tipVar, totalVar, peopleVar);

    }

    var tip = function () {
        if (browser.value === 'Bad-2%') {
            tipVar = bill.value * 0.02;
        } else if (browser.value === 'Good-10%') {
            tipVar = bill.value * 0.10;
        } else if (browser.value === 'Great-20%') {
            tipVar = bill.value * 0.20;
        }


    }

    var infoOutput = function (tipOut, totalOut, personOut) {
        tip1.innerHTML = 'Total tip: <b>' + tipOut.toFixed(2) + '</b>';
        person.innerHTML = 'Total sum per person: <b> ' + personOut.toFixed(2) + '</b>';
        totalOutput.innerHTML = 'Total sum: <b>' + totalOut.toFixed(2) + '</b>';
    }



    //Loader



    var myFunction = function () {
        myVar = setTimeout(showPage, 2500);
    }

    function showPage() {
        document.querySelector(".loader").style.display = "none";
        document.getElementById("OutputContainer").style.display = "block";
    }


})();
