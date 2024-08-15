<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/footer.vue';
import { RouterLink } from 'vue-router';
</script>


<template>
    <div class="max-w-100% overflowx-hidden">
        <div class="bg-[#D9D9D9] m-auto shadow-xl">
            <Header />
        </div>
        <div class="m-auto w-5/6 h-max mb-10">
            <h2 class="text-4xl font-semibold text-center m-10">В разработке...</h2>
            <div class="content-center m-auto w-1/4 h-max m-10">
        <ul>
            <li>
                <RouterLink to="/">
                    <h2 class="bg-[#ffb337] rounded-2xl text-black text-center font-bold p-2">Вернуться назад</h2>
                </RouterLink>
            </li>
        </ul>
    </div>
        </div>
        <div class="p-10">
            <Footer />
        </div>
    </div>
</template>