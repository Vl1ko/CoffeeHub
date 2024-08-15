<script setup>
import Worker from '@/components/Worker.vue';

defineProps({
    items: Array
})



</script>

<template>
    <Worker
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :phone="item.phone"
        :role="item.role"
        :pas="item.pas"
    />
</template>