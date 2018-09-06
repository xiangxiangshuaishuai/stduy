window.onload = function(){
    var navmia = document.querySelectorAll('.nav-mi ul a');
    var hid = document.querySelectorAll('.hid');
    var shopping = document.querySelector('.navbar .navr li:nth-of-type(4)');
    var shopa = document.querySelector('.navbar .navr li:nth-of-type(4) a');
    var cart = document.querySelector('.cart');
    var miimg = document.querySelectorAll('.mi .mi-main .mi-main-r img')
    var mispan = document.querySelectorAll('.list li span');
    var butleft = document.querySelector('.mi-main-r .but a:nth-of-type(1)')
    var butright = document.querySelector('.mi-main-r .but a:nth-of-type(2)')
    var mili = document.querySelectorAll('.mi-main .mi-main-l li');
    var mihid = document.querySelector('.mi-l-hid');
    var p1 = document.querySelector('.buy .p1');
    var p2 = document.querySelector('.buy .p2');
    var p3 = document.querySelector('.buy .p3');
    var lunl = document.querySelector('.buy .but span:nth-of-type(1)')
    var lunr = document.querySelector('.buy .but span:nth-of-type(2)')
    var lunbo = document.querySelector('.buy .lunbo')
    var phoimg = document.querySelectorAll('.phone .container figure')
    var fighid = document.querySelectorAll('.ele .container1 figure .fig-hid')
    var elefig = document.querySelectorAll('.ele .container1 figure')
    var len1 = navmia.length;
    var len2 = mispan.length;
    var len3 = mili.length;
    var len4 = phoimg.length;
    var len5 = fighid.length;
    var index = 0;
    var timer = 0;
    var num1 = 0;
    var num2 = 0; 
    for(var i =0 ;i<len1;i++){
        navmia[i].index = i;
        navmia[i].onmouseover = function(){
            hid[this.index].style.height = '230px';
            hid[this.index].style.border = '1px solid #E0E0E0';
        }
        navmia[i].onmouseout = function(){
            hid[this.index].style.height = '0';
            hid[this.index].style.border = 'none';
        }
    }
    shopping.onmouseover = function(){
        shopa.style.color = '#FF6700';
        shopping.style.background = 'white';
        cart.style.height = '90px';
    }
    shopping.onmouseout = function(){
        shopa.style.color = '';
        shopping.style.background = '';
        cart.style.height = '0';
    }
    // *******************************************轮播图*******************************
    function update(num){
        for(var k = 0;k<len2;k++){
            mispan[k].style.background = '';
            miimg[k].style.display = 'none';
        }
        mispan[num].style.background = 'white';
        miimg[num].style.display = 'block';
    }
    function base(){
        ++index;
        if(index>=len2){
            index = 0;
        }
        update(index);
    }
    for(var k = 0;k<len2;k++){
        mispan[k].index = k;
        mispan[k].onmouseover = function(){
            clearInterval(timer);
            update(this.index);
        }
        mispan[k].onmouseout = function(){
            index = this.index;
           timer =  setInterval(base,1000);
        }
    }
    timer = setInterval(base,1000);
    butleft.onclick = function(){
        clearInterval(timer);
        ++num1;
        if(num1 >= len2){
            num1 = 0;
        }
        update(num1);
    }
    butleft.onmouseout = function(){
        index = num1;
        timer =  setInterval(base,1000);
    }
    butright.onclick = function(){
        clearInterval(timer);
        ++num1;
        if(num1 >= len2){
            num1 = 0;
        }
        update(num1);
    }
    butright.onmouseout = function(){
        index = num1;
        timer =  setInterval(base,1000);
    }
    // ****************************左侧栏的隐藏**************************************
    for(var k = 0;k<len3;k++){
        mili[k].index = k;
        mili[k].onmouseover = function(){
            mili[this.index].style.background = '#ff6700';
            mihid.style.display = 'block';
        }
        mili[k].onmouseout = function(){
            mili[this.index].style.background = 'none';
            mihid.style.display = 'none';
        }
    }
    // ********************倒计时*********************
    // var starttime = new Date();
    // var endtime = new Date('2018 8 30 08:50:20');
    // var time = endtime.getTime() - starttime.getTime();
    // var hour = parseInt(time/(3600*1000));
    
    // var minute = parseInt(time%(3600*1000));
    // var second = parseInt(time%(60*1000));console.log(second);
    // function timer(){

    // }
    // *********************************轮播***************************
    lunl.onclick = function(){
        num2 = num2 - 955;
        if(num2 <= -955){
            num2 = -955;
        }
        lunbo.style.marginLeft = num2 + 'px';
    }
    lunr.onclick = function(){
        num2 = num2 + 955;
        if(num2 >= 0){
            num2 = 0;
        }
        lunbo.style.marginLeft =  num2 + 'px';
    }
    // ************************手机**************************************
    for(var j = 0;j<len4;j++){
        phoimg[j].index = j;
        phoimg[j].onmouseover = function(){
            phoimg[this.index].className = 'active';
        }
    }
    // ***********************家电*********************
    // for(var k = 0;k<len5;k++){
    //     elefig[k].index = k;
    //     elefig[k].onmouseover = function(){
    //         fighid[this.index].style.height = '80px';
    //     }
    //     elefig[k].onmouseout = function(){
    //         fighid[this.index].style.height = '0';
    //     }
    // }




    var btn = document.querySelector('.side li:nth-of-type(4)');
var clientHeight=document.documentElement.clientHeight;

var timer=null;
var istop=true;


    if(!istop){
        clearInterval(timer);
    }
    istop=false;

    var high=document.documentElement.scrollTop||document.body.scrollTop;
    if(high>=clientHeight){
        btn.style.display='block';
    }else{
        btn.style.display='none';
    }

btn.onclick=function(){

    timer=setInterval(function() {

    var high=document.documentElement.scrollTop||document.body.scrollTop;

    var speed=Math.floor(-high/6);
    document.documentElement.scrollTop=document.body.scrollTop=high+speed;
  
    istop=true;
    if(high==0){
        clearInterval(timer);
    }
    },30);

    
}

}

