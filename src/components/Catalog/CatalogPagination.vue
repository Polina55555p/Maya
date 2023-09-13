<template>
    <paginate
      v-model="currentPageNumber"
      :page-count="pageCount"
      :click-handler="clickCallback"
      :margin-pages="3"
      :prev-text="'❮'"
      :next-text="'❯'"
      :container-class="'pagination_custom'"
      :page-class="'page-item'"
      :page-link-class="'page_custom'"
      :active-class="'active-page'"
      :hide-prev-next="false"
    ></paginate>
  </template>
  
  <script>
  import Pagination from 'vuejs-paginate-next';
  import { toRefs, ref, onBeforeMount } from "vue";
  
  export default {
    props: {
      currentPage: Number,
      pageCount: Number,
    },
    components: {
      paginate: Pagination,
    },
    setup(props, context) {
      const { currentPage: onCurrentPage, pageCount: onPageCount } = toRefs(
        props
      );
  
      const currentPageNumber = ref(onCurrentPage.value);
  
      const clickCallback = () => {
        console.log(
          "Call Back Triggered",
          `Current Page - ${currentPageNumber.value}`
        );
  
        context.emit("set-currentpage", currentPageNumber.value);
      };
  
      onBeforeMount(() => {
        console.log(onCurrentPage.value, onPageCount.value);
      });
  
      return {
        clickCallback,
        onCurrentPage,
        onPageCount,
        currentPageNumber,
      };
    },
  };
  </script>
  
  <style lang="scss">
  .pagination_custom {
    background: white;
    margin: 0px;
    margin-top: 3rem;
    padding: 10px;
    display: flex;
    gap: 5px;
    align-items: center;
    border: none;
    box-sizing: border-box;
    overflow: hidden;
    word-wrap: break-word;
    align-content: center;
    justify-content: center;
  }
  
  .page-item {
    display: flex;
    cursor: pointer;
    border: none;
    margin-bottom: 0px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
  }
  
  .page_custom {
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 800;
    &:hover {
      background-color: $pink;
      border: none;
      color: #fff;
      border-radius: 0.5rem;
    }
  }
  
  .active-page {
    background-color: $pink-transparent;
    color: white !important;
    border-radius: 0.5rem;
    &:hover {
      border: none;
      color: #fff;
    }
  }
  .page-link {
    color: $pink;
    &:hover {
      color: $dark-text;
    }
  }
  
  

  .page-link:focus {
    z-index: 3;
    background-color: $pink;
    outline: 0;
    box-shadow: none;
}
  </style>