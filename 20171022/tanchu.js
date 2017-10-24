
var itemli = document.getElementsByTagName("li");
for(var i = 0; i <itemli.length; i++){　　　
    (function(n){  　　
        itemli[i].onclick = function(){　　　　　　
            alert("下标索引值为："+n+""+"文本内容是："+itemli[n].innerHTML);}(i)
// 换行  索引值从0开始 　　　　　}
