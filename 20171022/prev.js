//获取当前元素的上一个哥哥元素节点（兼容所有的浏览器）
//首先获取上一个元素的上一个哥哥节点，判断当前获取的节点是否为元素节点（nodeType==1）如果不是，基于当前获取的节点，找他的上一个哥哥节点。。找几次不知道，一直到找到的节点是元素节点为止，如果在查找的过程中，发现没有上一个哥哥节点，找到头了，则不在继续查找
function prev(curEle){
    var p=curEle.previousSibling;
    while(p && p.nodeType!==1){
        p=p.previousSibling;
    }
    return p;
}
// while (条件){
//     //=>循环体
// }