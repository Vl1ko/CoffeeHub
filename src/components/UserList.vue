<script setup>
import User from '@/components/User.vue';

defineProps({
    items: Array
})



</script>

<template>
    <User
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :phone="item.phone"
        :remain="item.remain"
    />
</template>