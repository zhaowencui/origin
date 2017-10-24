var ary = [12, 13, 23, 14, 16, 11];
// /*
// *bubble:冒泡排序
// * @parameter
// *     ary: [array]需要实现排序的数组
// *  @return
// *    [array]排序后的数组（升序）
// *  by team on   2017/10/19
// */
// function bubble(ary) {
//     // 外层循环控制的是比较的轮数
//     for (var i = 0; i < ary.length - 1; i++) {
//         //里层循环控制的每一轮比较的次数
//         for (var j = 0; j < ary.length - 1 - i; j++) {

//             if (ary[j] > ary[j + 1]) {
//                 var temp = ary[j];
//                 ary[j] = ary[j + 1];
//                 ary[j + 1] = temp;
//             }
//         }
//
//     }
//     return ary;
// }
//
// console.log(bubble(ary))
// var ary = [12, 13, 23, 14, 16, 11];
// function bubble(ary) {
//     for (var i = 0; i < ary.length - 1; i++) {
//         for (var j = 0; j < ary.length - 1 - i; j++) {
//             if (ary[j] > ary[j + 1]) {
//                 var temp = ary[j];
//                 ary[j] = ary[j + 1];
//                 ary[j + 1] = temp;
//             }
//         }
//     }
//     return ary;
// }
// console.log(bubble(ary))
//
// function quick() {
//     if(ary.length<=1){
//         return ary;
//     }
//     var centerIndex=Math.floor(arry.length/2),
//         centerValue=ary.splice(centerIndex,1)[0];
//     var cenleft=[];
//     var cenright=[];
//     for (var i = 0; i < ary.length; i++) {
//         var cur = ary[i];
//         cur<centerValue?cenleft.push(cur):cenright.push(cur);
//     }
//     return quick(cenleft).concat(centerValue,quick(cenright));
// }


function insert() {
    var handary=[];
    handary.push(ary[0]);
    for (var i = 1; i < ary.length; i++) {
        var item = ary[i];
        for (var j = handary.length-1; j >=0; j++) {
            if(ary[i]>handary[j]){
                handary.splice(j+1,0,ary[i]);
            }
            if(j===0){
                handary.unshift(ary[i]);
            }
        }
        
    }
    return handary;
}
console.log(insert(ary));