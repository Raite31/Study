package org.example;

public class Main {
    public static void main(String[] args) {
//        int n1 = 10;
//        float d1 = n1 + 1.1; // 错 n1+1.1 => double
//        double d2 = n1 + 1.1;
//        float d3 = n1 + 1.1f;

//        byte b1 = 10;
//        int n2 = 1;
//        float b2 = n2;
//        byte b3 = n2; // 错 如果是变量赋值，判断类型
//        char c1 = b1; // 错 byte不能自动转换成char

//        byte b2 = 1;
//        byte b3 = 2;
//        short s1 = 1;
////        short s2 = b2 + s1; // 错 b2+s1 => int
//        int s2 = b2 + s1;
////        byte b4 = b2 + b3; // 错 b2+b3 => int
//
//        boolean pass = true;
////        int num100 = pass; // 错 boolean不参与类型自动转换
//
//        byte b4 = 1;
//        short s3 = 100;
//        int num200 = 1;
//        float num300 = 1.1F;
//        double num500 = b4 + s3 + num200 + num300; // float -> double
//
//        int i = (int) 1.9;
//        System.out.println(i);
//
//        int j = 100;
//        byte b1 = (byte) j;
//        System.out.println(b1);

////        int x = (int)10*3.5 + 6*1.5; // 编译错误 double -> int
//        int x = (int) (10 * 3.5 + 6 * 1.5); // (int)44.0 -> 44
//        System.out.println(x);
//
//        char c1 = 100;
//        int m = 100;
////        char c2 = m; // 错误
//        char c3 = (char) m;
//        System.out.println(c3); // 100对应的字符，d字符

        int n1;
        n1 = 13;
        int n2;
        n2 = 17;
        int n3;
        n3 = n1 + n2;
        System.out.println("n3 = " + n3);
        int n4 = 38;
        int n5 = n4 - n3;
        System.out.println("n5 = " + n5);
    }
}