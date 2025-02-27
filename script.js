// 페이지 로드 시 초기화
import fetchProducts from "./src/fetchProducts.js";
import { setupStore } from "./src/store.js";
import display from "./src/displayProducts.js";
import { getElement } from "./src/utils.js";

import './src/toggleSidebar.js';

const init = async () => {
    const products = await fetchProducts();

    if (products) {
        // 로컬스토리지에 저장
        setupStore(products);
    }

    // 보여줄 데이터만 배열에 담기
    const featured = products.filter((product) => product.featured === true);
    display(featured, getElement('.featured-center'))
}

window.addEventListener('DOMContentLoaded', init);