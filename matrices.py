M = [
  [1, 2],
  [3, 4]
]

V = [5, 6]


def matrix_vector(m,v):
    A=[]
    for row in m:
        dot = sum(a*b for a,b in zip(row,v))
        A.append(dot)
        
    return  A        
        
print (matrix_vector(M,V))




A = [
  [1, 2, 3],
  [4, 5, 6]
]   # shape (2 × 3)

B = [
  [7,  8],
  [9, 10],
  [11,12]
]   # shape (3 × 2)

def matrix_matrix(A, B):
    result =[]
    
    num_cols_B=len(B[0])

    for row in A:
        result_row=[]

        for j in range (num_cols_B):
            column = [b_row[j] for b_row in B]
            dot= sum(a*b for a,b in zip(row,column))
            result_row.append(dot)

        result.append(result_row)

    return result

print(matrix_matrix(A,B))

    







