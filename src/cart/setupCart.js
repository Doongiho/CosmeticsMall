import { findProduct } from "../store.js";
import { formatPrice, getElement, getStorageItem, setStorageItem } from "../utils.js";
import addToCartDOM from "./addToCartDom.js";
import { openCart } from "./toggleCart.js";

const cartItemsEl = getElement('.cart-items');

let cart = getStorageItem('cart');

export const addToCart = (id) => {
    let item = cart.find((cartItem) => cartItem.id === id);

    // 해당 아이템이 없을 떄
    if (!item) {
        let product = findProduct(id);
        product = { ...product, amount: 1 };
        cart = [...cart, product];

        // item을 Dom 에 추가하기
        addToCartDOM(product);

    }
    // 이미 해당 아이템이 장바구니에 있을 때
    else {
        const amount = increaseAmount(id);
        const items = [...cartItemsEl.querySelectorAll('.cart-item-amount')];
        const itemEl = items.find((value) => value.dataset.id === id);
        itemEl.textContent = amount;
    }
}
