//hide header when scrolling
var prevScrollPos = window.pageYOffset;
window.onscroll = ()=>{
    var currentScrollPos = window.pageYOffset;
    if  (prevScrollPos > currentScrollPos){
        document.getElementById("navbar").style.top = "0";
    }else{
        document.getElementById("navbar").style.top = "-50px";
    };
    prevScrollPos=currentScrollPos;
};
