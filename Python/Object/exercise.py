def add(n):
    a_array = []
    for i in range(99):
        if i == 0 or i == 1:
            a_array.append(1)
        else:
            num = a_array[i-1]+a_array[i-2]
            a_array.append(num)
    print(a_array[n-1])


add(4)
