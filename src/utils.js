// DB url 주소
const productsUrl = 'https://67bd5631321b883e790c0e47.mockapi.io/products'

// 로컬 스토리지 저장
const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
}

// 가격을 USD 형식
const formatPrice = (price) => {
    let formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format((price / 100).toFixed(2));
    return formattedPrice
}

// 보여지는 요소 및 오류 처리
const getElement = (selection) => {
    const element = document.querySelector(selection);
    if(element) return element;
    throw new Error('해당 요소가 존재하지 않습니다.');
}

// 카트에 있는 리스트들도 로컬스토리지 저장
const getStorageItem = (key) => {
    let storageItem = localStorage.getItem(key);
    if(storageItem) {
       storageItem = JSON.parse(localStorage.getItem(key));
    } else {
        storageItem = [];
    }
    return storageItem;
}

export{
    productsUrl,
    setStorageItem,
    formatPrice,
    getElement,
    getStorageItem
}