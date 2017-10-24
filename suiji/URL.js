//->获取一个URL地址中问号传递参数的值（项目必用）
function queryURLParameter(url) {
        var quesIndex=url.index('?'),
            obj={};
        if(quesIndex===-1){
            return obj;
        }
        url=url.substr(quesIndex+1);
        var ary=url.split('&');
        for (var i = 0; i < ary.length; i++) {
              var curAry=ary[1].split('=');
              obj[curAry[0]]=curAry[1];

        }
        return obj;
}


var box=document.getElementById('box');
function (){
    var result='';
    var area='0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDGJKLQWOP';
    for (var i = 0; i < 4; i++) {
        var obj = Math.round(Math.random()*61),
            char=area[ran];
        if(result.toLowerCase().indexOf(char.toLowerCase())>-1){
            i--;
            continue;
        }
        result+=char;

    }
    box.innerHTML=result;
}

function sum(){
    var total=null;
    for (var i = 0; i < arguments.length; i++) {
        var cur=Number(arguments[i]);
        isNaN(cur)?total+=cur:null;

    }
    return total;
}