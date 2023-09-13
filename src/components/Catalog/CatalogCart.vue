<template>
    <div class="catalog-cart">
        <catalog-cart-item v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"/>
    </div>
</template>

<script>
import CatalogCartItem from './CatalogCartItem.vue';
import { mapActions } from 'vuex';
export default {
    components: {
        CatalogCartItem
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        },
        
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_QUALITY',
            'DECREMENT_QUALITY']),

        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        },
        decrement(index) {
            this.DECREMENT_QUALITY(index)
        },
        increment(index) {
            this.INCREMENT_QUALITY(index)
        },
    }
}
</script>