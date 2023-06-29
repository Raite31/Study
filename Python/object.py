import types


class Cat:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

    def introduce(self):
        print(
            f"大家好，我的名字叫{self.name}，今年{self.age}岁，我是{self.gender}生。")

    def meow(self):
        print("喵喵~~~~~~~~")

    def run(self):
        print(f"{self.name}正在奔跑。")

    def eat(self, food):
        print(f"{self.name}正在吃{food}。")


# 创建一个小猫对象，它叫小花
my_cat = Cat("小花", 3, '男')
# 调用小猫对象的方法
my_cat.introduce()
my_cat.meow()
my_cat.run()
my_cat.eat("牛肉")

my_cat.color = "我的颜色是橘黄色"
print(my_cat.color)

my_cat.color = "我的颜色是白色"
print(my_cat.color)


def jump(self):
    print(f"{self.name}我啊，会蹦蹦跳跳的")


my_cat.jump = types.MethodType(jump, my_cat)
my_cat.jump()


print('\n')

# 再创建一个小猫对象，它叫小黑
your_cat = Cat("小黑", 3, '女')
# 调用小猫对象的方法
your_cat.introduce()
your_cat.meow()
your_cat.run()
your_cat.eat("鸡肉冻干")
