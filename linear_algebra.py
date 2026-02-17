import math

def addvectors(a,b):
    assert len(a)==len(b)
    return[a+b for a,b  in zip(a,b)]

a=[1,3,4]
b=[2,6,3]

'''print(addvectors(a,b))

def dot_product(a,b):
    assert len(a)==len(b)
    return sum(float(a)*float(b) for a,b in zip (a,b))



    
print (dot_product(a,b))
assert dot_product([1, 2, 3], [4, 5, 6]) == 32
assert dot_product([2, -1], [3, 4]) == 2
assert dot_product([0, 0], [1, 2]) == 0



"""def magnitude(v):
    return sum(x * x for x in (v) )**0.5

def dot_product(a,b):
    assert len(a)==len(b)
    return sum(a*b for a,b in zip(a,b))

def cosine_similarity(a, b):
    assert len(a) == len(b)

    mag_a = magnitude(a)
    mag_b = magnitude(b)

    assert mag_a != 0 and mag_b != 0

    return dot_product(a, b) / (mag_a * mag_b)


def cosine_distance(a,b):
    assert len(a)==len(b)

    return(1-cosine_similarity(a,b))
    

print(cosine_distance([1, 2, 3], [2, 4, 6]))

print(cosine_similarity([1, 2, 3], [2, 4, 6]))  # should be 1.0
print(cosine_similarity([1, 0], [0, 1]))        # should be 0.0
print(cosine_similarity([1, 0], [-1, 0]))       # should be -1.0"""



def euclidean_distance(a,b):
    assert len(a) == len(b)
    return math.sqrt(sum(float(x-y)**2 for x,y in zip(a,b)))

print(euclidean_distance([1, 2, 3], [2, 4, 6]))



assert round(euclidean_distance([0,0], [3,4]), 5) == 5.0
assert round(euclidean_distance([1,2], [10,20]), 5) > 20
#assert round(cosine_similarity([1,2], [10,20]), 5) == 1.0'''



def magnitude(v):
    return math.sqrt(sum(x**2 for x in v))

def dot(a,b):
    return sum(x*y for x,y in zip(a,b))

def cosine_simmilarity(a,b):
    mag_a = magnitude(a)
    mab_b = magnitude(b)

    return(dot(a,b)/mag_a*mab_b)

print(cosine_simmilarity(a,b))










