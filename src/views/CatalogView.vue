<template>
    <section class="catalog">
      <div class="container-xxl">
        <div class="row align-items-center">
          <div class="col-3">
            <h2>каталог</h2>
          </div>
          <div class="col-3 offset-3">
            <my-search v-model="searchQuery"/>
          </div>
          <div class="col-3">
            <my-sort v-model="selectedSort" :options="sortOptions"/>
          </div>
        </div>
        <div class="row">
          <div class="col-3 mt-5">
            <h4 class="pb-2 choiseLink" @click="choiceTypeTab('Бандажи')">Бандажи</h4>
            <h4 class="pb-2 choiseLink" @click="choiceTypeTab('Бюстгалтеры')">Бюстгалтеры</h4>
            <h4 class="choiseLink" @click="choiceTypeTab('Трусики')">Трусики</h4>
            <h4 class="choiseLink" @click="choiceTypeTab('')">Все</h4>
          </div>
          <div class="col-9">
            <div class="row row-cols-3">
              <catalog-list
              :productsList=PRODUCTS
              :choise-link="choiceType"
              v-if="!isProductLoading"/>
              <div v-else>
                <svg class="spinner" viewBox="0 0 50 50">
                  <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script>
  import {sortList} from '@/GlobalData/MenuLinks';
  import CatalogList from '@/components/Catalog/CatalogList.vue';

  import { mapActions, mapGetters } from 'vuex';

  export default {
    components: {
      CatalogList
    },
    data() {
      return {
        minPrice:0,
        maxPrice:6000,
        selectedSort: '',
        searchQuery: '',
        sortOptions: sortList,
        isProductLoading: false,
        choiceType: ''
      
      }
    },

    methods: { 
      ...mapActions(['GET_PRODUCTS_FROM_API']),
      choiceTypeTab(string) {
        this.choiceType = string
      }
    },

    
    mounted() {
     this.GET_PRODUCTS_FROM_API()
    
    },
    computed: {
      ...mapGetters([
        'PRODUCTS'
      ])
    }
  

  }
</script>

  <style scoped lang="scss">
  .catalog {
    h2 {
      text-align: left;
    }
  }
  .spinner {
        animation: rotate 2s linear infinite;
        z-index: 2;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -25px 0 0 -25px;
        width: 50px;
        height: 50px;
    }
  
  .spinner .path {
    stroke: hsl(210, 90%, 24%);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  .choiseLink {
    cursor: pointer;
    transition: all 0.25s ease;
    &:hover {
      color: $pink;
    }
  }
  

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
  

</style>