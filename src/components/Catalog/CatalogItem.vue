<template>
    <div class="catalog-item mt-5 col-4">
        <div class="item-content text-center d-flex flex-column justify-content-between h-100">
            <div>
                <img :src=" require('@/assets/img/catalog/' + productData.image[0])"  alt='image'>
                <div class="item-title"> {{ productData.name }}</div>
            </div>
            <div>
                <div class="item-price">{{ productData.price }}р</div>
                <my-button 
                @click="buttonClick" 
            
                class="btn-pink"
                >подробнее</my-button>
            </div>
            
        </div>
    </div>

</template>
<script>
export default {
    name: 'catalog-item',
    props: {
        productData: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        buttonClick () {
            this.$router.push({name: 'product', query: {'product': this.productData.article}})
        }
    }
}
</script>

<style scoped lang="scss">
.catalog-item {
    .item-content {
        img {
            border-radius: 10px;
            object-fit: cover;
            width: 277px;
            height: 400px;
        }
        .btn-pink {
            padding: 0.75rem 1.5rem;
        }
        .item-title {
            font-size: 1.25rem;
            font-weight: 500;
        }
        .item-price {
            font-size: 1.25rem;
            font-weight: 600;
        }
        &:hover {
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }

    }
    
}

</style>


/*$router.push(`/catalog/${productData.article }`) */