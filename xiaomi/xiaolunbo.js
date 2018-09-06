var contenbox = document.querySelector('.conten figure section');
var contenleft = document.querySelector('.conten > div figure  span:nth-of-type(1)');
var contenright = document.querySelector('.conten  > div figure  span:nth-of-type(2)');


var contenb = document.querySelector('.conten:nth-of-type(2) figure section');
var contenl = document.querySelector('.conten:nth-of-type(2) > div figure  span:nth-of-type(1)');
var contenr = document.querySelector('.conten:nth-of-type(2)  > div figure  span:nth-of-type(2)');
console.log(contenb);

var contenbo = document.querySelector('.conten:nth-of-type(3) figure section');
var contenle = document.querySelector('.conten:nth-of-type(3) > div figure  span:nth-of-type(1)');
var contenri = document.querySelector('.conten:nth-of-type(3)  > div figure  span:nth-of-type(2)');



var contenbox1 = document.querySelector('.conten:nth-of-type(4) figure section');
var contenleft2 = document.querySelector('.conten:nth-of-type(4) > div figure  span:nth-of-type(1)');
var contenright3 = document.querySelector('.conten:nth-of-type(4)  > div figure  span:nth-of-type(2)');

console.log(contenleft);
console.log(contenright);
var contennum = 0;
contenleft.onclick = function(){
    if(contennum <= -260){
        contennum = contennum + 260;
        contenbox.style.marginLeft = contennum + 'px';
    }
    console.log(contennum);
   
}
contenright.onclick = function(){
    if(contennum >= -260){
        contennum = contennum - 260;
        contenbox.style.marginLeft = contennum + 'px';
    }
    console.log(contennum);

}

// *******************************
var contennum1 = 0;
contenl.onclick = function(){
    if(contennum1 <= -260){
        contennum1 = contennum1 + 260;
        contenb.style.marginLeft = contennum1 + 'px';
    }
    console.log(contennum);
   
}
contenr.onclick = function(){
    if(contennum1 >= -260){
        contennum1 = contennum1 - 260;
        contenb.style.marginLeft = contennum1 + 'px';
    }
    console.log(contennum);

}
































