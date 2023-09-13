<template>
    <template v-if="productsList.length > 0 && choiseLink !== ''">
        <catalog-item
        v-for = "product in sortByType"
        :productData="product"
        :key="product.article"
        />
    </template>
    <template v-else-if="productsList.length > 0 && choiseLink === ''">
        <catalog-item
        v-for = "product in paginatedData"
        :productData="product"
        :key="product.article"
        />
    </template>
    <template v-else class='text-center col-9 mt-5'>
        Нет товаров удовлетворяющих вашему запросу
    </template>
    <div v-show="choiseLink === '' || sortByType.length > 6" class="col-12 text-center">
      <catalog-pagination
    :currentPage="currentPage"
    :pageCount="pageCount"
    @set-currentpage="setCurrentPage"
    />
    </div>
    
</template>

<script>
import { reactive, toRefs, computed} from "vue";
import CatalogPagination from '@/components/Catalog/CatalogPagination.vue'
export default {
    components: {CatalogPagination},
    props: {
        productsList: {
            type: Object,
            default() {
                return {};
            }
        },
        choiseLink: String,
        searchQuery: String
    },
    data() {
        return {
            isProductLoading: Boolean,
        }    
    },
    setup(props) {
    const state = reactive({
      currentPage: 1,
      rowsPerPage: 6,
      pageCount: computed(() =>
        Math.ceil(props.productsList.length / state.rowsPerPage)
      ),
      sortByType: computed(()=>
      props.productsList.filter(product => product.category == props.choiseLink)
      ),
      /*search: computed(() => 
      props.productsList.filter(product =>
        product.toLowerCase().includes(props.searchQuery.toLowerCase())
        )
      ),*/
      paginatedData: computed(() => 
        props.productsList.slice(
          (state.currentPage - 1) * state.rowsPerPage,
          state.currentPage * state.rowsPerPage,
          window.scrollTo(0,0)
        ) 
        
      ),
      
    });
    

    function setCurrentPage(number) {
      state.currentPage = number;
    }

    return {
      ...toRefs(state),
      setCurrentPage,
    };
  },

   
}

</script>

<style scoped>


</style>