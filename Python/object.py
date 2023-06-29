class Cat:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

    def introduce(self):
        print(f"大家好，我的名字叫{self.name}，今年{self.age}岁，我是{self.gender}生")

    def meow(self):
        print("喵喵~~~~~~~~")

    def run(self):
        print(f"{self.name}正在奔跑。")

    def eat(self, food):
        print(f"{self.name}正在吃{food}。")


# 创建一个小猫对象
my_cat = Cat("小花", 3, '男')
# 调用小猫对象的方法
my_cat.introduce()
my_cat.meow()
my_cat.run()
my_cat.eat("牛肉")
