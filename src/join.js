const _ = require('lodash');

const log = _.join(['a', 'b', 'c'], '~');;
console.log(log); // => 'a~b~c'

// 实现join
const myJoin = () => {
    // 编写逻辑
}

const myJoinLog = myJoin(['a', 'b', 'c'], '~');;
console.log(myJoinLog); // => 'a~b~c'