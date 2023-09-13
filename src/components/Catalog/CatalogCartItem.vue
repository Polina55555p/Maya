<template>
    <div class="cart-item row justify-content-between align-items-center mb-4">
        <div class="col-6 d-flex align-items-center">
            <img :src=" require('@/assets/img/catalog/' + cart_item_data.image[0])" alt="">
            <div class="ps-5">
                <div class="text-description">{{ cart_item_data.name }}</div>
                <div v-if="cart_item_data.colorSelect != 'one size'" class="text-description pb-2">Размер: <span class="text-uppercase">{{ cart_item_data.sizeSelect }}</span></div>
                <div v-else class="text-description pb-2">Размер: <span> {{cart_item_data.sizeSelect}}</span></div>
                <div v-if="cart_item_data.colorSelect != 'one color'" class="text-description pb-3">Цвет:  <span class='product_color ms-3' :style="`background: ${cart_item_data.colorSelect}`"></span></div>
                <div v-else class="text-description pb-3">Цвет:  <span> {{cart_item_data.colorSelect}}</span></div>
                <div class="">{{ cart_item_data.price }} руб.</div>
            </div>
            
        </div>
        
        <div class="col-1 cart-guantity">
            <span @click='decrementItem' class="btn-quantity me-3">-</span>
            <span>{{ cart_item_data.quantity }}</span>
            
            <span @click='incrementItem' class="btn-quantity ms-3">+</span>
        </div>
        
        <div class="col-2">
            <my-button 
            class="btn-pink"
            @click="deleteFromCart">
            Удалить</my-button>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        cart_item_data: {
            type: Object,
            default () {
                return {}
            }
        },
    },
    
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        },
        decrementItem() {
            this.$emit('decrement')
        },
        incrementItem() {
            this.$emit('increment')
        }
    },
    
}
</script>

<style scoped lang="scss">
.cart-item { 
    img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 0.5rem;
    }
    
}
.product_color {
    
    padding: 0.35rem 1rem;
    border-radius: 0.5rem;
}
.cart-guantity {
    font-size: 1.5rem;
}

.btn-quantity {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0 0.5rem;
    border: 1px solid $pink;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
        background-color: $pink;
        color: $lite-text;
    }
}
</style>