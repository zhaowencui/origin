// var ary = [12, 13, 23, 14, 16, 11];
// function charu(ary) {
//     var handry=[];
//     handry.push(ary[0]);
//     for (var i = 1; i < ary.length; i++) {
//         for (var j = handry.length-1; j >=0; j--) {
//             if(ary[i]>handry[j]){
//                 handry.splice(j+1,0,ary[i]);
//                 break;
//             }
//            if(j===0){
//                 handry.unshift(ary[i]);
//            }
//         }
//
//     }
//     return handry;
// }
// console.log(charu(ary));
// function insert(ary){
//     //先抓一张牌（一般都抓第一张）
//     var handAry=[];
//     // (存储的是手里已经抓取的牌)
//     handAry.push(ary[0]);
//     //依次循环抓取后面的牌
//     for(var i=1;i<ary.length;i++){
//         var item=ary[i];//本次新抓的这张牌
//         //用新抓的牌和手里现有的牌比较
//         for(var j=handAry.length-1;j>=0;j--){
//             //handAry[j]:当前比较的手里的这张牌
//             //新抓的牌，比当前的牌大，我们把新抓的这张牌放在他的后面
//             if(item>handAry[j]){
//                 handAry.splice(j+1,0,item);
//                 break;
//             }
//             if(j===0){
//                 //新抓的牌是最小的
//                 handAry.unshift(item);
//             }
//         }
//     }
//     return handAry;
// }
// console.log(insert([12,56,86,12]))

// function queryURLparameter(url) {
//     var indexAsk=url.indexOf('?'),
//         obj={};
//     if(indexAsk===-1)return obj;
//     url=url.substr(indexAsk+1);
//     var urlAry=url.split('&');
//     for (var i = 0; i < urlAry.length; i++) {
//
//         var item = urlAry[i],
//             itemAry=item.split('=');
//         obj[itemAry[0]]=itemAry[1];
//
//     }
//     return obj;
// }
// console.log(queryURLparameter('https://s.click.tmall.com/g?et=M7DH%2BiIjzj4ffzzzk%2BqpbLy0aQXHqNo9&tar=https%3A%2F%2Fwww.tmall.com%2F%3Fali_trackid%3D2%3Amm_15144495_0_0%3A1508573535_239_1842207430&op=1'));
var codeBox=document.getElementById('codeBox');
function queryCode() {
    var range='0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP';
    var result='';
    for (var i = 1; i <= 4; i++) {
        var ran=Math.round(Math.random()*61);
        result+=range[ran];
    }
    codeBox.innerHTML=result;
}
queryCode();
codeBox.onclick=queryCode;//->此处不能加小括号，因为点击的时候才执行，绑定的时候不执行