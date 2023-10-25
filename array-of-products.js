function arrayOfProducts(array) {
    const productsArray = [];
    let product = 1;
    
    // Calculate the product of all elements to the left of the current index
    for (let i = 0; i < array.length; i++) {
        productsArray[i] = product;
        product *= array[i];
    }
    
    // Calculate the product of all elements to the right of the current index
    product = 1;
    for (let i = array.length - 1; i >= 0; i--) {
        productsArray[i] *= product;
        product *= array[i];
    }
    
    return productsArray;
}

console.log(arrayOfProducts([5, 1, 4, 2])); // Output: [8, 40, 10, 20]


