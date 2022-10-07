$(function () {

    $(".office__nav--button").click(function () {
        $(".header__mobileMenu").addClass("open");
    });
    
    $(".office__nav--button-in").click(function () {
        $(".header__mobileMenu").addClass("open");
    });

    $(".office__nav--button-tablebar").click(function () {
        $(".header__mobileMenu").addClass("open");
    });

    $(".searchBar__cancel").click(function () {
        $(".header__mobileMenu").removeClass("open");
    });

});

function show(){       
    var date = new Date(); 
    var now = "";
    now = date.getFullYear()+"年"; 
    now = now + (date.getMonth()+1)+"月"; 
    now = now + date.getDate()+"日";
    now = now + date.getHours()+"時";
    now = now + date.getMinutes()+"分";
    now = now + date.getSeconds()+"秒";
    document.getElementById("time").innerHTML = now; 
    setTimeout("show()",1000);
    }

    
    




