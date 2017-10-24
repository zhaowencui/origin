var array=[1,2,5,,8,9,7,4,1,2],
    obj={};
for (var i = 0; i < array.length; i++) {
    var cur=array[i];
    if(typeof obj[cur]!=='undefined'){
        array.splice(i,1,array[array.length-1]);
        array.length-1;
        i--;
        continue;
    }
    obj[cur]=cur;
}