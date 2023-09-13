<template>
    <div class="select">
        <select :value="modelValue" @change="changeOption">
            <option value="">Сортировка по умолчанию</option>
            <option v-for="option in options" :key="option.value" :value="option.value">
                {{ option.name }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'my-sort',
    props: {
        options: {
            type: Array,
            default: () => []
        },
        modelValue: {
            type: String
        }
    },
    methods: {
        changeOption(event) {
            console.log(event);
            this.$emit('update:modelValue', event.target.value);
        }
    }
}

</script>

<style scoped lang="scss">
select {
    border: none;
    background-color: $lite-blue;
    padding: 1rem 2.5rem 1rem 2rem;
    border-radius: 10px;
    background-image: url(@/assets/img/catalog/arrow.svg);
    background-repeat: no-repeat, repeat;
    background-position: right 2rem top 50%, 0 0;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
}
</style>
