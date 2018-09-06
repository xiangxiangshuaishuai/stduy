var recomleft = document.querySelector('.recom  div p span:nth-of-type(1)');
var recomright = document.querySelector('.recom  div p span:nth-of-type(2)');
var recombox = document.querySelector('.recom .recombox');
console.log(recomleft);
console.log(recomright);
console.log(recombox);
var recomnum = 0;

recomleft.onclick = function(){
    if(recomnum == 0){
        recomnum = recomnum - 1200 ;
        recombox.style.marginLeft = recomnum + 'px';
        console.log(recomnum);
    }

}
recomright.onclick = function(){
    if(recomnum == -1200){
        recomnum = recomnum + 1200 ;
        recombox.style.marginLeft = recomnum + 'px';
        console.log(recomnum);
    
    }

}