// 로컬 스토로지 저장
import { setStorageItem } from "./utils.js"

const setupStore = (products) => {
    setStorageItem('store', products);
}

export {
    setupStore
}