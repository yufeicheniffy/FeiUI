<template>
    <button class="fei-button primary">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'FeiButton',
    }

</script>

<style lang="scss">
    @import "../../../style/base";

    .fei-button {
        font-size: $font-size-normal;
        padding: 5px 16px;
        box-sizing: border-box;
        border-style: none;
        border-radius: 2px;
        color: $color-white;

        &, .primary {
            background-color: $color-primary;
            border-color: $color-primary;

            &:hover {
                background-color: $color-primary-light-50;
                border-color: $color-primary-light-50;
            }

            &:active {
                background-color: $color-primary-click;
                border-color: $color-primary-click;
            }
        }

        &, .normal{

        }

        &:disabled{
            background-color: $color-primary-disable;
                border-color:  $color-primary-disable;
            color: $color-black-light-20;
        }

    }
</style>