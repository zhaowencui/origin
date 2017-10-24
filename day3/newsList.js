/*
 *需求：让所有li中的偶数行背景颜色变为#EEE
 */
//=>1、想要操作哪些元素 就先获取这些元素
//getElementById:通过元素的ID来获取到这个元素
//document.getElementById:此处出现的document是获取元素时候的上下文（context）
//  context：上下文就是获取元素的时候限定的一个范围，这里限定在整个页面中获取需要的元素

// getElementsByTagName:通过标签名来获取到一组元素集合
var hotNews = document.getElementById('hotNews');//->定义一个变量存储我们获取到的这个UL元素
var newsList = hotNews.getElementsByTagName('li');//在指定上下文（hotNews）中通过标签名把所有的li获取到，存储在一个变量中

console.log(hotNews);
console.log(newsList);
for (var i = 0; i < newsList.length; i++) {
    var obj = newsList[i];
    
}