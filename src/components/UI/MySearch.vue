<template>
    <div class="form-search  d-flex position-relative">
        <input 
        type="text" 
        class="search-catalog w-100" 
        placeholder="Поиск"
        :value="modelValue" 
        @input="updateInput">
        <div class="btn-search position-absolute">
            <img src="@/assets/img/catalog/search.svg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'my-search',
    props: {
        modelValue: [String, Number]

    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped lang="scss">
.form-search {
    .btn-search {
        right: 1.125rem;
        top: 25%;
    }
    input {
        padding: 1rem 2.25rem;
        border: none;
        background-color: $lite-blue;
        border-radius: 10px;
    }
}
</style>