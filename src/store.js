// 로컬 스토로지 저장
import { getStorageItem, setStorageItem } from "./utils.js"
let store = getStorageItem('store');

const setupStore = (products) => {
    setStorageItem('store', products);
}

//주어진 id와 일치하는 제품을 찾아 반환
const findProduct = (id) => {
    const product = store.find((product) => product.id === id);
    return product;
}

export {
    store,
    setupStore,
    findProduct
}