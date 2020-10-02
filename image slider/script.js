var left = document.getElementById('left');
var right = document.getElementById('right');
var image = document.getElementById('image');
var img = 1;


right.addEventListener('click', function () {
    if (img < 4) {
        img = img + 1;
    } else {
        img = 1
    }

    image.src = 'car-' + img + '.jpg';
    console.log(img);
});

left.addEventListener('click', function () {
    if (img > 1) {
        img = img - 1;
    } else {
        img = 4
    }

    image.src = 'car-' + img + '.jpg';
    console.log(img);
});


/*
var i = 0;
var images = [];

images[0] =  'car-1.jpg';
images[1] =  'car-2.jpg';
images[2] =  'car-3.jpg';
images[3] =  'car-4.jpg';



right.addEventListener('click' ,function(){
    if(i<images.length-1){
       i++ 
    }
    else{
        i = 0
    }
    
    image.src = images[i];
    
});

left.addEventListener('click' ,function(){
    if(i>0){
       i--;
    }
    else{
        i = images.length-1;
    }
    
    image.src = images[i];
    
});

*/
