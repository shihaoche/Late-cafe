$(function () {

    /* 手機選單開合 */
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

function show(){        //動態時間自動跑設定
    var date = new Date(); //日期对象
    var now = "";
    now = date.getFullYear()+"年"; //读英文就行了
    now = now + (date.getMonth()+1)+"月"; //取月的时候取的是当前月-1如果想取当前月+1就可以了
    now = now + date.getDate()+"日";
    now = now + date.getHours()+"時";
    now = now + date.getMinutes()+"分";
    now = now + date.getSeconds()+"秒";
    document.getElementById("time").innerHTML = now; //div的html是now这个字符串
    setTimeout("show()",1000); //设置过1000毫秒就是1秒，调用show方法
    }

    
    




