<script setup>
import axios from 'axios';
import { root } from 'postcss';
import { onMounted } from 'vue';


defineProps({
    id: Number,
    name: String,
    phone: String,
    remain: Number
})


async function YourMethod() {
    console.log(this.result)
    try {
        await axios.patch('https://a72d3b854215875f.mokky.dev/users/'+id, {
                        remain: Number(remain)+1
                        
                    })
        console.log('success!')
    }
    catch (error) {
        console.log(error)
    }
}


</script>

<template>
    <div class="m-auto w-5/6 h-max mb-10">
        <div class = "text-center bg-white shadow-md rounded px-4 pt-4 pb-4 mb-4" id="form">
            <label class="block text-gray-700 text-base mb-2" for="username">
                <p>{{ name }}</p>
                <b>{{ phone }}</b>
                <p>Куплено: {{ remain }} кофе</p>
                <p>Осталось: {{ 7 - remain%7 }} кофе</p>

            </label>
                <button
                    type="submit"
                    class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    :id=id
                    v-on:click=" async($event) => {
                        await axios.patch('https://a72d3b854215875f.mokky.dev/users/'+id, {
                        remain: Number(remain)+1
                    })
                    }">
                    Начислить кофе
                </button>
            <button
                class="inline-block rounded bg-red-600 px-6 pb-2 pt-2.5 mt-2 text-xs font-medium uppercase leading-normal text-white shadow-primary-3"
                :id=id
                v-on:click="async($event) => {
                await axios.delete('https://a72d3b854215875f.mokky.dev/users/'+id)
                // await this.$router.go(0)
                }">
                Удалить пользователя
            </button>
        </div>
    </div>
</template>

