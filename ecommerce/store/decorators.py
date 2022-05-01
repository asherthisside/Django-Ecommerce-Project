import time
# def progress(func):
#     def internal():
#         print("Starting the execution in 3 ... 2 ... 1 ...")
#         func()
#         print("Execution over")

#     return internal

# @progress


def timer(func):
    def inner(a):
        old_time = time.time()
        func(a)
        new_time = time.time()
        print(f"Time Taken : {round(new_time - old_time, 5)} seconds")
    return inner

@timer
def intro(a):
    print("My name is abcdefghi")

intro('a')

@timer
def squares(n):
    for i in range(1, n + 1):
        print(f"The square of {i} is {i ** 2}")

# squares(20)