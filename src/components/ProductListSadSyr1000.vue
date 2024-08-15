<script setup>
import Product from '@/components/ProductSadSyr1000.vue';

defineProps({
    items: Array
})



</script>

<template>
    <Product
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :remain="item.remain"
    />
</template>