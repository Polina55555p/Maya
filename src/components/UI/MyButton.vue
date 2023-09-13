<template>
    <button>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'my-button',
}
</script>

<style lang="scss">


    .btn-border {
        border: 1px solid #fff;
        border-radius: 5px;
        background-color: transparent;
        color: #fff;
        padding: 7px 12px;
        font-size: 18px;
        line-height: 22px;
        cursor: pointer;
        transition: all 0.3s linear;
        &:hover {
            color: $pink;
            background-color: $lite-text;
        }
    }
    .btn-pink {
        border: none;
        border-radius: 5px;
        background-color: $lite-pink;
        color: $lite-text;
        padding: 25px 44px;
        font-size: 1rem;
        line-height: 20px;
        cursor: pointer;
        transition: all 0.3s linear;
        text-transform: uppercase;
        &:hover {
            background-color: $pink;
        }
    }
    .btn-small {
        border: 1px solid $pink;
        color: $pink;
        border-radius: 0.5rem;
        padding: 0.5rem 1.5rem;
        background-color: transparent;
        transition: all 0.2s ease-in;
        &:hover {
            color: $lite-text;
            background-color: $pink;
        }
    }
</style>