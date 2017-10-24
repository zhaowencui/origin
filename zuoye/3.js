// var hotNews = document.getElementById('hotNews');
// var newsList = hotNews.getElementsByTagName('li');
// for (var i = 0; i < newsList.length; i++) {
//     var curLi = newsList[i];
//     var n = i % 3;
//     switch (n) {
//         case 0:
//         curLi.style.backgroundColor = '#EEE';
//         curLi.myBg = '#EEE';
//         break;
//         case 1:
//         curLi.style.backgroundColor = '#FFF';
//         curLi['myBg'] = '#FFF';
//         break;
//         default: curLi.style.backgroundColor = '#999';
//         curLi['myBg'] = '#999';
//
//     }
//
//     //->鼠标滑过变颜色：每一次循环都给当前操作的这个LI绑定一个鼠标滑过的事件,当鼠标滑过这个LI的时候,执行绑定的方法(函数),把需要做的事情放在函数中即可
//     curLi.onmouseover = function () {
//         //=>this:代表的就是当前操作的这个LI(鼠标滑过的这个LI)
//         this.style.backgroundColor = 'lightblue';
//     };
//
//     //->鼠标离开：让其回归原有的颜色
//     curLi.onmouseout = function () {
//         this.style.backgroundColor = this.myBg;//=>此处需要用到之前存储在myBg这个属性上的属性值(元素的原有背景颜色)
//     };
// }
//
// // for (var i = 0:i < oList.length;i++){
// //     oList[i].className = 'c' + (i % 3 + 1);
// // } 需要配合css使用,隔行变色

var listenPlate = document.getElementById('listenPlate'),
    shakeBtn = document.getElementById('shakeBtn');
var n = 0,
    range1 = 'ACEFGBO',
    range2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
shakeBtn.onclick = function () {
    n++;
    if (n > 3) {
        alert('不能再摇号了!');
        return;
    }
    var result = '';
    result += '京' + range1[random(0, 6)];
    for (var i = 0; i < 5; i++) {
        result += range2[random(0, 35)];
    }
    listenPlate.innerHTML = result;
};
function random(n, m) {
    return Math.round(Math.random() * (m - n) + n);
}

