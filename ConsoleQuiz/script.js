(function () {


    var questions = function (question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }


    var quest1 = new questions('Who is my brother?', ['Daniel', 'Alex', 'Stiv'], 0);
    var quest2 = new questions('What is my phone?', ['Samsung', 'Iphone', 'Huawei', 'Nokia'], 2);
    var quest3 = new questions('Am I workout?', ['Yse', 'No'], 0);
    var quest4 = new questions('Did I like fyre?', ['Yes', 'No'], 0);
    
    var arrQuest = [quest1, quest2, quest3, quest4];
    var score = 0;
    
    questions.prototype.checkAnswer = function (answer) {
        if (this.correct === answer) {
            console.log('Correct')
            score ++;
        } else {
            console.log('False')
            score--;
        }
    }
    
    
    questions.prototype.displayQ = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }


    function newQustion() {
        console.log('Hi');
        var n = Math.floor(Math.random() * arrQuest.length);
        arrQuest[n].displayQ();
        var answer = prompt('Enter your value: ');

        if (answer !== 'exit') {
            arrQuest[n].checkAnswer(parseInt(answer));
            newQustion();
        }else{
            var point = prompt('Your points are : ' + score );
        }

    }

newQustion();


})();
