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
            <h2 class="text-4xl font-semibold text-center m-10">Прачечный, 3</h2>
        </div>
        <div class="columns-2 place-content-center text-center gap-2 m-2">
            <ul>
                <li>
                    <RouterLink to="/prachechniy/milk"><h2 class="bg-gray-100 h-[75px] break-inside-avoid-column transition delay-100 duration-350 ease-in-out no-underline font-medium  rounded-3xl p-4 mb-2 hover:bg-gray-300 transition delay-100">🥛 Молочка</h2></RouterLink>
                </li>
                <li>
                    <RouterLink to="/prachechniy/water"><h2 class="bg-gray-100 h-[75px] break-inside-avoid-column transition delay-100 duration-350 ease-in-out no-underline font-medium text-lg rounded-3xl p-2 mb-2 hover:bg-gray-300 transition delay-100">🥤 Соки, вода, <br>тоник</h2></RouterLink>
                </li>
                <li>
                    <RouterLink to="/prachechniy/top"><h2 class="bg-gray-100 h-[75px] break-inside-avoid-column transition delay-100 duration-350 ease-in-out no-underline font-medium text-lg rounded-3xl p-2 mb-2 hover:bg-gray-300 transition delay-100">➕ Топпинги к <br>напиткам</h2></RouterLink>
                </li>
                <li>
                    <RouterLink to="/prachechniy/kond"><h2 class="bg-gray-100 h-[75px] break-inside-avoid-column transition delay-100 duration-350 ease-in-out no-underline font-medium text-lg rounded-3xl p-2 mb-2 hover:bg-gray-300 transition delay-100">🍭 Кондитерские <br>изделия</h2></RouterLink>
                </li>
                <li>
                    <RouterLink to="/prachechniy/sw"><h2 class="bg-gray-100 h-[75px] break-inside-avoid-column transition delay-100 duration-350 ease-in-out no-underline font-medium text-lg rounded-3xl p-2 mb-2 hover:bg-gray-300 transition delay-100">🍪 Десерты<br>Sweet Marin</h2></RouterLink>
                </li>
                <li>
                    <RouterLink to="/"><h2 class="bg-gray-100 h-[75px] break-inside-avoid-column transition delay-100 duration-350 ease-in-out no-underline font-medium text-lg rounded-3xl p-2 mb-2 hover:bg-gray-300 transition delay-100">🍩 Десерты<br>Desert Fantasy</h2></RouterLink>
                </li>
                <li>
                    <RouterLink to="/prachechniy/cups"><h2 class="bg-gray-100 h-[75px] break-inside-avoid-column transition delay-100 duration-350 ease-in-out no-underline font-medium text-lg rounded-3xl p-2 mb-2 hover:bg-gray-300 transition delay-100">🥃 Стаканы и<br>крышки</h2></RouterLink>
                </li>
                <li>
                    <RouterLink to="/prachechniy/up"><h2 class="bg-gray-100 h-[75px] break-inside-avoid-column transition delay-100 duration-350 ease-in-out no-underline font-medium text-lg rounded-3xl p-4 mb-2 hover:bg-gray-300 transition delay-100">📦 Упаковка</h2></RouterLink>
                </li>
                <li>
                    <RouterLink to="/prachechniy/xoz"><h2 class="bg-gray-100 h-[75px] break-inside-avoid-column transition delay-100 duration-350 ease-in-out no-underline font-medium text-lg rounded-3xl p-2 mb-2 hover:bg-gray-300 transition delay-100">🧹 Хоз.<br>товары</h2></RouterLink>
                </li>
                <li>
                    <RouterLink to="/prachechniy/syr1000"><h2 class="bg-gray-100 h-[75px] break-inside-avoid-column transition delay-100 duration-350 ease-in-out no-underline font-medium text-lg rounded-3xl p-2 mb-2 hover:bg-gray-300 transition delay-100">🍾 Сиропы<br>(1л)</h2></RouterLink>
                </li>
                <li>
                    <RouterLink to="/prachechniy/syr330"><h2 class="bg-gray-100 h-[75px] break-inside-avoid-column transition delay-100 duration-350 ease-in-out no-underline font-medium text-lg rounded-3xl p-2 mb-2 hover:bg-gray-300 transition delay-100">🍼 Сиропы<br>(330мл)</h2></RouterLink>
                </li>
                <li>
                    <RouterLink to="/prachechniy/coffee"><h2 class="bg-gray-100 h-[75px] break-inside-avoid-column transition delay-100 duration-350 ease-in-out no-underline font-medium text-lg rounded-3xl p-4 mb-2 hover:bg-gray-300 transition delay-100">☕ Кофе</h2></RouterLink>
                </li>
                <li>
                    <RouterLink to="/prachechniy/drinks"><h2 class="bg-gray-100 h-[75px] break-inside-avoid-column transition delay-100 duration-350 ease-in-out no-underline font-medium text-lg rounded-3xl p-4 mb-2 hover:bg-gray-300 transition delay-100">🍹 Напитки</h2></RouterLink>
                </li>
                <li>
                    <RouterLink to="/prachechniy/proch"><h2 class="bg-gray-100 h-[75px] break-inside-avoid-column transition delay-100 duration-350 ease-in-out no-underline font-medium text-lg rounded-3xl p-4 mb-2 hover:bg-gray-300 transition delay-100">🌚 Прочее</h2></RouterLink>
                </li>
            </ul>
        </div>
        <div class="p-10">
            <Footer />
        </div>
    </div>
</template>