import math

# print("Ljs 你真帅")
# price = 10
# name = 'Mosh'
# is_published = True  # 大小写敏感
# print('price', print)
# print(name)

# # ===========================================病人案例
# name = input('What is your name? ', )
# favorite_color = input('What is your favorite color? ')
# print(name + ' likes ' + favorite_color)

# 计算年龄
# birth_year = input('Birth year? ')
# age = 2023 - int(birth_year)
# print(age)

# ===========================================数组
# course = '''Python's Course for Beginners
# dadajdia1
# 的玩家打击'''
# print(course)
# print(course[0])
# print(course[-1])
# print(course[0:3])  # 取左不取右
# print(course[3:])  # 取右不取左
# print(course[:5])  # 取左取右
# print(course[:])  # 复制一整个字符串

# name = 'Jennifrt'
# print(name[1:-1])  # 去左去右

# ===========================================字符串拼接
# first = 'John'
# last = 'Smith'
# message = first + ' [' + last + '] is a coder'
# msg = f'{first} [{last}] is a coder'
# print(message)
# print(msg)

# ===========================================字符串方法
# course = 'Python for Beginners'
# print(len(course))
# print(course.upper())
# print(course.lower())
# print(course)

# print(course.find('P'))  # 区分大小写
# print(course.replace('P', 'J'))

# print('Python' in course)

# ===========================================运算符
# print(10 % 3)
# print(10 ** 3)
# x = 10
# x = x+3
# x += 3

# print(x)

# ===========================================运算符优先级
# x = 10 + 3*2
# print(x)
# # 幂 乘除 加减
# x = 10 + 3**2
# print(x)

# ===========================================数学函数
# x = 2.9
# print(round(x))
# print(abs(-2.9))

# print(math.ceil(2.9))
# print(math.floor(2.9))

# ===========================================if语句
# is_hot = False
# is_cold = True

# if is_hot:
#     print('hot')
#     print("Dring some water")
# elif is_cold:
#     print("Cold")
# else:
#     print('Enjoy your day')
# print('Enjoy your day')

# ===========================================买房游戏
# price = 1000000
# has_good_credit = True

# if has_good_credit:
#     down_payment = price * 0.1
# else:
#     down_payment = price * 0.2
# print(f"Down payment: ${down_payment}")

# ===========================================逻辑运算符
'''and/ or/ not/'''
# has_high_incom = True
# has_good_credit = True

# if has_high_incom and has_good_credit:
#     print("Eligible for loan")

# ===========================================比较运算符
'''<, <=, >, >='''

# ===========================================重量转换器程序
# Weight = input('你多重？')
# Unit = input('公斤还是斤？ ')

# if Unit == '公斤':
#     print(f'你的体重换算成斤就是 {int(Weight)*2}')
# else:
#     print(f'你的体重换算成公斤就是 {int(Weight)/2}')

# ===========================================while循环
# i = 1
# while i <= 5:
#     print('*' * i)
#     i += 1
# print('Done')

# ===========================================Car Game
# while True:
#     comman = input('> ').lower()
#     if (comman == 'help'):
#         print('''
# start - to start the car
# stop - to stop the car
# quit - to exit
#               ''')
#     elif (comman == 'start'):
#         print('Car started...Ready to go!')
#     elif (comman == 'stop'):
#         print('Car stopped...')
#     elif (comman == 'quit'):
#         break
#     else:
#         print('Sorry , I don\'t understand')

#  ===========================================for循环
# for item in 'Python':
#     print(item)

# for item in range(10):
#     print(item)

# for item in range(10, 20, 2):
#     print(item, end=" ")

# for x in range(4):
#     for y in range(3):
#         print(f'({x}, {y})', end=" ")

# numbers = [5, 2, 5, 2, 2]
# for item in numbers:
#     print(item * 'X')

# ===========================================列表
# names = ['John', 'Mosh', 'Jennifrt', 'Mary']
# print(names[2])

# ===========================================找最大数
# numbers = [5, 2, 5, 2, 2]
# # print(max(numbers))
# max = numbers[0]
# for i in numbers:
#     if (i > max):x
#         max = i
# print(max)

# ===========================================二维列表
# matrix = [
#     [1, 2, 3],
#     [4, 5, 6],
#     [7, 8, 9]
# ]
# for row in matrix:
#     for item in row:
#         print(item, end=" ")

# ===========================================列表方法 insert/ remove/ append/ pop/ clear/ index/ in/ count/ sort/ reverse/ copy
# numbers = [5, 2, 5, 2, 2]
# numbers.insert(0, 10)
# print(numbers)


# ===========================================删除重复列
# numbers = [5, 2, 5, 2, 2, 2, 3, 65, 25, 234,
#            234, 354, 6, 5, 4, 4, 3, 3, 2, 4, 2]
# uniques = []
# numbers.sort()
# print(numbers)
# for i in numbers:
#     if (i not in uniques):
#         uniques.append(i)
# print(uniques)

# ===========================================元组，不可修改不可删
numbers = (5, 2, 5, 2, 2)
