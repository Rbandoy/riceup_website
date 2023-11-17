import {httpClientRequest} from "../../helpers/httpClientRequest" 
export const ProductsService = {
  async fetchProduct() {
    return await httpClientRequest.get("https://secure.riceup.store/ers/api/v1/products/");
  },
  async fetchProductById(itemId) {
    return await httpClientRequest.get(`https://secure.riceup.store/ers/api/v1/products/${itemId}`); 
  },
} 