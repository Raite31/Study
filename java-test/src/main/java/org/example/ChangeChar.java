package org.example;

public class ChangeChar {
    public static void main(String[] args) {
        //    \t：一个制表位，实现对齐的功能
        System.out.println("北京\t天津\t上海");
//    \n：换行符
        System.out.println("你好啊\n我叫李嘉胜");
//    \\：一个\
        System.out.println("你好你好\\");
//    \"：一个"
        System.out.println("你好你好3\"");
//    \'： 一个'
        System.out.println("你好你好2\'");
//    \r：一个回车
//        解读
//        1. 输出 我是
//        2. \r表示回车 好像不同版本的jdk不同效果
//        3. 学习的时候，视频里回车就是在当前行，把光标飞回最前面，然后继续输入后面的字符覆盖前面的字符，也就会输出为“暗弈啦啦啦”
//        4. 但是我这里只输出“暗弈”
        System.out.println("我是啦啦啦\r暗弈");
    }
}
