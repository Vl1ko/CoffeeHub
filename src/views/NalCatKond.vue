<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, ref} from 'vue';
import axios from 'axios';

import Header from '@/components/Header.vue';
import Footer from '@/components/footer.vue';
import ProductList from '@/components/ProductListNalKond.vue';


const items = ref([])


onMounted(async () => {
    try {
        const {data} = await axios.get('https://c926c1b080b9a593.mokky.dev/nalKond')
        items.value = data
    } catch (error) {
        alert("Что-то пошло не так...\n\nКод ошибки: " + error.response.status)
        console.log(error)
    }
})


</script>

<template>
    <div class="max-w-100% overflowx-hidden">
        <div class="bg-gray-300 m-auto shadow-xl">
            <Header />
        </div>
        <h2 class="text-4xl font-semibold text-center m-10">Наличная, 49<br>Раздел: Кондитерские изделия</h2>
        <ProductList v-if="items.length > 0"  :items="items"/>
        <div v-else class="content-center text-center m-auto pb-10 w-1/2">
            <img class="m-auto w-1/4 pb-3" src="/src/components/icons/error.svg" alt="error">
            <p class="ml-2 mt-auto">Упс... Что-то пошло не так<br>Если через время ошибка не пропадет, обратитесь к <a href="https://t.me/v1lko"><em>разработчику.</em></a>, указав код ошибки.</p>
        </div>
        
        <div class="content-center m-auto w-1/4 h-max m-10">
        <ul>
            <li>
                <RouterLink to="/nalichnaya">
                    <h2 class="bg-[#ffb337] rounded-2xl text-black text-center font-bold p-2">Назад</h2>
                </RouterLink>
            </li>
        </ul>
    </div>
        <div class="p-10">
            <Footer />
        </div>
    </div>
</template>