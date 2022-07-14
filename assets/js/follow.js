window.onload = function() {

    var oBox = document.getElementById("box");
    
    var oImg=document.getElementsByClassName("img");
    
    oBox.onmousemove = function(e) {
    
    var e = e || window.event;
    
    var left = e.clientX;
    
    var top = e.clientY;
    
    //console.log(left, top);
    
    //设置oImg偏移量
    
    //oImg.style.left = left + "px";
    
    //oImg.style.top = top + "px";
    
    oImg[0].style.left=left + "px";
    
    oImg[0].style.top=top + "px";
    
    for(var i=oImg.length-1;i>0;i--){
    
    oImg[i].style.left=oImg[i-1].style.left;
    
    oImg[i].style.top=oImg[i-1].style.top;
    
    }
    
    }
    
    }