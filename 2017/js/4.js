var obj = {};
obj.name = 'zxt';//=> 增加一个叫做NAME的属性，属性值是：‘zxt’
obj['age'] = 28;//=> 增加一个叫做age的属性，属性值是：28

obj['age'] = 29;//=>修改age对应的属性值:一个对象的属性名是不能重复的（唯一性），之前没有这个属性，我们的操作是增
// 加操作，之前有这个值，当前的操作就是修改现有属性名的属性值
obj.age = 30;

obj.age = null; //=>假删除：把属性值设置为空，但是属性名是存在的;获取age的属性值结果是null

delete obj.age;//=>真删除：把属性名和属性值彻底从对象中移除掉;获取age的属性值结果是undefined
//=>获取一个对象的某一个属性名对应的属性值，如果当前这个属性在对象中并不存在，获取的结果是undefined

console.log(obj);
console.log(obj.name);
console.log(obj['name']);
var flag=confirm('确定要删除吗');


