<template>
    <section class="cart">
        <div class="container-xxl">
            <div class="row pb-5">
                <h2 class=" text-start">Корзина</h2>
            </div>
            <div>
                <div v-if="CART.length === 0" class="row d-flex justify-content-center pt-5">
                    <div class="col-3 cart-image">
                        <p class="text-center">Ваша корзина пуста</p>
                        <img src="../assets/img/catalog/cat.png" alt="">
                    </div>
                    
                </div>
                <div v-else>
                    <catalog-cart :cart_data="CART"/>
                    <div class="cart-total row justify-content-end">
                        <p class="col-3 text-end pe-5 total-text"><strong>Итого: </strong><span>{{cartTotalCost}} <span> руб</span></span></p>
                    </div>
                    <div class="row justify-content-end">
                        <div class="col-3 text-end pe-5">
                            <my-button class="btn-small">Оформить заказ</my-button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CatalogCart from '@/components/Catalog/CatalogCart.vue';
import MyButton from '@/components/UI/MyButton.vue';

export default {
    components: { CatalogCart, MyButton },
    computed: {
      ...mapGetters([
        'CART'
      ]),
     

      cartTotalCost () {
        let cost = [];
        for (let item of this.CART) {
            cost.push(item.price*item.quantity)
        }
        cost = cost.reduce(function(sum, el) {
            return sum+el
        })
        return cost
      }
    }
}
</script>
<style scoped lang="scss">
.cart-image {
    img {
        width: 300px;
    }
}
.total-text {
    font-size: 1.5rem;
}
</style>