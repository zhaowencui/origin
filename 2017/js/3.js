console.log(isNaN(NaN));// =>true
console.log(isNaN(1));//=>false
console.log(isNaN('1'));//=.false 他是有效数字：当浏览器检测的值不是number时，首先会默认的把值转换为number类型，然后再验证是否是有效数字 '1'=>1  isNaN(1)=>false
// 布尔类型 true-》1  false->0
// null->0   undefined->NaN->true