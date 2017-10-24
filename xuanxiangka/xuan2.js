var ary=[1,2,5,2,1,8,7,9,5,4];
// function paixu(ary) {
//     for (var i = 0; i < ary.length-1; i++) {
//         for (var j = 0; j < ary.length-1-i; j++) {
//             if(ary[j]>ary[j+1]){
//                 var temp=ary[j+1];
//                 ary[j+1]=ary[j];
//                 ary[j]=temp;
//             }
//
//         }
//
//     }
//     return ary;
// }
//
// console.log(paixu(ary));
// function quick(ary) {
//     if(ary.length<=1){
//         return ary;
//     }
//     var centerl=Math.floor(ary.length/2),
//         centerValu=ary.splice(centerl,1)[0];
//     var celeft=[];
//     var cright=[];
//     for (var i = 0; i < ary.length; i++) {
//         var cur=ary[i];
//
//         cur<centerValu?celeft.push(cur):cright.push(cur);
//
//     }
//     return quick(celeft).concat(centerValu,quick(cright));
// }
//
// console.log(quick(ary));
function charu(ary) {
    var handary=[];
    handary.push(ary[0]);
    for (var i = 1; i < ary.length; i++) {
        var obj = ary[i];
        for (var j = handary.length-1; j>=0; j--) {
            if(obj>handary[j]){
                handary.splice(j+1,0,obj);
                break;
            }
            if(j===0){
                handary.unshift(obj);
            }

        }

    }
    return handary;
}

console.log(charu(ary));