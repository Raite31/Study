// const name = require('./name');
// const age = require('./age');
// console.log('entry文件打印作者信息', name, age);

const {SyncHook} = require("tapable"); // 这是一个同步钩子

// 第一步：实例化钩子函数，可以在这里定义形参
const syncHook = new SyncHook(["author","age"]);

// 第二步：注册事件1
syncHook.tap("监听器1",(name,age)=>{
    console.log("监听器1: ",name,age);
})

// 第二步：注册事件2
syncHook.tap("监听器2",(name)=>{
    console.log("监听器2",name);
})

// 第三步：注"册事件3
syncHook.tap("监听器3",(name)=>{
    console.log("监听器3",name);
})

// 第三步：触发事件，这里传的是实参，会被每一个注册函数接收到
syncHook.call("不要秃头啊","99")



class Compiler{
    constructor(){
        // 内部有很多钩子
        this.hooks = {
            run: new SyncHook(), // 会在编译刚开始的时候触发此钩子
            done: new SyncHook() // 会在编译结束的时候触发此钩子
        }
    }
}