vocab = ["cat", "dog", "apple"]
word_to_index = {
    "cat": 0,
    "dog": 1,
    "apple": 2
}

embedding_matrix = [
    [0.2, -0.1,  0.4,  0.9],   # cat
    [0.8,  0.3, -0.2,  0.1],   # dog
    [-0.5, 0.7,  0.6, -0.4]    # apple
]

def get_embedding(token):
    index = word_to_index[token]      # convert word → index
    return embedding_matrix[index]    # return that row

def embedding(tokens):
    return[get_embedding(token)for token in tokens]
    

print(get_embedding('dog','cat'))
# embedding note (1)

# embedding note (2)

# embedding note (3)

# embedding note (4)

# embedding note (5)

# embedding note (6)

# embedding note (7)
