<template>  
<div class="wrap d-flex flex-column min-vh-100">
  <pre-header/>
    <main-header/>
    <main class="flex-fill">

        <router-view/>
    
    </main>
    <main-footer/>
  
</div>
  
</template>

<script>
import PreHeader from './components/PreHeader.vue';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
export default {
  components: {PreHeader, MainHeader, MainFooter}
}
</script>

<style lang="scss">

</style>
