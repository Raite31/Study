class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        print("汪汪！")

    def eat(self, food):
        print(f"{self.name}正在吃{food}。")


# 创建一个小狗对象
my_dog = Dog("旺财", 3)
# 调用小狗对象的方法
my_dog.bark()
my_dog.eat("牛肉")
