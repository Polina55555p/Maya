<template>
    <section class="cart-view">
        <div class="container-xxl">
            <div class="row">
                <div class="col-6 position-relative">
                    <swiper
                    class="top-swiper pb-4 "
                    :style="{
                        '--swiper-navigation-color': '#000',
                        '--swiper-pagination-color': '#000'
                    }"
                    :modules="modules"
                    :space-between="10"
                    :navigation="{
                        prevEl: prev,
                        nextEl: next,
                        }"
                    :thumbs="{ swiper: thumbsSwiper }"
                    >
                        <swiper-slide v-for="item in product.image">
                            <img  :src=" require('@/assets/img/catalog/' + item)" alt="">
                        </swiper-slide>
                    </swiper>
                    <swiper
                    class="thumbs-swiper"
                    :modules="modules"
                    :space-between="10"
                    :slides-per-view="4"
                    :watch-slides-progress="true"
                    :prevent-clicks="false"
                    :prevent-clicks-propagation="false"
                    watch-slides-progress
                    @swiper="setThumbsSwiper"
                    >
                        <swiper-slide v-for="item in product.image">
                            <img  :src=" require('@/assets/img/catalog/' + item)" alt="">
                        </swiper-slide>
                    </swiper>
                    <div ref="prev" class="swiper-button-prev"></div>
                    <div ref="next" class="swiper-button-next"></div>
                </div>
                <div class="col-6 d-flex flex-column justify-content-between">
                    <div class="">
                        <h3 class="pb-4">{{ product.name }}</h3>
                        <div class="text-description">Описание товара:</div>
                        <p v-if="product.description"> {{ product.description }}</p>
                        <p v-else> Описание для данного товара отсутствует</p>
                        <div class="text-description">Состав:</div>
                        <p v-if="product.compound"> {{ product.compound }}</p>
                        <p v-else> Описание состава для данного товара отсутствует</p>
                        <div class="text-description pb-3">Размер:</div>
                        <div class="size pb-3">
                            <div 
                            class="form-check form-check-inline"
                            v-for="item in product.size" 
                            :key="product.id">
                                <input 
                                v-model="sizeSelect"
                                class="form-check-input" 
                                type="radio" 
                                :id="item" 
                                name="inlineRadioOptions"
                                :value="item">
                                <label class="form-check-label" :for="item">{{ item }}</label>
                            </div>
                            
                        </div>
                        <div class="text-description pb-3">Цвет:</div>
                        <div class="color">
                            <div 
                            v-if="product.color"
                            class="form-check form-check-inline"
                            v-for="item in product.color" 
                            :key="product.id">
                                <input 
                                v-model="colorSelect"
                                :style="`background: ${item}`" 
                                class="form-check-input" 
                                type="radio" 
                                :id="item" 
                                name="inlineRadioColor"
                                :value="item">
                            </div>
                            <div v-else> Товар только в одном цвете</div>
                        </div>
                        <div class="pt-3"><strong>{{ product.price }}  руб.</strong></div>
                    </div>
                    <div >
                        <my-button 
                        @click="addToCart(product)"
                         class="btn-pink mb-3"
                         :class="{ disabledButton: !inStock }"
                         :disabled="!inStock" 
                         title="Выберите цвет и размер">
                         Добавить в корзину</my-button>
                         <my-button 
                         class="btn-pink ms-5"
                         @click="$router.push('/cart')">
                         Перейти в корзину</my-button>
                    </div>
                    
                    

                </div>
            </div>
            
        </div>
    </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
  // import required modules
import { Pagination, Navigation, Thumbs } from 'swiper';
import { mapGetters, mapActions } from 'vuex';
import { ref } from 'vue';
import MyButton from '@/components/UI/MyButton.vue';
import CatalogCart from '@/components/Catalog/CatalogCart.vue';

export default {
    components: {
        Swiper,
        SwiperSlide,
        MyButton,
        CatalogCart
        
      },
      setup() {
        const thumbsSwiper = ref(null);
        const prev = ref(null);
        const next = ref(null);
        const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
      };
        return {
          modules: [Pagination, Navigation, Thumbs],
          thumbsSwiper,
        setThumbsSwiper,
        prev,
        next,
        }
      },
    
    methods: { 
      ...mapActions(['GET_PRODUCTS_FROM_API',
    'ADD_TO_CART']),

      addToCart(data) {
        data.sizeSelect = this.sizeSelect;
        data.colorSelect = this.colorSelect;
        this.ADD_TO_CART(data);
        

      },
    },
    data() {
        return {
            sizeSelect: 'one size',
            colorSelect: 'one color'
        }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART'
      ]),
      inStock() {
            if (this.sizeSelect != 'one size' && this.colorSelect != 'one color')
                return true
            if (this.sizeSelect == 'one size' && this.colorSelect != 'one color')
                return true
            if (this.sizeSelect != 'one size' && this.colorSelect == 'one color' && !this.product.color)
                return true
        
      },
      product() {
        
        let result = {};
        let vm = this;
        this.PRODUCTS?.map(item => {
            if (item.article === vm.$route.query.product) {
                result = item;
                
            }
        })
        return result
      },

      
    }, 
    
    mounted() {
     this.GET_PRODUCTS_FROM_API()
     //this.loaded = true;
    },
  
    
}
</script>

<style scoped lang="scss">
.swiper-slide.swiper-slide-active {
    display: flex;
    justify-content: center;
    top: 0;

}

.thumbs-swiper {
    max-width: 480px;
    img {
        width: 100px;
        height: 100px;
        border-radius: 10px;
        object-fit: cover;
        cursor: pointer;
    }
}
.top-swiper {
    img {
        height: 430px;
        border-radius: 10px;
    }
    
}
    
.swiper-button-prev, .swiper-button-next {
    position: absolute;
    top: 90%;
    color: $dark-text;
    &::after {
        font-size: 1.5rem;
    }
}
.swiper-button-prev {
    margin-left: 2rem;
}
.swiper-button-next {
    margin-right: 2rem;
}

.form-check-input:checked[type=radio] {
    background-image: url('@/assets/img/catalog/check.svg');
    background-color: #fff;
    background-size: 70%;
    border: 1px solid $pink;
}
.form-check-input:checked {
    background-color: $lite-text;
}
.form-check-input:focus {
    border-color: $dark-text;
    outline: 0;
    box-shadow: none;
}
.form-check-input {
    width: 2rem;
    height: 2rem;
    margin-top: 0;
    vertical-align: center;
    border: none;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0.5rem;
    margin-right: 0.75rem;
    cursor: pointer;

}
.size {
    .form-check-input {
        background-color: $lite-blue;
    }
    label {
        text-transform: uppercase;
    }

}
.color {
    .form-check-input:checked[type=radio] {
    border: 2px solid $pink;

}
}
.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}




 


</style>
/* */