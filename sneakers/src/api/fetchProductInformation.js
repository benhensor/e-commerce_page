import ProductInformation from '../products.json'

const fetchProductInformation = async () => {
  // Simulate network request
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(ProductInformation);
    }, 1000); // Simulate network delay
})
}

export default fetchProductInformation