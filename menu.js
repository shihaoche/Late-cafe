$(function (){
    var menuoption = document.querySelector('#menu');
    var shopoption = document.querySelector('#shop');
    var mathoption = document.querySelector('#math');

var menulist = [
    {
        'menu': '無',
        'value': '無'
    },
    {
        'menu': '餐點',
        'value': '餐點'
    },
    {
        'menu': '派類',
        'value': '派類'
    },
    {
        'menu': '點心',
        'value': '點心'
    },
    {
        'menu': '飲料',
        'value': '飲料'
    },
    {
        'menu': '咖啡',
        'value': '咖啡'
    }
    
]

var shoplist = [
    {
        'menu': '餐點',
        'shop': '法式吐司經典早午餐',
        'value': '法式吐司經典早午餐'
    },
    {
        'menu': '餐點',
        'shop': '藍莓吐司早午餐',
        'value': '藍莓吐司早午餐'
    },
    {
        'menu': '餐點',
        'shop': '炒洋菇半熟蛋法式土司',
        'value': '炒洋菇半熟蛋法式土司'
    },
    {
        'menu': '餐點',
        'shop': '燻鮭魚菠菜嫩蛋',
        'value': '燻鮭魚菠菜嫩蛋'
    },
    {
        'menu': '餐點',
        'shop': '鮮蝦酪梨莎莎醬早午餐',
        'value': '鮮蝦酪梨莎莎醬早午餐'
    },
    {
        'menu': '餐點',
        'shop': '焗烤起司薯泥佐明太子醬早午餐',
        'value': '焗烤起司薯泥佐明太子醬早午餐'
    },
    {
        'menu': '派類',
        'shop': '燻鮭魚菠菜乳酪鹹派',
        'value': '燻鮭魚菠菜乳酪鹹派'
    },
    {
        'menu': '派類',
        'shop': '德式香腸薯泥起司鹹派',
        'value': '德式香腸薯泥起司鹹派'
    },
    {
        'menu': '派類',
        'shop': '酥脆墨西哥烤餅佐沙沙醬',
        'value': '酥脆墨西哥烤餅佐沙沙醬'
    },
    {
        'menu': '點心',
        'shop': '戚風蛋糕',
        'value': '戚風蛋糕'
    },
    {
        'menu': '點心',
        'shop': '提拉米蘇',
        'value': '提拉米蘇'
    },
    {
        'menu': '點心',
        'shop': '千層蛋糕',
        'value': '千層蛋糕'
    },
    {
        'menu': '點心',
        'shop': '抹茶蛋糕',
        'value': '抹茶蛋糕'
    },
    {
        'menu': '飲料',
        'shop': '蘋果茶',
        'value': '蘋果茶'
    },
    {
        'menu': '飲料',
        'shop': '柳橙汁',
        'value': '柳橙汁'
    },
    {
        'menu': '飲料',
        'shop': '花茶',
        'value': '花茶'
    },
    {
        'menu': '咖啡',
        'shop': '美式黑咖啡',
        'value': '美式黑咖啡'
    },
    {
        'menu': '咖啡',
        'shop': '冰美式黑咖啡',
        'value': '冰美式黑咖啡'
    },
    {
        'menu': '咖啡',
        'shop': '原味拿鐵',
        'value': '原味拿鐵'
    },
    {
        'menu': '咖啡',
        'shop': '冰原味拿鐵',
        'value': '冰原味拿鐵'
    },
    {
        'menu': '咖啡',
        'shop': '風味(香草)拿鐵',
        'value': '風味(香草)拿鐵'
    },
    {
        'menu': '咖啡',
        'shop': '冰風味(香草)拿鐵',
        'value': '冰風味(香草)拿鐵'
    },
    {
        'menu': '咖啡',
        'shop': '風味(榛果)拿鐵',
        'value': '風味(榛果)拿鐵'
    },
    {
        'menu': '咖啡',
        'shop': '冰風味(榛果)拿鐵',
        'value': '冰風味(榛果)拿鐵'
    },
    {
        'menu': '咖啡',
        'shop': '風味(海鹽焦糖)拿鐵',
        'value': '風味(海鹽焦糖)拿鐵'
    },
    {
        'menu': '咖啡',
        'shop': '冰風味(海鹽焦糖)拿鐵',
        'value': '冰風味(海鹽焦糖)拿鐵'
    },
    {
        'menu': '咖啡',
        'shop': '焦糖瑪奇朵',
        'value': '焦糖瑪奇朵'
    },
    {
        'menu': '咖啡',
        'shop': '冰焦糖瑪奇朵',
        'value': '冰焦糖瑪奇朵'
    },
    {
        'menu': '咖啡',
        'shop': '卡布奇諾',
        'value': '卡布奇諾'
    },
]

var menuleng = menulist.length;

var str = '<option value="">請選擇餐點</option>';
for (var i = 0; i < menuleng; i++) {
    // console.log(menulist[i].menu);
    str += '<option value="' + menulist[i].value + '" >' + menulist[i].menu + '</option>';
    // console.log(str);
}

menuoption.innerHTML = str;

var shopleng = shoplist.length;


update = function (e) {
   console.log('選擇的餐點', e.target.value)
  
   var str2 = '<option value="">請選擇餐</option>';

  
    for (i = 0; i < shopleng; i++) {
        if (e.target.value == shoplist[i].menu) {
            shopoption.disabled = false;
          
          console.log('被選擇的名稱',shoplist[i].shop);
            str2 += '<option value="' + shoplist[i].value + '" >' + shoplist[i].shop + '</option>';
          
        } else if (e.target.value == '無') {
            shopoption.disabled = true;
        }
    }
  
    shopoption.innerHTML = str2;

}


menuoption.addEventListener('change', update);


menuall = function open(e){
  

    var menu = `
                <div style="margin-top:15px; margin-bottom:15px; ">${shopoption.value}  * ${math.value} <a href="" class="menuclear" >X</a> </div> `;

                   
    document.getElementById("menushow1").innerHTML += menu;

   
    $("#menu").val("");
    $("#math").prop('selectedIndex', 0);
    shopoption.innerHTML = '<option value="">請選擇餐</option>';

    
}

mathoption.addEventListener('change',menuall);



$("#menushow1").on("click", ".menuclear", function (e) {
    e.preventDefault(); 
    $(this).parent('div').remove(); 
  });

    
});


function inmenu(){
    document.getElementById("menushow").innerHTML = "";
    document.getElementById("menushow1").innerHTML = "";
    
    $(".header__mobileMenu").removeClass("open");

    $(".header__mobileMenu").removeClass("open");

    $(".header__mobileMenu").removeClass("open");

}
