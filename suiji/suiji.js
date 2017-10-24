var box = document.getElementById('box');
function queryCode(){var result='';
var area='0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
for (var i = 0; i < 4; i++) {
    var ran=Math.round(Math.random()*61);
    var char=area[ran];
    if(result.toLowerCase().indexOf(char.toLowerCase())>-1){
        i--;
        continue;
    }
    result+=char;
}
box.innerHTML=result;
}
queryCode();
box.onclick=queryCode;