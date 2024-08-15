<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, reactive, ref, watch } from 'vue';
import axios from 'axios';

import Header from '@/components/Header.vue';
import Footer from '@/components/footer.vue';
import UserList from '@/components/UserList.vue';
import router from '@/router';

let self = this;

const items = ref([])

const filters = reactive({
    sortBy: 'phone',
    searchQuery: ''
})

const OnChangeSearch = (event) => {
    filters.searchQuery = event.target.value
}

const OnChangeSelect = (event) => {
    filters.sortBy = event.target.value
}

const fetchItems = async () => {
    try {
        const params = {
            sortBy: filters.sortBy
        }

        if (filters.sortBy === 'phone') {
            params.phone='*'+filters.searchQuery+'*';
        }

        if (filters.sortBy === 'name') {
            params.name='*'+filters.searchQuery+'*';
        }

        const {data} = await axios.get('https://a72d3b854215875f.mokky.dev/users', {
            params
        })
        items.value = data
    } catch (error) {
        console.log(error)
    }
}


const onSubmit = async () => {
    try {
        await axios.post('https://a72d3b854215875f.mokky.dev/users/', {
                            name: us_name.value,
                            phone: us_phone.value,
                            remain: 0
                        })
        // router.go(0)

    } catch (error) {
        console.log(error)
    }
}
        

onMounted(fetchItems)
watch(filters, fetchItems)




</script>

<template>
    <div class="max-w-100% overflowx-hidden">
        <div class="bg-gray-300 m-auto shadow-xl">
            <Header />
        </div>
        <h2 class="text-4xl font-semibold text-center m-10">Программа лояльности</h2>
            <form class="review-form max-w-100% text-center mb-10 mt-2" @submit.prevent="onSubmit">
                <h2 class="text-xl font-semibold mb-2" >Добавить пользователя</h2>
                <p class="mb-2">
                    <label for="us_name">Имя:</label>
                    <input id="us_name" class="ml-2" v-model="name" placeholder="Имя пользователя"/>  
                </p>

                <p class="mb-2">
                    <label for="us_phone">Номер телефона:</label>
                    <input id="us_phone" class="ml-2" v-model="phone" placeholder="Номер пользователя"/>
                </p>

                <p>
                    <button type="submit" class="bg-[#ffb337] rounded-2xl text-black text-center font-bold p-2 mt-2">Добавить пользователя</button>
                </p>
            </form>
        <div class="">
            <select @change="OnChangeSelect" class="mb-2">
                <option value="phone">Искать по номеру</option>
                <option value="name">Искать по имени</option>
            </select>
        </div>
        <input
            class="shadow appearance-none border rounded text-center w-full mb-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Поиск пользователя"
            @input="OnChangeSearch"
        />
        <UserList :items="items"/>

        <div class="content-center m-auto w-1/4 h-max m-10">
        <ul>
            <li>
                <RouterLink to="/">
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