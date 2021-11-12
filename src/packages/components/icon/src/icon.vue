<template>
    <svg aria-hidden="true" class="fei-icon">
        <use :xlink:href="`#icon-${iconName}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "FeiIcon",
        props: ["iconName"],
    }
</script>

<style lang="scss">
    @import "../../../style/base";

    /*icon margin*/
    .fei-icon {
        width: 1em;
        height: 1em;
        fill: $color-white;
    }
</style>