var news = document.getElementById('hotNews');
var oList = news.getElementsByTagName('li');
for (var i = 0; i < oList.length; i++) {
    var curli = oList[i];
    var n = i % 3;
    if (n === 0) {
        curli.style.backgroundColor = '#EEE';
        curli.myBg = '#EEE';
    } else if (n === 1) {
        curli.style.backgroundColor = '#999';
        curli.myBg = '#999';
    } else {
        curli.style.backgroundColor = '#FFF';
        curli.myBg = '#FFF';
    }
    ;
    curli.onmouseover = function () {
        this.className = 'hover';
    };
    curli.onmouseout = function () {
        this.style.backgroundColor = this.myBg;
    };
}

