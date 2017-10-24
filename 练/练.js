function sum(total) {
        var total=null;
    for (var i = 0; i < arguments.length; i++) {
        var cur =  Number(arguments[i]);
        isNaN(cur)?total +=cur:null;

    }
    return total;
}






















// for(var i=0;i<oList.length;i++){
//     oList[i].myBg=i;
//     oList[i].onclick= function(){
//         for (var i = 0; i < oList.length; i++) {
//             oList[i].className='';
//             oDiv[i].className='';
//         }
//         this.className=oDiv[this.myBg].className='select';
//     }
// }
