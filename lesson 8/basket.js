'use strict';

document.querySelector('.cartIcon').addEventListener('click', e => {
    document.querySelector('.basket').classList.toggle('hidden');
})

const basket = {};

function addToCart(itemData) {
    if(itemData.id in basket){
        basket[itemData.id].count += 1;
    }
    if(!(itemData.id in basket)){
         basket[itemData.id]=itemData
    }
    document.querySelector('.basketBody').innerHTML = "";
    let totalPrice = 0;
    let totalCount = 0;
    for(let i in basket) {
        const item = ` 
        <div class="basketRow">
            <div>${basket[i].name}</div>
            <div>${basket[i].count}</div>
            <div>$${basket[i].price}.00</div>
            <div>$${basket[i].price*basket[i].count}.00</div>
        </div>`;
        totalCount += basket[i].count;
        totalPrice += basket[i].price*basket[i].count;
        document.querySelector('.basketBody').innerHTML += item;
     }
     document.querySelector('.basketTotalValue').innerHTML = totalPrice;
     document.querySelector('.basketTotalCount').innerHTML = totalCount;
}

document.querySelector('.featuredItems').addEventListener('click', e => {
    if(!e.target.classList.contains('addToCart')){
        return;
    }
    const itemData = JSON.parse(e.target.closest('.featuredItem').dataset.item);
    itemData.count = 1;
    addToCart(itemData);
    
})