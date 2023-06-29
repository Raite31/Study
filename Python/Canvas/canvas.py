from turtle import *

screensize(500, 500)


def drawDog(input_color):
    # 【头部轮廓】
    pensize(5)
    home()
    # seth：用于设置海龟（turtle）的朝向或角度
    seth(0)
    # 表示“画笔落下”的意思
    pd()
    color('black')
    # 用于绘制一个圆弧
    circle(20, 80)  # 0
    circle(200, 30)  # 1
    circle(30, 60)  # 2
    circle(200, 29.5)  # 3
    color('black')
    circle(20, 60)  # 4
    circle(-150, 22)  # 5
    circle(-50, 10)  # 6
    circle(50, 70)  # 7

    # 确定鼻头大概位置
    # xcor()用于获取海龟（turtle）当前位置的x坐标值
    x_nose = xcor()
    y_nose = ycor()
    circle(30, 62)  # 8
    circle(200, 15)  # 9

    # 【鼻子】
    pu()
    # 用于将海龟（turtle）移动到指定的位置
    goto(x_nose, y_nose+25)
    seth(90)
    pd()
    # 用于开始填充图形的颜色。
    begin_fill()
    circle(8)
    end_fill()

    # 【眼睛】
    pu()

    goto(x_nose+48, y_nose+55)
    seth(90)
    pd()
    begin_fill()
    circle(8)
    end_fill()

    # 【耳朵】
    pu()
    color('#444444')
    goto(x_nose+100, y_nose+110)
    seth(182)
    pd()
    circle(15, 45)  # 1
    color('black')
    circle(10, 15)  # 2
    circle(90, 70)  # 3
    circle(25, 110)  # 4
    rt(4)
    circle(90, 70)  # 5
    circle(10, 15)  # 6
    color('#444444')
    circle(15, 45)  # 7

    # 【身体】
    pu()
    color(input_color)
    goto(x_nose+90, y_nose-30)
    seth(-130)
    pd()
    begin_fill()
    circle(250, 28)  # 1
    circle(10, 140)  # 2
    circle(-250, 25)  # 3
    circle(-200, 25)  # 4
    circle(-50, 85)  # 5
    circle(8, 145)  # 6
    circle(90, 45)  # 7
    circle(550, 5)  # 8
    end_fill()

    # 【尾巴】
    color('black')
    seth(0)
    circle(60, 85)  # 1
    circle(40, 65)  # 2
    circle(40, 60)  # 3
    lt(150)
    circle(-40, 90)  # 4
    circle(-25, 100)  # 5
    lt(5)
    fd(20)
    circle(10, 60)  # 6

    # 【背部】
    rt(80)
    color(input_color)
    begin_fill()
    circle(200, 35)
    end_fill()

    # 【项圈】
    pensize(20)
    color('#9900FF')
    lt(10)
    circle(-200, 25)  # 5

    # 【前小腿】
    pensize(5)
    pu()
    color(input_color)
    goto(x_nose+100, y_nose-125)
    pd()
    seth(-50)
    fd(25)
    circle(10, 150)
    fd(25)

    # 【后小腿】
    pensize(4)
    pu()
    goto(x_nose+314, y_nose-125)
    pd()
    seth(-95)
    fd(25)
    circle(-5, 150)
    fd(2)
    hideturtle()
    done()
