<script setup>
import axios from 'axios';
import { root } from 'postcss';
import { onMounted } from 'vue';


defineProps({
    id: Number,
    name: String,
    phone: String,
    role: String,
    pas: String
})

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

const roles = {
    1: "Босс",
    2: "Админ",
    3: "Куратор",
    4: "Бариста 1 уровень",
    5: "Бариста 2 уровень"
}

const us_role = Number(getKeyByValue(roles, localStorage.getItem('role')))

async function YourMethod() {
    console.log(this.result)
}


</script>

<template>
    <div class="m-auto w-5/6 h-max mb-10">
        <form class = "text-center bg-white shadow-md rounded px-4 pt-4 pb-4 mb-4" id="form">
            <label class="block text-gray-700 text-base mb-2" for="username">
                <p>Имя: {{ name }}</p>
                <p>Логин: {{ phone }}</p>
                <p>Права доступа: {{ role }}</p>
                <p>Пароль: {{ pas }}</p>

            </label>
            <button
                v-if="us_role < 3" 
                class="inline-block rounded bg-red-600 px-6 pb-2 pt-2.5 mt-2 text-xs font-medium uppercase leading-normal text-white shadow-primary-3"
                :id=id
                v-on:click="async($event) => {
                await axios.delete('https://c7a1808e4bdefba8.mokky.dev/users/'+id)
                await this.$router.go(0)
                }">
                Удалить пользователя
            </button>
        </form>
    </div>
</template>

